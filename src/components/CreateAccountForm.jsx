import { CardDivider } from "@rneui/base/dist/Card/Card.Divider";
import { Button, Divider, Input, ListItem } from "@rneui/themed";
import React from "react";
import { Image, Pressable, StyleSheet } from "react-native";
import { Text, View } from "react-native";
import { Avatar } from "react-native-elements";
import Icon from "react-native-vector-icons/Ionicons"

export default props => {

    const facebook = (
        <Image source={require("../assets/facebook.png")} />)
    const google = <Image source={require("../assets/search.png")} />

    const Style = StyleSheet.create(
        {
            title: {
                fontSize: 24,
                fontWeight: "bold",
                color: "black"
            },
            subtitle: {
                fontSize: 16,
                fontWeight: "bold",
                color: "gray",
                marginBottom: 20
            },
            button: {
                borderRadius: 7,
                width: "100%",
                paddingVertical: 10
            }
        }
    )

    return (
        <View style={{ flex: 1 }}>
            <ListItem style={{ flex: 1, alignItems: "center", backgroundColor: "white" }}>
                <ListItem.Content style={{ flex: 1, alignItems: "center" }}>
                    <View style={{ width: "100%", marginTop: 90 }}>
                        <ListItem.Title style={Style.title}>Hello! Welcome,</ListItem.Title>
                        <ListItem.Subtitle style={Style.subtitle}>Create account to continue</ListItem.Subtitle>
                    </View>
                    <View style={{ width: "100%" }}>
                        <Input placeholder="Name"
                            leftIcon={<Icon name="person-outline" size={20} color="gray" />}
                        ></Input>
                        <Input placeholder="E-mail"
                            leftIcon={<Icon name="mail-outline" size={20} color="gray" />}
                        ></Input>
                        <Input placeholder="Password" leftIcon={<Icon name="lock-closed-outline" size={20} color="gray" />}></Input>
                        <Button color="#293B8F" buttonStyle={Style.button} onPress={props.route}>Create Account</Button>
                        <Text style={{ fontWeight: "bold", color: "black", textAlign: "center", marginTop: 15 }}>Or</Text>
                    </View>
                    <View style={{flexDirection:"row", alignItems: "center", width: "100%", marginVertical: 50}}>
                    <Button titleStyle={{color: "black", fontSize: 15, width: 100}} color="white" buttonStyle={{borderColor: "gray", borderWidth: 1,  width: 180, marginRight: 6, borderRadius: 7}}>Sing Up With <Avatar source={require("../assets/facebook.png")} size={25}/></Button>
                    <Button titleStyle={{color: "black", fontSize: 15, width: 100}} color="white" buttonStyle={{borderColor: "gray", borderWidth: 1,  width: 180,borderRadius: 7}}>Sing Up With<Avatar source={require("../assets/search.png")} size={25}/></Button>
                    </View>
                    <ListItem.Subtitle style={{textAlign: "center", fontWeight: "bold", color: "gray"}} onPress={props.route}>Already have account? <Text style={{color: "#B23C55", fontWeight: "bold"}}>Sing In</Text></ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        </View>
    )
}