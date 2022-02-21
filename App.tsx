import React from "react";
import AppLoading from "expo-app-loading";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import theme from "./src/global/styles/theme";
import { ThemeProvider } from "styled-components";
import { Register } from "./src/pages/Register";

export default function App() {
  const [fontsLoader] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoader) {
    return <AppLoading />;
  }
  return (
    <ThemeProvider theme={theme}>
      <Register />
    </ThemeProvider>
  );
}
