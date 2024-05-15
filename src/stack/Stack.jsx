import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Image } from "react-native";
import Login from "../views/Login";
import CreateAccount from "../views/CreateAccount";

export default props => {

    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator initialRouteName="Login" >
            <Stack.Screen name="Login" component={Login} options={{
                headerShadowVisible: false,
                headerTitle: (props) => (
                    <Image
                        style={{ width: 100, height: 100 }}
                        source={require('../images/icon.png')}
                        resizeMode="contain"
                    />
                ),
                headerTitleStyle: { flex: 1 },
            }}
            />
            <Stack.Screen name="CreateAccount" component={CreateAccount} options={{
                headerShadowVisible: false,
                headerTitle: (props) => (
                    <Image
                        style={{ width: 100, height: 100 }}
                        source={require('../images/icon.png')}
                        resizeMode="contain"
                    />
                ),
                headerTitleStyle: { flex: 1 },
                headerBackVisible: false
            }}
            />
        </Stack.Navigator>
    )
}