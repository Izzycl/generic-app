import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
interface ContentLayoutProps {
  header: boolean;
}

const ContentLayout: FC<ContentLayoutProps> = (props) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
  });

  return (
    <SafeAreaProvider>
      <View></View>
    </SafeAreaProvider>
  );
};

export default ContentLayout;
