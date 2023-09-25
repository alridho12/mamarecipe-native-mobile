import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Avatar, Button, PaperProvider } from 'react-native-paper'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'



export default function Profile() {
    const navigation = useNavigation();
    const [data, setData] = useState([]);

    useEffect(() => {
        getData();
    }, [data]);

    const getData = async () => {
        const dataUser = await AsyncStorage.getItem("users_id");
        await axios
            .get(`https://mamarecipe-backend-mobile.vercel.app/users/${dataUser}`)
            .then((response) => {
                setData(response.data.data[0]);
            })
            .catch((error) => console.log(error));
    };

    const handleLogout = async () => {
        try {
            AsyncStorage.removeItem("token")
            AsyncStorage.removeItem("users_id")
            navigation.navigate("LoginMain")
        }
        catch (err) {
            console.log(err);
        }
    }
    return (
        <PaperProvider>
            <View>
                <View className="bg-yellow-400 w-[100%] h-[35%] flex-row -z-10 relative">
                    <View className="flex-1 items-center justify-center gap-3">
                        <Image
                            style={{
                                width: 150,
                                height: 150,
                                borderRadius: 100,
                            }}
                            source={
                                data.photo_profile === "null" ||
                                    data.photo_profile === null ||
                                    data.photo_profile === ""
                                    ? require("../../assets/image/pro.png")
                                    : { uri: data.photo_profile }
                            }
                        />
                        <Text style={{ fontSize: 16, color: "#FFF", fontWeight: 700 }} >{" "}
                            {data.nama}</Text>
                    </View>
                </View>
                <View className=" h-[100%]" style={styles.profileButton} >
                    <TouchableOpacity onPress={() => navigation.navigate("Editprofile")}>
                        <View className="flex-row items-center justify-between">
                            <View className="flex-row items-center">
                                <Avatar.Icon size={50} icon="account-outline" color='#EFC81A' backgroundColor="transparant" />
                                <Text>Edit Profile</Text>
                            </View>
                            <Button icon="chevron-right" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Myrecipes")}>
                        <View className="flex-row items-center justify-between">
                            <View className="flex-row items-center">
                                <Avatar.Icon size={50} icon="medal-outline" color='#EFC81A' backgroundColor="transparant" />
                                <Text>My Recipe</Text>
                            </View>
                            <Button icon="chevron-right" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Savedrecipes")}>
                        <View className="flex-row items-center justify-between">
                            <View className="flex-row items-center">
                                <Avatar.Icon size={50} icon="bookmark-outline" color='#EFC81A' backgroundColor="transparant" />
                                <Text>Saved Recipe</Text>
                            </View>
                            <Button icon="chevron-right" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Likedrecipes")}>
                        <View className="flex-row items-center justify-between">
                            <View className="flex-row items-center">
                                <Avatar.Icon size={50} icon="thumb-up-outline" color='#EFC81A' backgroundColor="transparant" />
                                <Text>Liked Recipe</Text>
                            </View>
                            <Button icon="chevron-right" />
                        </View>
                    </TouchableOpacity>
                    <View className="flex-row items-center justify-between">
                        <TouchableOpacity onPress={handleLogout}>
                            <View className="flex-row items-center">
                                <Avatar.Icon size={50} icon="logout" color='#EFC81A' backgroundColor="transparant" />
                                <Text>Log Out</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </PaperProvider>
    )
}

const styles = StyleSheet.create({
    profileButton: {
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        shadowColor: '#000',
        shadowOpacity: 0.25,
        elevation: 5,
        padding: 10,
        marginHorizontal: 8,
        marginTop: -30,
    },
})