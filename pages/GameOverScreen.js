import React from "react";
import { View, StyleSheet, Text, Button, Image } from "react-native";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";

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
      <BodyText>Number of rounds: {props.roundNumber}</BodyText>
      <BodyText>The number was: {props.userNumber}</BodyText>
      <Button title="New Game" onPress={props.onRestart} />
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
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default GameOverScreen;
