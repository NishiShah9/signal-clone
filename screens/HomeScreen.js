import React, { useLayoutEffect } from 'react'
import { SafeAreaView } from 'react-native'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import CustomListItem from '../components/CustomListItem'
import { Avatar } from 'react-native-elements';
import { auth } from '../firebase';
import { TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
    console.log(auth?.currentUser?.photoURL)
    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Signal",
            headerStyle: { backgroundColor: "#fff" },
            headerTitleStyle: { color: "black" },
            headerTintColor: "black",
            headerLeft: () => (
                <View style={{ marginLeft: 20 }}>
                    <TouchableOpacity >
                    <Avatar
                        rounded
                        source={{ uri: auth?.currentUser?.photoURL }}
                    />
                    </TouchableOpacity>
                </View>
            )
        })
    })
    return (
        <SafeAreaView>
            <ScrollView>
                <CustomListItem />
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
