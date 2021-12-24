import React, { FC, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import Reactotron from "reactotron-react-native";
interface MainLayoutProps {}

const MainLayout: FC<MainLayoutProps> = (props) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
  });

  useEffect(() => {
    Reactotron.log!({ vak: "asdasd" });
  }, []);

  return (
    <View style={styles.container}>
      <Text>MainLayout</Text>
    </View>
  );
};

export default MainLayout;
