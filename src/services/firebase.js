import { firebase, firestoreFieldValue } from "../lib/firebase";

export async function getUserById(userId) {
  const output = await firebase
    .firestore()
    .collection("users")
    .where("userId", "==", userId)
    .get();

  const user = output.docs.map((doc) => ({
    ...doc.data(),
    docId: doc.id,
  }));

  return user;
}

export async function getUserPosts(userId, following) {
  const output = await firebase
    .firestore()
    .collection("posts")
    .where("ownerId", "in", following)
    .get();

  const posts = await Promise.all(
    output.docs.map(async (post) => {
      const postData = post.data();
      let users = {};
      let newData;
      if (postData.userNamePath) {
        const ref = await postData.userNamePath.get();
        if (!users.hasOwnProperty(ref.id)) {
          users[ref.id] = ref.data().userName;
        }
        newData = Object.assign(postData, { userName: ref.data().userName });
      } else {
        newData = postData;
      }

      for (const comment in newData.comments) {
        let authorPath;
        if (newData.comments[comment].authorNamePath !== undefined) {
          authorPath = newData.comments[comment].authorNamePath;
        }
        if (authorPath !== undefined) {
          if (users.hasOwnProperty(authorPath.id)) {
            newData.comments[comment].author = users[authorPath.id];
          } else {
            const ref = await authorPath.get();
            newData.comments[comment].author = ref.data().userName;
          }
        }
      }

      return { ...newData, docId: post.id };
    })
  );

  const postsWithLikes = await Promise.all(
    posts.map(async (post) => {
      let likedPost = false;
      if (post.likes.includes(userId)) {
        likedPost = true;
      }
      return { ...post, likedPost };
    })
  );

  return postsWithLikes;
}

export async function likeActionPost(postDocId, userId, makeLike) {
  const output = await firebase
    .firestore()
    .collection("posts")
    .doc(postDocId)
    .get();

  let { numberOfLikes } = output.data();
  makeLike ? numberOfLikes++ : numberOfLikes--;

  firebase
    .firestore()
    .collection("posts")
    .doc(postDocId)
    .update({
      likes: makeLike
        ? firestoreFieldValue.arrayUnion(userId)
        : firestoreFieldValue.arrayRemove(userId),
      numberOfLikes: numberOfLikes.toString(),
    });
  return numberOfLikes;
}

export async function postComment(postDocId, comment, authorId) {
  const output = await firebase
    .firestore()
    .collection("posts")
    .doc(postDocId)
    .get();

  const outputUser = await getUserById(authorId);
  const { comments, numberOfComments } = output.data();
  let commentId = "";
  if (comments.length === 0) {
    commentId = "0";
    firebase
      .firestore()
      .collection("posts")
      .doc(postDocId)
      .update({
        comments: [
          {
            authorNamePath: firebase
              .firestore()
              .doc(`/users/${outputUser[0].docId}`),
            comment: comment,
            commentId: commentId.toString(),
          },
        ],
        numberOfComments: (parseInt(numberOfComments) + 1).toString(),
      });
  } else {
    commentId = comments[comments.length - 1].commentId;
    commentId++;
    firebase
      .firestore()
      .collection("posts")
      .doc(postDocId)
      .update({
        comments: firestoreFieldValue.arrayUnion({
          authorNamePath: firebase
            .firestore()
            .doc(`/users/${outputUser[0].docId}`),
          comment: comment,
          commentId: commentId.toString(),
        }),
        numberOfComments: (parseInt(numberOfComments) + 1).toString(),
      });
  }

  return commentId;
}

export async function getSuggestedProfiles(userId, following) {
  console.log(userId);
  console.log(following);

  let query = firebase.firestore().collection("users");

  if (following !== undefined && following !== null && following.length > 0) {
    query = query.where("userId", "not-in", [...following, userId]);
  } else {
    query = query.where("userId", "!=", userId);
  }

  const output = await query.limit(5).get();

  const suggestedProfiles = output.docs.map((profile) => ({
    ...profile.data(),
  }));

  return suggestedProfiles;
}

export async function followUserByUserId(
  userId,
  userToFollowId,
  typeOfOperation
) {
  const userLoggedIn = await getUserById(userId);
  const userToFollow = await getUserById(userToFollowId);

  firebase
    .firestore()
    .collection("users")
    .doc(userLoggedIn[0].docId)
    .update({
      following: typeOfOperation
        ? firestoreFieldValue.arrayRemove(userToFollow[0].userId)
        : firestoreFieldValue.arrayUnion(userToFollow[0].userId),
    });

  firebase
    .firestore()
    .collection("users")
    .doc(userToFollow[0].docId)
    .update({
      followers: typeOfOperation
        ? firestoreFieldValue.arrayRemove(userLoggedIn[0].userId)
        : firestoreFieldValue.arrayUnion(userLoggedIn[0].userId),
    });

  return [...userToFollow, ...userLoggedIn];
}
