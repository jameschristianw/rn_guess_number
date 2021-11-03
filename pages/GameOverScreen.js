import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import MainButton from "../components/MainButton";

const GameOverScreen = (props) => {
  return (
    <ScrollView>
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
    </ScrollView>
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
    borderRadius: (Dimensions.get("window").width * 0.75) / 2,
    borderWidth: 3,
    borderColor: "black",
    height: Dimensions.get("window").width * 0.75,
    width: Dimensions.get("window").width * 0.75,
    overflow: "hidden",
    marginVertical: Dimensions.get("window").height * 0.05,
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
    marginVertical: Dimensions.get("window").height * 0.02,
    // width: "80%",
  },
  resultText: {
    textAlign: "center",
    fontSize: Dimensions.get("window").height < 400 ? 14 : 16,
  },
});

export default GameOverScreen;
