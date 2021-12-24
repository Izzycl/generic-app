import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MainLayout from "./src/layout/MainLayout";

if (__DEV__) {
  import("./ReactotronConfig").then(() => console.log("Reactotron Configured"));
}

export default function App() {
  return <MainLayout />;
}
