import React from "react";
import { TouchableOpacity, StatusBar, View, SafeAreaView, Text, Dimensions } from "react-native";
import styles from "../utility/Style";
import Constants from "../utility/Constants";

const Header = props => {
  const { title } = props;
  return (
    <View style={{ width: "100%" }}>
      <StatusBar backgroundColor={Constants.color}></StatusBar>
      <SafeAreaView style={styles.safeArea}></SafeAreaView>
      <View style={styles.header}>
        <TouchableOpacity style={styles.drawerButton} activeOpacity={.7}></TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  )
}

export default Header;