import { SafeAreaProvider } from "react-native-safe-area-context";
import * as React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import theme from "./styles/theme";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigation from "./navigation/MainNavigation";
import { StatusBar } from "expo-status-bar";

const App = () => {
  return (
    <SafeAreaProvider>
      <PaperProvider theme={theme}>
        <StatusBar />
        <NavigationContainer>
          <MainNavigation />
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider>
  );
};

export default App;
