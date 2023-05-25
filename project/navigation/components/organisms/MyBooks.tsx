import * as React from "react";
import styles from "../../styles/style";
import {
  useTheme,
  Text,
} from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import MyView from "../atoms/MyView";

const MyBooks = () => {
  const theme = useTheme();
  const { navigate } = useNavigation();
  return (
    <MyView
    >
      <Text>MyBooks</Text>
    </MyView>
  );
};

export default MyBooks;
