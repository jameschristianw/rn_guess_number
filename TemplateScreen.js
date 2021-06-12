import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Template = () => {
  return (
    <View style={styles.screen}>
      <Text></Text>
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
