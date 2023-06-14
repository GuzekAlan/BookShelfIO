import * as React from "react";
import styles from "../../styles/style";
import { useTheme, Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { ScrollView, View } from "react-native";
import MyView from "../atoms/MyView";
import * as Yup from "yup";
import { Formik } from "formik";
import MyInput from "../atoms/MyInput";
import StyledButton from "../atoms/StyledButton";
import LoggedProfile from "./LoggedProfile";

const LoginSchema = Yup.object().shape({
    login: Yup.string()

    .min(2, "Login is too short")

    .max(15, "Login is too long!")

    .required("Login is required"),

  password: Yup.string()

    .matches(/\w*[a-z]\w*/, "Password must have a small letter")

    .matches(/\w*[A-Z]\w*/, "Password must have a capital letter")

    .min(8, ({ min }) => `Password must be at least ${min} characters`)

    .required("Password is required"),

});

const Login = () => {
  const theme = useTheme();
  const { navigate } = useNavigation();
  return (
    <MyView>
      <ScrollView>
        <Formik
          onSubmit={(values) => {
            console.log("values", values);
            navigate("LoggedProfile");
          }}
          initialValues={{
            login: "",
            password: "",
          }}
          validationSchema={LoginSchema}
        >
          {({ submitForm, errors, touched }) => (
            <>
              <MyInput name="login" label="Login:"  />
              {errors.login && touched.login ? (
                <Text style={[{ color: "red" }, styles.padding6]}>
                  {errors.login}
                </Text>
              ) : null}
              <MyInput name="password" label="Hasło:" />
              {errors.password && touched.password ? (
                <Text style={[{ color: "red" }, styles.padding6]}>
                  {errors.password}
                </Text>
              ) : null}
              <StyledButton onPress={submitForm} title="Zaloguj" />
            </>
          )}
        </Formik>
      </ScrollView>
    </MyView>
  );
};

export default Login;
