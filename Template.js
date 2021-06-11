import React from "react";
import { View, StyleSheet } from "react-native";

const Template = () => {
  return (
    <View style={styles.screen}>
      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
  },
});

export default Template;
