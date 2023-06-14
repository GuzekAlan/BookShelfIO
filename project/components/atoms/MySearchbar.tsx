import { Searchbar } from "react-native-paper"
import styles from "../../styles/style"

interface SearchbarProps {
  placeholder: string
  searchQuery: string
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>
}

const MySearchBar = ({
  placeholder,
  searchQuery,
  setSearchQuery
}: SearchbarProps) => {
  return (
    <Searchbar
      placeholder='Search'
      onChangeText={(query: string) => setSearchQuery(query)}
      value={searchQuery}
      style={styles.marginBottom15}
    />
  )
}

export default MySearchBar
