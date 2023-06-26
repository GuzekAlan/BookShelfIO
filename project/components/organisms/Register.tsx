import * as React from "react"
import styles from "../../styles/style"
import { useTheme, Text } from "react-native-paper"
import { useNavigation } from "@react-navigation/native"
import { ScrollView, View } from "react-native"
import MyView from "../atoms/MyView"
import * as Yup from "yup"
import { Formik } from "formik"
import MyInput from "../atoms/MyInput"
import StyledButton from "../atoms/StyledButton"
import LoggedProfile from "./LoggedProfile"
import { registerUser } from "../../api"

const SignupSchema = Yup.object().shape({
  name: Yup.string()

    .min(2, "Name is too short")

    .max(15, "Name is too long!")

    .required("Name is required"),

  email: Yup.string()

    .email("Please enter valid email")

    .required("Email is required"),

  number: Yup.string()

    .matches(/(\d){9}\b/, "Enter a valid phone number")

    .required("Phone number is required"),

  password: Yup.string()

    .matches(/\w*[a-z]\w*/, "Password must have a small letter")

    .matches(/\w*[A-Z]\w*/, "Password must have a capital letter")

    .min(8, ({ min }) => `Password must be at least ${min} characters`)

    .required("Password is required"),

  conformPassword: Yup.string()

    .oneOf([Yup.ref("password")], "Passwords do not match")
    .required("Confirm password is required")
})

const Register = () => {
  const theme = useTheme()
  const { navigate } = useNavigation()
  return (
    <MyView>
      <ScrollView>
        <Formik
          onSubmit={(values) => {
            console.log("values", values)
            const newUserData = {
              username: values.name,
              email: values.email,
              phone_number: values.number,
              password: values.password,
              first_name: values.name,
              last_name: values.name
            }
            registerUser(newUserData)
            navigate("LoggedProfile")
          }}
          initialValues={{
            name: "",
            email: "",
            number: "",
            password: "",
            conformPassword: ""
          }}
          validationSchema={SignupSchema}>
          {({ submitForm, errors, touched }) => (
            <>
              <MyInput name='name' label='Imię:' />
              {errors.name && touched.name ? (
                <Text style={[{ color: "red" }, styles.padding6]}>
                  {errors.name}
                </Text>
              ) : null}
              <MyInput name='email' label='Email:' />
              {errors.email && touched.email ? (
                <Text style={[{ color: "red" }, styles.padding6]}>
                  {errors.email}
                </Text>
              ) : null}
              <MyInput name='number' label='Phone number:' />
              {errors.number && touched.number ? (
                <Text style={[{ color: "red" }, styles.padding6]}>
                  {errors.number}
                </Text>
              ) : null}
              <MyInput name='password' label='Hasło:' />
              {errors.password && touched.password ? (
                <Text style={[{ color: "red" }, styles.padding6]}>
                  {errors.password}
                </Text>
              ) : null}
              <MyInput name='conformPassword' label='Powtórz hasło:' />
              {errors.conformPassword && touched.conformPassword ? (
                <Text style={[{ color: "red" }, styles.padding6]}>
                  {errors.conformPassword}
                </Text>
              ) : null}
              <StyledButton onPress={submitForm} title='Zarejestruj' />
            </>
          )}
        </Formik>
      </ScrollView>
    </MyView>
  )
}

export default Register
