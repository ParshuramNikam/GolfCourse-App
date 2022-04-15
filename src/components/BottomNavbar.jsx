import React from "react";
import {
  View,
  Button,
  TouchableOpacity,
  StyleSheet,
  Image,
  Text,
} from "react-native";

const BottomNavbar = () => {
  return (
    // <View style={styles.container}>
    //   <TouchableOpacity style={styles.button}>
    //     <Image
    //       style={styles.buttonSize}
    //       source={require("../../assets/BottonNavbarIcons/home.png")}
    //     />
    //     <Image
    //       style={styles.buttonSize}
    //       source={require("../../assets/BottonNavbarIcons/ticket.png")}
    //     />
    //     <Image
    //       style={styles.buttonSize}
    //       source={require("../../assets/BottonNavbarIcons/folder.png")}
    //     />
    //     <Image
    //       style={styles.buttonSize}
    //       source={require("../../assets/BottonNavbarIcons/setting.png")}
    //     />
    //   </TouchableOpacity> 
    // </View>

    <View>
      <Text>bottomScreen </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    flex: 1,
    // backgroundColor: "rgba(117, 126, 149, 0.6)",
    // alignItems: "center",
    justifyContent: "space-evenly",
  }, 
  buttonSize: {
    width: 48,
    height: 48,
  },
});

export default BottomNavbar;
