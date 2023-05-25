import { View } from "react-native";
import styles from "../../styles/style";
import * as React from "react";
import { useTheme } from "react-native-paper";

type Props = {
    children: JSX.Element[] | JSX.Element;
}

const MyView = ({children}: Props) => {
    const theme = useTheme();
    return (
        <View style={[styles.view, {backgroundColor: theme.colors.surface}]}>
            {children}
        </View>
    );
}

export default MyView;
