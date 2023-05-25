import * as React from "react";
import styles from "../../styles/style";
import { useTheme, Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import MyView from "../atoms/MyView";
import MyHeader from "../atoms/MyHeader";
import StyledButton from "../atoms/StyledButton";

const LoggedProfile = () => {
  const theme = useTheme();
  const { navigate } = useNavigation();
  const username = "Viktoriia";
  const email = "email@gmail.com";
  const phone = "123123123";
  const rating = 2.6;

  return (
    <>
      <MyHeader title={"Hello, " + username} />
      <MyView>
        <Text variant="bodyLarge">{"E-mail: " + email}</Text>
        <Text variant="bodyLarge">{"Phone number: " + phone}</Text>
        <Text variant="bodyLarge">{"Rating: " + rating}</Text>
        <StyledButton title="Change details" />
        <StyledButton title="Log out" />
      </MyView>
    </>
  );
};

export default LoggedProfile;
