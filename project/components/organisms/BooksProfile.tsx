import React from "react"
import MyView from "../atoms/MyView"
import Books from "../../data/Books"
import BookBox from "../molecules/BookBox"
import { FlatList, View } from "react-native"
import MySearchBar from "../atoms/MySearchbar"
import styles from "../../styles/style"

const BooksProfile = () => {
  const [searchQuery, setSearchQuery] = React.useState("")
  return (
    <>
      <MyView>
        <View style={styles.paddingTop20}>
        <FlatList
          data={Books}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <BookBox
              title={item.title}
              author={item.author}
              genre={item.genre}
              owner={item.owner}
              image={item.image}
            />
          )}
          ListHeaderComponent={
            <MySearchBar
              placeholder='Search...'
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          }
        />
        </View>
      </MyView>
    </>
  )
}

export default BooksProfile
