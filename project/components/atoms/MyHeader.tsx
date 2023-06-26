import * as React from "react";
import { Dimensions, ScrollView, View } from "react-native";
import { Appbar, useTheme, Button, Text } from "react-native-paper";
import styles from "../../styles/style";
import { SafeAreaProvider } from "react-native-safe-area-context";

interface Props {
  title: string;
  onBack?: () => void;
  isAllSelected?: boolean;
  scrollRef?: React.RefObject<ScrollView>;
  tabTitle1?: string;
  tabTitle2?: string;
}

const MyHeader = ({ title, onBack, isAllSelected, scrollRef, tabTitle1, tabTitle2 }: Props) => {
  const theme = useTheme();
  let activeColor = "#4169E1";
  let inactiveColor = "gray";
  const hendleOnSelectChange = (allSelected: boolean) => {
    if (allSelected === isAllSelected) {
      return;
    }
    const scrollSpot = allSelected ? 0 : Dimensions.get("window").width + 1;

    scrollRef &&
      scrollRef.current?.scrollTo({
        x: scrollSpot,
        animated: true,
      });
  };

  return (
    <View>
      {scrollRef == undefined ? (
        <Appbar.Header theme={theme} mode="small">
          {!!onBack && <Appbar.BackAction onPress={onBack} />}
          <Appbar.Content title={title} />
        </Appbar.Header>
      ) : (
        <View
          style={{
            backgroundColor: theme.colors.background,
          }}
        >
          <Appbar.Header
            mode="small"
            style={{
              backgroundColor: theme.colors.background,
            }}
          >
            <Appbar.Content title={title} />
          </Appbar.Header>

          <View
            style={[
              styles.tabsContainer,
              { backgroundColor: theme.colors.background },
            ]}
          >
            <View
              style={{
                flex: 1,
                backgroundColor: theme.colors.background,
                alignItems: "flex-end",
                borderBottomColor: isAllSelected ? activeColor : inactiveColor,
                borderBottomWidth: isAllSelected ? 3 : 1.5,
              }}
            >
              <Button mode="text" onPress={() => hendleOnSelectChange(true)}>
                <Text
                  style={{ color: isAllSelected ? activeColor : inactiveColor }}
                >
                  {tabTitle1?.toUpperCase()}
                </Text>
              </Button>
            </View>
            <View
              style={{
                flex: 1,
                backgroundColor: theme.colors.background,
                alignItems: "flex-start",
                borderBottomColor: !isAllSelected ? activeColor : inactiveColor,
                borderBottomWidth: !isAllSelected ? 3 : 1.5,
              }}
            >
              <Button mode="text" onPress={() => hendleOnSelectChange(false)}>
                <Text
                  style={{
                    color: !isAllSelected ? activeColor : inactiveColor,
                  }}
                >
                  {tabTitle2?.toUpperCase()}
                </Text>
              </Button>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export default MyHeader;
