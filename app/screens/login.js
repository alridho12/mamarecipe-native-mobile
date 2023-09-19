import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button, PaperProvider, TextInput } from 'react-native-paper'
import { Link, useNavigation } from 'expo-router'
import logo from '../../assets/image/logo.png'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'



export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();

    useEffect(() => {
        getToken();
    }, []);

    const getToken = async () => {
        const dataUser = await AsyncStorage.getItem("token")
        if (!dataUser) {
            navigation.navigate("LoginMain");
        } else {
            navigation.navigate("HomeMain");
            getToken();
        }
    };

    const login = async () => {
        const data = {
            email,
            password
        }

        axios.post("http://192.168.7.230:3000/users/login", data).then((res) => {
            if (res.status === 201) {
                AsyncStorage.setItem("token", res.data.data.token)
                AsyncStorage.setItem("users_id", res.data.data.users_id);
                navigation.navigate("HomeMain");
            } else if (res.data.message === "email is incorrect") {
                alert("Email Wrong");
            } else if (res.data.message === "passowrd is incorrect") {
                alert("Password Wrong");
            }

            setEmail("");
            setPassword("");
        });
    };


    return (
        <PaperProvider>
            <View style={styles.container} className="mt-[-40]">
                <View className="justify-center items-center h-60">
                    <Image source={logo} style={{ width: 700, height: 700 }} />
                </View>
                <View className=" items-center mb-5">
                    <Text style={{ fontSize: 40, fontWeight: 500, color: "#EFC81A" }}>
                        Welcome !
                    </Text>
                    <Text style={{ fontSize: 17, fontWeight: 400, color: "#999" }}>
                        Log in to your exiting account.
                    </Text>
                </View>
                <View className="m-5">
                    <TextInput
                        mode="outlined"
                        label="E-Mail"
                        placeholder="Input your email"
                        placeholderTextColor='#8B8A8F'
                        outlineColor='#fff'
                        activeOutlineColor='#EFC81A'
                        left={<TextInput.Icon icon="email-outline" color={"#8B8A8F"} />}
                        value={email}
                        onChangeText={(value) => setEmail(value)}
                    />
                    <TextInput
                        mode="outlined"
                        label="Password"
                        placeholder="Input your password"
                        placeholderTextColor='#8B8A8F'
                        outlineColor='#fff'
                        activeOutlineColor='#EFC81A'
                        left={<TextInput.Icon icon="lock-outline" color={"#8B8A8F"} />}
                        secureTextEntry
                        value={password}
                        onChangeText={(value) => setPassword(value)}
                    />
                    <Button mode='contained' className="bg-yellow-400 p-1 mt-5 m-5" onPress={login}>
                        Log In
                    </Button>
                    <Text className="text-center" style={{ color: "#999" }}>Don't have an account? <Text onPress={() => navigation.navigate('RegisterMain')} style={{ color: "#EFC81A" }}>Register Here</Text></Text>
                </View>
            </View>
        </PaperProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
})