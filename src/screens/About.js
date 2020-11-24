import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Header from "../components/Header";

import styles from "../utility/Style";

const About = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Header title={route.name} toogleDrawer={navigation.toggleDrawer} />
      <View style={styles.center}>
        <Text>This is the contact screen</Text>
      </View>
    </View>
  );
};
export default About;