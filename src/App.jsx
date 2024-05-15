import React from "react";
import { SafeAreaView } from "react-native";
import Stack from "./stack/Stack";
import { NavigationContainer } from "@react-navigation/native";

export default props => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <NavigationContainer>
            <Stack/>
            </NavigationContainer>
        </SafeAreaView>
    )
}