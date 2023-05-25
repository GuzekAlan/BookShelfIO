import * as React from "react";
import { Button, useTheme } from "react-native-paper";
import styles from "../../styles/style";
import { Text } from "react-native-paper";

type Props = {
  onPress: () => void;
  icon?: string;
  title: string;
};

const StyledButton = ({ onPress, icon, title }: Props) => {
  const theme = useTheme();
  return (
    <Button
      mode="text"
      style={[{ backgroundColor: '#4169E1'}, styles.margin6]}
      onPress={onPress}
    >
      <Text style={{color: 'white'}}>{title}</Text>
    </Button>
  );
};

export default StyledButton;
