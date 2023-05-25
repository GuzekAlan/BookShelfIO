import { DefaultTheme } from "react-native-paper";
import * as React from "react";
import { ThemeProp } from "react-native-paper/lib/typescript/types";

const theme: ThemeProp = {
    ...DefaultTheme,
    roundness: 5,
    colors: {
        ...DefaultTheme.colors,
        primary: "#4169E1",
        onPrimary: "#c9bf96",
        primaryContainer: "white",
        onPrimaryContainer: "red",
        secondary: "white",
        onSecondary: "white",
        secondaryContainer: "white",
        onSecondaryContainer: "red",
        tertiary: "red",
        onTertiary: "red",
        tertiaryContainer: "red",
        onTertiaryContainer: "red",
        error: "#ff7575",
        "onError": "red",
        "errorContainer": "red",
        "onErrorContainer": "red",
        background: "white",
        onBackground: "red",
        surface: "white",
        onSurface: "black",
        surfaceVariant: "white",
        onSurfaceVariant: "#c9bf96",
        outline: "#4169E1",
        "outlineVariant": "red",
        "shadow": "rgb(0, 0, 0)",
        "scrim": "rgb(0, 0, 0)",
        "inverseSurface": "rgb(52, 47, 50)",
        "inverseOnSurface": "rgb(248, 238, 242)",
        "inversePrimary": "rgb(255, 170, 243)"
    }
  };

  export default theme;