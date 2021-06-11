import React from "react";
import { View, StyleSheet, Text, TextInput, Button } from "react-native";
import Card from "../components/Card";
import Input from "../components/Input";
import colors from "../constants/colors";

const StartGameScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a New Game!</Text>
      <Card style={styles.inputContainer}>
        <Text>Select a Number</Text>
        <Input
          style={styles.input}
          blurOnSubmit
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="number-pad"
          maxLength={2}
        />
        <View style={styles.buttonView}>
          <View style={styles.button}>
            <Button title="Reset" onPress={() => {}} color={colors.accent} />
          </View>
          <View style={styles.button}>
            <Button title="Submit" onPress={() => {}} color={colors.primary} />
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    backgroundColor: "white",
    alignItems: "center",
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
  input: {
    width: "20%",
    textAlign: "center",
  },
});

export default StartGameScreen;
