import { DefaultTheme } from "react-native-paper";
import * as React from "react";
import { ThemeProp } from "react-native-paper/lib/typescript/types";

const theme: ThemeProp = {
    ...DefaultTheme,
    roundness: 5,
    colors: {
        ...DefaultTheme.colors,
        primary: "#d5bfa4",
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
        error: "red",
        "onError": "rgb(255, 255, 255)",
        "errorContainer": "rgb(255, 218, 214)",
        "onErrorContainer": "rgb(65, 0, 2)",
        background: "white",
        onBackground: "red",
        surface: "#132c0f",
        onSurface: "#c9bf96",
        surfaceVariant: "white",
        onSurfaceVariant: "#c9bf96",
        outline: "#c9bf96",
        "outlineVariant": "rgb(209, 194, 203)",
        "shadow": "rgb(0, 0, 0)",
        "scrim": "rgb(0, 0, 0)",
        "inverseSurface": "rgb(52, 47, 50)",
        "inverseOnSurface": "rgb(248, 238, 242)",
        "inversePrimary": "rgb(255, 170, 243)"
    }
  };

  export default theme;