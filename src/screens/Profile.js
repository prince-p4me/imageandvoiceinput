import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Header from "../components/Header";

import styles from "../utility/Style";

const Profile = ({ navigation, route }) => {
  const { name } = route;
  return (
    <View style={styles.container}>
      <Header title={name} navigation={navigation} />
      <View style={styles.center}>
        <Text>This is the {name} screen</Text>
      </View>
    </View>
  );
};
export default Profile;