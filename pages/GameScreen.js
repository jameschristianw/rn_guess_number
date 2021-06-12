import React, { useState } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import Card from "../components/Card";
import NumberContainer from "../components/NumberContainer";

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNumber = Math.floor(Math.random() * (max - min) + min);

  if (randomNumber === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return randomNumber;
  }
};

const GameScreen = (props) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, props.userChoice)
  );

  return (
    <View style={styles.screen}>
      <Text>Opponent's guess: </Text>
      <NumberContainer>{currentGuess}</NumberContainer>

      <Card style={styles.buttonContainer}>
        <View>
          <Button title="Lower" onPress={() => {}} style={styles.button} />
        </View>
        <View>
          <Button title="Greater" onPress={() => {}} style={styles.button} />
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
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    maxWidth: "80%",
    width: 250,
    padding: 20,
  },
  button: {
    // flex: 1,
    width: "45%",
  },
});

export default GameScreen;
