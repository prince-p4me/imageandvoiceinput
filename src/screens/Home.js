import React from "react";
import { View, Text } from "react-native";
import Header from "../components/Header";
import styles from "../utility/Style";

const Home = ({ route, navigation }) => {
  return (
    <View style={styles.container}>
      <Header title={route.name} toogleDrawer={navigation.toggleDrawer} />
      <View style={styles.center}>
        <Text>This is the home screen</Text>
      </View>
    </View>
  );
};

export default Home;