import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button, PaperProvider, TextInput } from 'react-native-paper'
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';


export default function AddRecipe() {

    const navigation = useNavigation();
    const [title,setTitle] = useState("");
    const [recipe,setRecipe] = useState("");
    const [video,setVideo] = useState("")
    const [photo, setPhoto] = useState(null)

    const handleInsert = async () => {
        try {
            const id = await AsyncStorage.getItem("users_id")
            const formData = new FormData();
            formData.append("recipes_title",title)
            formData.append("recipes_ingredients",recipe)
            formData.append("recipes_video",video)
            formData.append("users_id",id)
            if (photo) {
                formData.append("recipes_photo",{
                    uri: photo,
                    name: "photo.jpg",
                    type: "image/jpeg",
                })
            }

            const response = await axios.post('https://mamarecipe-backend-mobile.vercel.app/recipes', formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data"
                },
            })
            alert("add recipe success")
            navigation.navigate("Home")
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
            <View className="flex-1 justify-center m-5">
                <View className=" items-center mb-8">
                    <Text style={{ fontSize: 40, fontWeight: 500, color: "#EFC81A", }}>
                        Add Your Recipe
                    </Text>
                </View>
                <View>
                    <TextInput
                        mode="outlined"
                        label="Title"
                        placeholder="Input your title recipe"
                        placeholderTextColor='#8B8A8F'
                        outlineColor='#fff'
                        activeOutlineColor='#EFC81A'
                        left={<TextInput.Icon icon="book-open-blank-variant"
                            color={"#8B8A8F"} />}
                        value={title}
                        onChangeText={setTitle}
                    />
                    <TextInput
                        mode="outlined"
                        label="Description"
                        placeholder="Input description recipe"
                        placeholderTextColor='#8B8A8F'
                        outlineColor='#fff'
                        activeOutlineColor='#EFC81A'
                        style={{ height: 150 }}
                        value={recipe}
                        onChangeText={setRecipe}
                    />
                    <TextInput
                        mode="outlined"
                        label="Video recipe"
                        placeholder="input url video"
                        placeholderTextColor='#8B8A8F'
                        outlineColor='#fff'
                        activeOutlineColor='#EFC81A'
                        left={<TextInput.Icon icon="video-outline"
                            color={"#8B8A8F"} />}
                        value={video}
                        onChangeText={setVideo}
                    />
                    <Text className="text-center mt-5">Add Photo</Text>
                    <Button
                        icon="camera"
                        mode="contained"
                        onPress={handlePickPhoto}
                        className="bg-yellow-400 mt-5 justify-center pl-4"
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
                    <Button mode='contained' className="bg-yellow-400 p-1 mt-5 m-5" onPress={handleInsert} >
                        Post
                    </Button>
                </View>

            </View>
        </PaperProvider>
    )
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        padding: 10,
    },
})