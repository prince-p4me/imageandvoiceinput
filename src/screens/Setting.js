import React from "react";
import { View, Text } from "react-native";
import Header from "../components/Header";
import styles from "../utility/Style";

const Setting = ({ route, navigation }) => {
  const { name } = route;
  return (
    <View style={styles.container}>
      <Header title={name} toogleDrawer={navigation.toggleDrawer} />
      <View style={styles.center}>
        <Text>This is the {name} screen</Text>
      </View>
    </View>
  );
};
export default Setting;