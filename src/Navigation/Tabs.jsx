import React from "react";
import {
  View,
  Button,
  TouchableOpacity,
  StyleSheet,
  Image,
  Text,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../components/HomeScreen";
import TicketScreen from "../components/TicketScreen";
import FolderScreen from "../components/FolderScreen";
import SettingsScreen from "../components/SettingsScreen";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false ,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: "#000000",
          borderRadius: 15,
          height: 75,
          ...styles.shadow,
        },
      }}
    >
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                // top: 10,
              }}
            >
              <Image
                source={require("../../assets/BottonNavbarIcons/home.jpeg")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#e32f45" : "#748c94",
                  fontSize: 12,
                }}
              />
              <Text
                style={{ color: focused ? "#e32f45" : "#748c94", fontSize: 12 }}
              >
                HOME
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="ticket"
        component={TicketScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                // top: 10,
              }}
            >
              <Image
                source={require("../../assets/BottonNavbarIcons/ticket.jpeg")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#e32f45" : "#748c94",
                  fontSize: 12,
                }}
              />
              <Text
                style={{ color: focused ? "#e32f45" : "#748c94", fontSize: 12 }}
              >
                TICKET
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="folder"
        component={FolderScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                // top: 10,
              }}
            >
              <Image
                source={require("../../assets/BottonNavbarIcons/folder.jpeg")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#e32f45" : "#748c94",
                  fontSize: 12,
                }}
              />
              <Text
                style={{ color: focused ? "#e32f45" : "#748c94", fontSize: 12 }}
              >
                FOLDER
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                // top: 10,
              }}
            >
              <Image
                source={require("../../assets/BottonNavbarIcons/setting.jpeg")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#e32f45" : "#748c94",
                  fontSize: 12,
                }}
              />
              <Text
                style={{ color: focused ? "#e32f45" : "#748c94", fontSize: 12 }}
              >
                SETTINGS
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>

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
  );
};

const styles = StyleSheet.create({
  // button: {
  //   flexDirection: "row",

  //   flex: 1,
  //   backgroundColor: "rgba(117, 126, 149, 0.6)",
  //   alignItems: "center",
  //   justifyContent: "space-evenly",
  // },
  // buttonSize: {
  //   width: 48,
  //   height: 48,
  // },

  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default Tabs;
