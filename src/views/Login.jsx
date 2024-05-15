import React from "react";
import { View } from "react-native";
import LoginForm from "../components/LoginForm";

export default props => {
    return(
        <View style={{flex: 1}}>
            <LoginForm route={() => props.navigation.navigate('CreateAccount')}/>
        </View>
    )
}