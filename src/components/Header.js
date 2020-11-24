import React from "react";
import { TouchableOpacity, StatusBar, View, SafeAreaView, Text, Image } from "react-native";
import styles from "../utility/Style";
import Constants from "../utility/Constants";
import SideIcon from "../assets/imgs/list.png";

const Header = props => {
  const { title, toogleDrawer } = props;
  return (
    <View style={{ width: "100%" }}>
      <StatusBar backgroundColor={Constants.color}></StatusBar>
      <SafeAreaView style={styles.safeArea}></SafeAreaView>
      <View style={styles.header}>
        <TouchableOpacity style={styles.drawerButton} activeOpacity={.7} onPress={() => toogleDrawer()}>
          <Image source={SideIcon} style={styles.sideIcon}></Image>
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  )
}

export default Header;