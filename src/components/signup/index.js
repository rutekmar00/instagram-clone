import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Link, useHistory } from "react-router-dom";
import {
  SignUpFormHolder,
  SubTitle,
  SignUpSubmit,
  LoginHolder,
} from "../signup/styles/signup";
import {
  Form,
  InputSection,
  InputField,
  Input,
  Span,
  Title,
  Error,
} from "../signin/styles/signin";
import { firebase } from "../../lib/firebase";

const SignUpSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, "Too short!")
    .max(20, "Too long!")
    .required("Required"),
  userName: Yup.string()
    .min(2, "Too short!")
    .max(20, "Too long!")
    .required("Required"),
  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    )
    .max(50, "Too long!")
    .required("Required"),
  email: Yup.string().email("Invalid email!").required("Required"),
});

export default function SignUp() {
  const history = useHistory();

  return (
    <>
      <SignUpFormHolder>
        <Formik
          initialValues={{
            fullName: "",
            userName: "",
            password: "",
            email: "",
          }}
          validationSchema={SignUpSchema}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            try {
              const createdUserResult = await firebase
                .auth()
                .createUserWithEmailAndPassword(values.email, values.password);

              await createdUserResult.user.updateProfile({
                displayName: values.userName,
              });

              await firebase.firestore().collection("users").add({
                userId: createdUserResult.user.uid,
                userIcon: process.env.USER_DEFAULT_ICON,
                userName: values.userName,
                fullName: values.fullName,
                email: values.email,
                followers: [],
                following: [],
                dateCreated: Date.now(),
              });
            } catch (error) {
              resetForm();
              console.log(error);
            }
            history.push("/");
            setSubmitting(false);
            resetForm();
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
              <SubTitle>
                Sign up to see photos and videos from your friends.
              </SubTitle>
              <InputSection>
                <InputField>
                  <Span className={values.email.length > 0 ? "small-span" : ""}>
                    {" "}
                    Email
                  </Span>
                  <Input
                    className={values.email.length > 0 ? "small-input" : ""}
                    type="email"
                    name="email"
                    aria-label="Email"
                    autoComplete="off"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </InputField>
                {errors.email && touched.email && <Error>{errors.email}</Error>}
                <InputField>
                  <Span
                    className={values.fullName.length > 0 ? "small-span" : ""}
                  >
                    {" "}
                    Full Name
                  </Span>
                  <Input
                    className={values.fullName.length > 0 ? "small-input" : ""}
                    type="text"
                    name="fullName"
                    aria-label="Full Name"
                    autoComplete="off"
                    value={values.fullName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </InputField>
                {errors.fullName && touched.fullName && (
                  <Error>{errors.fullName}</Error>
                )}
                <InputField>
                  <Span
                    className={values.userName.length > 0 ? "small-span" : ""}
                  >
                    {" "}
                    User Name
                  </Span>
                  <Input
                    className={values.userName.length > 0 ? "small-input" : ""}
                    type="text"
                    name="userName"
                    aria-label="User Name"
                    autoComplete="off"
                    value={values.userName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </InputField>
                {errors.userName && touched.userName && (
                  <Error>{errors.userName}</Error>
                )}
                <InputField>
                  <Span
                    className={values.password.length > 0 ? "small-span" : ""}
                  >
                    {" "}
                    Password
                  </Span>
                  <Input
                    className={values.password.length > 0 ? "small-input" : ""}
                    type="password"
                    name="password"
                    aria-label="Password"
                    autoComplete="off"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </InputField>
                {errors.password && touched.password && (
                  <Error>{errors.password}</Error>
                )}
              </InputSection>
              <SignUpSubmit type="submit" disabled={!(isValid && dirty)}>
                Sign up
              </SignUpSubmit>
            </Form>
          )}
        </Formik>
      </SignUpFormHolder>
      <LoginHolder>
        <p>
          Have an account? <Link to="/">Log in</Link>
        </p>
      </LoginHolder>
    </>
  );
}
