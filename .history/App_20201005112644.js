import { StatusBar } from "expo-status-bar";
import React from "react";
import styled from "styled-components/native";
import Home from "./screens/Home";
import { AppLoading } from "expo";
import { useFonts } from "expo-font";
import { Text } from "react-native";

export default function App() {
  let [fontsLoaded] = useFonts({
    "Inter-SemiBoldItalic":
      "https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12",
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return <Text style={{fontSize:77}}>AMK</Text>;
}
