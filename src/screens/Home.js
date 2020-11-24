import React from "react";
import { View, Text } from "react-native";
import Header from "../components/Header";
import styles from "../utility/Style";

const Home = ({ route }) => {
  return (
    <View style={styles.container}>
      <Header title={route.name} />
      <View style={styles.center}>
        <Text>This is the home screen</Text>
      </View>
    </View>
  );
};

export default Home;