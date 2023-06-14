import { Text } from "react-native-paper"
import styles from "../../styles/style"
import { View, Image } from "react-native"

interface BookBoxProps {
  title: string
  author: string
  owner: string
  genre: string
  image: string
}

const BookBox = ({ title, author, owner, genre, image }: BookBoxProps) => {
  return (
    <View style={styles.lightInfoBoxBorder}>
      <View style={styles.rowDirection}>
        <Image source={{ uri: image }} style={{ height: 100, width: 100 }} />
        <View style={[styles.marginLeftt10, styles.flex1]}>
          <View style={[styles.spaceBetween, styles.rowDirection]}>
            <Text variant='titleMedium'>{title}</Text>
            <Text>{genre}</Text>
          </View>
          <View style={[styles.spaceBetween, styles.flex1]}>
            <Text>{author}</Text>
            <Text style={{ color: "#4169E1" }}>{owner}</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default BookBox
