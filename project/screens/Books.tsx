import * as React from "react";
import styles from "../styles/style";
import {
  useTheme,
  Text,
} from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { Dimensions, SafeAreaView, ScrollView, View } from "react-native";
import MyHeader from "../components/atoms/MyHeader";
import MyBooks from "../components/organisms/MyBooks";
import RentedBooks from "../components/organisms/RentedBooks";

const Account = () => {
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
      <MyHeader title="Books" isAllSelected={isAllSelected} scrollRef={scrollRef} tabTitle1="My books" tabTitle2="Rented books" />
      <ScrollView
        ref={scrollRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContainer}
        onScroll={handleOnScroll}
      >
        <MyBooks />
        <RentedBooks />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Account;
