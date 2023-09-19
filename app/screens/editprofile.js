import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Button, PaperProvider, TextInput } from 'react-native-paper'
import Backbutton from '../components/button/Backbutton'
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';


export default function EditProfile() {
    const navigation = useNavigation();
    const [nama, setNama] = useState("");
    const [photo, setPhoto] = useState(null);
    const handleUpdate = async () => {
        try {
            const id = await AsyncStorage.getItem("users_id")
            const formData = new FormData();
            formData.append("nama", nama)
            if (photo) {
                formData.append("photo_profile", {
                    uri: photo,
                    name: "photo.jpg",
                    type: "image/jpeg",
                });
            }

            const response = await axios.put(`http://192.168.7.230:3000/users/${id}`, formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    },
                })
            alert("Profile have been updated")
            navigation.navigate("Profile", { id });
        } catch (error) {
            alert("error")
        }
    }

    const handlePickPhoto = async () => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (permissionResult.granted === false) {
            alert("Izinkan Camera!");
            return;
        }

        const pickerResult = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            quality: 1,
        });

        if (!pickerResult.cancelled) {
            setPhoto(pickerResult.uri);
        }
    };

    return (
        <PaperProvider>
            <Backbutton />
            <View className="item-center">
                <View className="items-center mb-5">
                    <Text style={{ fontSize: 40, fontWeight: 500, color: "#EFC81A" }}>
                        Edit Profile
                    </Text>
                </View>
                <View className="m-5">
                    <TextInput
                        mode="outlined"
                        label="Change name"
                        outlineColor='#fff'
                        activeOutlineColor='#EFC81A'
                        value={nama}
                        onChangeText={setNama}
                    />
                    <Text className="text-center mt-5">Change Photo</Text>
                    <Button
                        icon="camera"
                        mode="contained"
                        onPress={handlePickPhoto}
                        className="bg-yellow-400 mt-1 justify-center pl-4"
                        style={{
                            width:50,
                            height:50,
                            display:"flex",
                            justifyContent: 'center',
                            alignSelf:"center"
                        }}      
                    />
                    {photo && (
                        <Image
                            source={{ uri: photo }}
                            style={{
                                width: 94,
                                height: 94,
                                marginBottom: 40,
                                marginTop: 30,
                                alignSelf:"center"
                            }}
                        />
                    )}
                    {/* <TextInput
                        mode="outlined"
                        label="Create new password"
                        outlineColor='#fff'
                        activeOutlineColor='#EFC81A'
                        secureTextEntry
                    /> */}
                    <Button mode='contained' className="bg-yellow-400 p-1 mt-5 m-5" onPress={handleUpdate} >
                        Save
                    </Button>
                </View>
            </View>
        </PaperProvider>
    )
}

const styles = StyleSheet.create({})