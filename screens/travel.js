import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export default class Travel extends Component {
  render() {
    return (
      <View style={styles.container}>
       <SafeAreaView style={styles.droidSafeArea} />
        <Text>Travel</Text>
       
        <View style={styles.cardContainer}>
          <Image source={require("../assets/travel1.jpg")} style={styles.iconImage}></Image>
          <Text>
            Rising Airline Prices
          </Text>
        </View>
        <View style={styles.cardContainer}>
          <Image source={require("../assets/travel2.jpg")} style={styles.iconImage}></Image>
          <Text>
            Top 10 Places to Visit in Texas Now!!!
          </Text>
        </View>
      </View> 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff"
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
  },
  appTitle: {
    flex: 0.07,
    flexDirection: "row"
  },
  appIcon: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center"
  },
  iconImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  },
  appTitleTextContainer: {
    flex: 0.7,
    justifyContent: "center"
  },
  appTitleText: {
    color: "white",
    fontSize: RFValue(28),
    fontFamily: "Bubblegum-Sans"
  },
  cardContainer: {
    flex: 0.93
  }
});
