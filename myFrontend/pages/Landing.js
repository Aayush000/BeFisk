import React from "react";
import { ImageBackground, StyleSheet, View, Button } from "react-native";

const image = { uri: "https://i.imgur.com/VUS722o.png" };
const americanWithLogo = { uri: "https://i.imgur.com/mmfpate.png" };

const Landing = () => (
  <ImageBackground source={image} resizeMode="cover" style={styles.image}>
    <View style={styles.button}>
      {/* Comment  */}
      {/* Comment  */}
      {/* Comment  */}
      <ImageBackground
        source={americanWithLogo}
        resizeMode="cover"
        style={styles.image}
      />
    </View>
  </ImageBackground>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
  button: {
    marginBottom: 50,
    marginHorizontal: 15,
  },
});

export default Landing;
