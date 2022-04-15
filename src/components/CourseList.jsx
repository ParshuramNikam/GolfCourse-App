import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image, Button } from 'react-native'
import React from 'react'

const CourseList = () => {
    return (
        <SafeAreaView style={styles.screen}>
            <View style={styles.conatiner}>
                <Text style={[styles.text, styles.heading]}>Top Golf - Miami Gardens</Text>
                <Text style={styles.text}>Last Wetcheck</Text>
                <Text style={styles.text}>Repair Status</Text>
                <Text style={styles.text}>Comments</Text>
                <Text style={styles.text}>Property Manager</Text>

                <TouchableOpacity style={styles.button} onPress={() => { alert("you clicked me") }}>
                    <Image
                        source={require('../../assets/mapIcon.png')}
                        resizeMode="contain"
                        style={{
                            margin: "auto",
                            width: 30,
                            height: 30,
                            marginBottom: 25
                        }}
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.btnWrapper}>
                <TouchableOpacity style={[styles.btn, styles.shadowProp]} onPress={() => { alert("you clicked me") }}>
                    <Text style={styles.btnTitle}>
                        Create
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btn, styles.shadowProp]} onPress={() => { alert("you clicked me") }}>
                    <Text style={styles.btnTitle}>
                        History
                    </Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}

export default CourseList

const styles = StyleSheet.create({
    heading:{
        fontWeight: 600,
        fontSize: 25,
        color: "#757e95"
    },
    text: {
        textAlign: 'center',
        marginBottom: 20,
        fontSize: 20,
        color: "#757E95"
    },
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E9EAF0'

    },
    btnText: {
        backgroundColor: "#E9EAF0",
        borderRadius: 15,
        borderColor: 'black'
    },
    conatiner: {

    },
    
    btnWrapper: {
        flexDirection:"row",
        justifyContent: 'space-between'
    },
    btnTitle: {
        fontSize: 25,
        fontWeight: '600',
    },
    btn: {
        backgroundColor: 'white',
        borderRadius: 8,
        paddingVertical: 15,
        paddingHorizontal: 25,
        marginVertical: 10,
        marginHorizontal: 10
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
})