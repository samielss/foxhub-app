import React from "react";
import { View } from "react-native";
import LoginForm from "../components/LoginForm";
import CreateAccountForm from "../components/CreateAccountForm";

export default props => {
    return(
        <View style={{flex: 1}}>
            <CreateAccountForm route={() => props.navigation.navigate("Login")}/>
        </View>
    )
}