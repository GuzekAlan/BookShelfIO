import { Text, Button } from "react-native-paper"
import styles from "../../styles/style"
import { View, Image } from "react-native"
import StyledButton from "../atoms/StyledButton"

interface RentedBookBoxProps {
    rented: boolean
    title: string
    author: string
    image: string
    genre?: string
    rentedTo?: string
    rentDate?: string
    returnDate?: string
    isExpire?: boolean
}

const RentedBookBox = ({rented, title, author, image, genre, rentedTo, rentDate, returnDate, isExpire} : RentedBookBoxProps) => {
    const expiredStyle = () => {
        const style =
          isExpire
            ? {
                color: 'red',
              }
            : { };
            return style;
    }

  return (
    <View style={styles.lightInfoBoxBorder}>
      {rented ? (<View style={styles.rowDirection}>
        <Image source={{ uri: image }} style={{ height: 100, width: 100 }} />
        <View style={[styles.marginLeftt10, styles.flex1]}>
          <View style={[styles.spaceBetween]}>
            <Text variant='titleMedium'>{title + " - " + author}</Text>
            <Text>{"Rented to: " + rentedTo}</Text>
            <Text>{"Rented date: " + rentDate}</Text>
            <Text style={expiredStyle()}>{"Expected return date: " + returnDate}</Text>
          </View>
          <View style={[ styles.flex1, styles.rowDirection]}>
            <StyledButton title="Remind" onPress={() => {}} />
            <StyledButton title="Add comment" onPress={() => {}} />
          </View>
        </View>
      </View>) : (
        <View style={styles.rowDirection}>
        <Image source={{ uri: image }} style={{ height: 100, width: 100 }} />
        <View style={[styles.marginLeftt10, styles.flex1]}>
          <View style={[styles.spaceBetween, styles.rowDirection]}>
            <Text variant='titleMedium'>{title}</Text>
            <Text>{genre}</Text>
          </View>
          <View>
          <View style={[styles.spaceBetween, styles.flex1]}>
            <Text>{author}</Text>
          </View>
          <View style={[ styles.flex1, styles.rowDirection]}>
            <StyledButton title="Edit" onPress={() => {}} />
            <StyledButton title="Delete" onPress={() => {}} />
          </View>
          </View>
        </View>
      </View>
      )}
    </View>
  )
}

export default RentedBookBox
