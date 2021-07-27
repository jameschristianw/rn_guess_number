import React from "react";
import { View, StyleSheet, Text, Button, Image } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import MainButton from "../components/MainButton";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <TitleText>Game Over</TitleText>
      <View style={styles.imageContainer}>
        <Image
          // source={require("../assets/success.png")}
          source={{
            uri: "https://cdn.pixabay.com/photo/2019/01/22/18/30/summit-3948706_960_720.jpg",
          }}
          style={styles.image}
          resizeMode="cover"
          fadeDuration={500}
        />
      </View>
      <View style={styles.gameResult}>
        <BodyText style={styles.resultText}>
          Your phone needed{" "}
          <Text style={styles.highlight}>{props.roundNumber}</Text> rounds to
          guess the number{" "}
          <Text style={styles.highlight}>{props.userNumber}</Text>
        </BodyText>
      </View>
      {/* <BodyText>Number of rounds: {props.roundNumber}</BodyText>
      <BodyText>The number was: {props.userNumber}</BodyText> */}
      <MainButton onPress={props.onRestart}>New Game</MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    height: 300,
    width: 300,
    overflow: "hidden",
    marginVertical: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  highlight: {
    color: Colors.primary,
    fontFamily: "open-sans-bold",
  },
  gameResult: {
    marginVertical: 20,
    // width: "80%",
  },
  resultText: {
    textAlign: "center",
  },
});

export default GameOverScreen;
