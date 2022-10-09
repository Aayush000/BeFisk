import React, { useState } from "react";

import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  ImageBackground,
} from "react-native";
import Timeline from "react-native-timeline-flatlist";
import Card from "../components/Card";

const image = { uri: "https://i.imgur.com/PW67Wij.png" };

const data = [
  {
    description: (
      <Card
        name="Book Flight"
        status={true}
        imageUrl={"https://i.imgur.com/PW67Wij.png"}
      />
    ),
  },
  {
    title: "Get Digital Boarding Pass",
    description: "Event 2 Description",
  },
  { title: "Check-In Bags", description: "Event 3 Description" },
  { title: "Drop-Off Bags", description: "Event 4 Description" },
  { title: "Head to TSA", description: "Event 5 Description" },
];

let status = true;

const TimelinePage = () => (
  // const [isComplete, setIsComplete] = useState(false);

  <ScrollView style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image} />
    <Timeline
      data={data}
      columnFormat="two-column"
      style={styles.timeline}
      circleSize={50}
      circleColor={status ? "green" : "grey"}
    />
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    marginTop: 30,
    marginBottom: 15,
    flex: 1,
    justifyContent: "center",
    height: 300,
    width: "100%",
  },
  timeline: {},
});

export default TimelinePage;
