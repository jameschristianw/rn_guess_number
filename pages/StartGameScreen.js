import React from "react";
import { View, StyleSheet, Text, TextInput, Button } from "react-native";

const StartGameScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a New Game!</Text>
      <View style={styles.card}>
        <Text>Select a Number</Text>
        <TextInput />
        <View style={styles.buttonView}>
          <View style={styles.button}>
            <Button title="Reset" onPress={() => {}} />
          </View>
          <View style={styles.button}>
            <Button title="Submit" onPress={() => {}} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  card: {
    width: 300,
    maxWidth: "80%",
    backgroundColor: 'white',
    alignItems: "center",
    padding: 10,
    // shadow only works on iOS
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    // elevation only works on android
    elevation: 5,
    borderRadius: 10,
  },
  buttonView: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    paddingHorizontal: 15,
  },
  button: {
    // flex: 1,
    width: "45%",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
});

export default StartGameScreen;
