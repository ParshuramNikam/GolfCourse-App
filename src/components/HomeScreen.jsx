import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const HomeScreen = () => {

  const [searchQuery, setSearchQuery] = useState("");

  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaView style={styles.centerScreen}>
      <Text style={styles.welcomeText}>WELCOME BACK</Text>

      <View>
        <View style={styles.card}>
          <TextInput
            style={styles.fieldInput}
            autoCapitalize="none"
            autoCorrect={false}
            value={searchQuery}
            onChangeText={(data) => setSearchQuery(data)}
          ></TextInput>
          <Text style={styles.inputLabel}>
            Top Golf - Miami Gardens
          </Text>
        </View>
      </View>


    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    
  welcomeText: {
    paddingBottom: 20,
    fontSize: '28px',
    color: "#757e95",
    fontWeight: 500,
    textAlign: 'center',
    backgroundColor: "#e9eaf0"
  },
  centerScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e9eaf0",
    height: '100%'
  },
  fieldInput: {
    borderWidth: 2,
    borderColor: "gray",
    height: 50,
    marginBottom: 25,
    borderRadius: 50,
    fontSize: 20,
    paddingLeft: 10,
    backgroundColor: "#e9eaf0",
  },
  card: {
    backgroundColor: "white",
    padding: 30,
    borderRadius: 25,
  },
  inputLabel: {
    textAlign: 'center',
    fontSize: "22.67px",
    color: "#757e95",
    fontWeight: 400
  }
})