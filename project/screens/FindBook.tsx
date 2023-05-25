import * as React from "react";
import styles from "../styles/style";
import {
  useTheme,
  Text,
} from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";

const FindBook = () => {
  const theme = useTheme();
  const { navigate } = useNavigation();
  return (
    <View
      style={[styles.flex1, { backgroundColor: theme.colors.surface }]}
    >
      <Text>one</Text>
    </View>
  );
};

export default FindBook;
