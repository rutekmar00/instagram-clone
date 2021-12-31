import { firebase } from "../lib/firebase";

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
