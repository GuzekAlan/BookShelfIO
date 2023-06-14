import { Pressable, View } from "react-native"
import styles from "../../styles/style"
import { Avatar, Text } from "react-native-paper"

const AddBookButton = () => {
  return (
    <View style={[styles.flex1, styles.paddingBottom5, { alignItems: "center" }]}>
      <Pressable
        style={[styles.rowDirection]}
        onPress={() => {
          console.log("aa")
        }}>
        <Avatar.Icon size={45} icon='plus' />
        <View style={[styles.centerMainAxis, styles.marginLeftt10]}>
          <Text variant='titleMedium'>New Book</Text>
        </View>
      </Pressable>
    </View>
  )
}

export default AddBookButton
