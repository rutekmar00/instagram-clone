import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import {
  Image,
  Title,
  FormHolder,
  Form,
  InputSection,
  InputField,
  Error,
  Span,
  Input,
  Submit,
  RegistrationHolder,
} from "./styles/signin";

import { firebase } from "../../lib/firebase";
import { getUserById } from "../../services/firebase";
import { useDispatch } from "react-redux";
import {
  setActiveUser,
  setActiveUserIcon,
  setUserFullName,
} from "../../slices/user";
import { setUserFollowing } from "../../slices/userInformation";

const SignInSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "Password has at least 8 characters!")
    .required("Required"),
  email: Yup.string().email("Invalid email!").required("Required"),
});

export default function SignIn() {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    function getUser() {
      firebase.auth().onAuthStateChanged(async (user) => {
        if (user != null) {
          const userId = user.uid;
          dispatch(
            setActiveUser({
              userName: user.displayName,
              userEmail: user.email,
              userId: user.uid,
              isLoggedIn: true,
            })
          );
          if (userId != null) {
            try {
              const user = await getUserById(userId);
              if (user[0] !== undefined) {
                dispatch(
                  setUserFollowing({
                    following: user[0].following,
                  })
                );
                dispatch(
                  setUserFullName({
                    userFullName: user[0].fullName,
                  })
                );
                dispatch(
                  setActiveUserIcon({
                    userIcon: user[0].userIcon,
                  })
                );
                navigate("/main");
              }
            } catch (error) {
              console.error(error);
            }
          }
        }
      });
    }
    getUser();
  }, []);

  return (
    <>
      <FormHolder>
        <Formik
          initialValues={{
            password: "",
            email: "",
          }}
          validationSchema={SignInSchema}
          onSubmit={async (values, { resetForm }) => {
            try {
              await firebase
                .auth()
                .signInWithEmailAndPassword(values.email, values.password)
                .then(async (userCredential) => {
                  let user = userCredential.user;
                  dispatch(
                    setActiveUser({
                      userName: user.displayName,
                      userEmail: user.email,
                      userId: user.uid,
                      isLoggedIn: true,
                    })
                  );
                  const userFirestore = await getUserById(user.uid);
                  if (userFirestore != null) {
                    dispatch(
                      setUserFollowing({
                        following: userFirestore[0].following,
                      })
                    );
                    dispatch(
                      setUserFullName({
                        userFullName: user[0].fullName,
                      })
                    );
                    dispatch(
                      setActiveUserIcon({
                        userIcon: user[0].userIcon,
                      })
                    );
                  }
                });
            } catch (error) {
              let errorMessage = error.message;
              setError(errorMessage);
              console.log(error.message);
              resetForm();
            }
            navigate("/main");
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isValid,
            dirty,
          }) => (
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(e);
              }}
            >
              <Title />
              <InputSection>
                <InputField>
                  <Span className={values.email.length > 0 ? "small-span" : ""}>
                    Email
                  </Span>
                  <Input
                    className={values.email.length > 0 ? "small-input" : ""}
                    type="text"
                    name="email"
                    aria-label="Email"
                    autoComplete={"off"}
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </InputField>
                {errors.email && touched.email && <Error>{errors.email}</Error>}
                <InputField>
                  <Span
                    className={values.password.length > 0 ? "small-span" : ""}
                  >
                    Password
                  </Span>
                  <Input
                    className={values.password.length > 0 ? "small-input" : ""}
                    type="password"
                    name="password"
                    aria-label="Password"
                    autoComplete={"off"}
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </InputField>
                {errors.password && touched.password && (
                  <Error>{errors.password}</Error>
                )}
              </InputSection>
              {error && <Error>{error}</Error>}
              <Submit
                className={isValid && dirty ? "form-valid" : ""}
                disabled={!(isValid && dirty)}
              >
                Log In
              </Submit>
            </Form>
          )}
        </Formik>
      </FormHolder>
      <RegistrationHolder>
        <p>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </RegistrationHolder>
    </>
  );
}

export function Images() {
  const [time, setTime] = useState(Date.now());
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 4000);
    setCounter((c) => c + 1);
    return () => {
      clearInterval(interval);
    };
  }, [time]);

  useEffect(() => {
    if (counter === 6) {
      setCounter(1);
    }
  }, [counter]);

  return (
    <>
      <Image
        src="../images/signin/1.jpg"
        className={
          counter === 1
            ? "current-image"
            : "" || counter === 2
            ? "previous-image"
            : ""
        }
      />
      <Image
        src="../images/signin/2.jpg"
        className={
          counter === 2
            ? "current-image"
            : "" || counter === 3
            ? "previous-image"
            : ""
        }
      />
      <Image
        src="../images/signin/3.jpg"
        className={
          counter === 3
            ? "current-image"
            : "" || counter === 4
            ? "previous-image"
            : ""
        }
      />
      <Image
        src="../images/signin/4.jpg"
        className={
          counter === 4
            ? "current-image"
            : "" || counter === 5
            ? "previous-image"
            : ""
        }
      />
      <Image
        src="../images/signin/5.jpg"
        className={
          counter === 5
            ? "current-image"
            : "" || counter === 1
            ? "previous-image"
            : ""
        }
      />
    </>
  );
}
