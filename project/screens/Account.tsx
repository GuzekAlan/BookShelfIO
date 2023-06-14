import * as React from "react";
import styles from "../styles/style";
import {
  useTheme,
} from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { Dimensions, SafeAreaView, ScrollView } from "react-native";
import MyHeader from "../components/atoms/MyHeader";
import Login from "../components/organisms/Login";
import Register from "../components/organisms/Register";
import LoggedProfile from "../components/organisms/LoggedProfile";

const SellCattle = () => {
  const theme = useTheme();
  const { navigate } = useNavigation();
  const [isAllSelected, setIsAllSelected] = React.useState(true);
  const scrollRef = React.useRef<ScrollView>(null);

  const handleOnScroll = (e: { nativeEvent: { contentOffset: { x: number; }; }; }) => {
    setIsAllSelected(
      Math.round(
        e.nativeEvent.contentOffset.x / Dimensions.get("window").width
      ) === 0
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MyHeader title="My Profile" isAllSelected={isAllSelected} scrollRef={scrollRef} tabTitle1="Log in" tabTitle2="Sign up" />
      <ScrollView
        ref={scrollRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContainer}
        onScroll={handleOnScroll}
      >
        <Login />
        <Register />
      </ScrollView>
    </SafeAreaView>

  );
};

export default SellCattle;
