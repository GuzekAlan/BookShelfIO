import * as React from "react";
import styles from "../../styles/style";

import { useTheme, Text, Avatar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { View, Pressable, FlatList } from "react-native";
import MyView from "../atoms/MyView";
import RentedFrom from "../../data/RentedFrom"
import RentedBookBox from "../molecules/RentedBookBox"


const RentedBooks = () => {
  const theme = useTheme();
  const { navigate } = useNavigation();
  return (
    <MyView>
      <View>
        <FlatList
          data={RentedFrom}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <RentedBookBox
              rented={item.rented}
              title={item.title}
              image={item.image}
              author={item.author}
              rentedFrom={item.rentedFrom}
              rentDate={item.rentDate}
              returnDate={item.returnDate}
              isExpire={item.isExpire}
              genre={item.genre}
            />
          )}
        />
      </View>
    </MyView>
  );
};

export default RentedBooks;