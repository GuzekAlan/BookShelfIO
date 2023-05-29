import * as React from "react";
import styles from "../styles/style";
import {
  useTheme,
  Text,
} from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, View } from "react-native";
import BooksProfile from "../components/organisms/BooksProfile";

const FindBook = () => {
  const theme = useTheme();
  const { navigate } = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <BooksProfile />
    </SafeAreaView>
  );
};

export default FindBook;
