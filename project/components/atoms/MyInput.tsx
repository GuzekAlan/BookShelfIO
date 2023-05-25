import { useField } from "formik";
import * as React from "react";
import { TextInput, Text } from "react-native-paper";
import styles from "../../styles/style";
import { View } from "react-native";

interface Props {
  name: string;
  label?: string;
  placeholder?: string;
  onChangeValue?: (value: string) => void;
}

const MyInput = ({ name, label, placeholder, onChangeValue }: Props) => {
  const [field, meta, helpers] = useField(name);
  const isError = meta.touched && meta.error;
  return (
    <View style={styles.padding6}>
      {label && <Text>{label}</Text>}
      <TextInput
        style={styles.paddingBottom5}
        mode="outlined"
        value={field.value}
        onChangeText={(text) => {
          helpers.setValue(text);
          onChangeValue ? onChangeValue(text) : {};
        }}
        textColor="#006400"
        placeholder={!!placeholder ? placeholder : ""}
      />
    </View>
  );
};

export default MyInput;
