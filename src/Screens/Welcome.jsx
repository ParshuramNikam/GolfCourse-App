import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'

const Welcome = () => {

    const [searchQuery, setSearchQuery] = useState(null);

    return (
        <SafeAreaView>
            <Text>Welcome</Text>

            <TextInput
                style={style.fieldInput}
                autoCapitalize="none"
                autoCorrect={false}
                value={searchQuery}
                onChangeText={(data) => setSearchQuery(data)}
            ></TextInput>

            <NavigationContainer>
                <Stack.Navigator initialRouteName="login">
                    <Stack.Screen name="login" component={ContactYoutube} />
                    <Stack.Screen name="home" component={HomeYoutube} />
                </Stack.Navigator>
            </NavigationContainer>

        </SafeAreaView>
    )
}

export default Welcome

const styles = StyleSheet.create({
    fieldInput: {
        borderWidth: 2,
        borderColor: "gray",
        width: 300,
        height: 50,
        borderRadius: 3,
        fontSize: 20,
        paddingLeft: 10,
    }
})