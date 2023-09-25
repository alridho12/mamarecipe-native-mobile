import { StyleSheet, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react'
import {
    NativeBaseProvider,
    Text,
    Input,
    View,
    HStack,
    Button,
    TextArea,
} from "native-base";
import { Avatar, PaperProvider } from 'react-native-paper'
import axios from 'axios'
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import FeatherIcon from "react-native-vector-icons/Feather";

const ModalUpdate = ({recipes_id,
    recipes_title,
    recipes_ingredients,
    recipes_photo,
    recipes_video,
    getData ,}) => {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible2] = useState(false);
    const [title, setTitle] = useState(recipes_title);
    const [recipe, setRecipe] = useState(recipes_ingredients);
    const [video, setVideo] = useState(recipes_video)
    const [photo, setPhoto] = useState(null)

    const handleUpdate = async () => {
        try {
            const id = await AsyncStorage.getItem("users_id")
            const formData = new FormData();
            formData.append("recipes_title", title)
            formData.append("recipes_ingredients", recipe)
            formData.append("recipes_video", video)
            formData.append("users_id", id)
            if (photo) {
                formData.append("recipes_photo", {
                    uri: photo,
                    name: "photo.jpg",
                    type: "image/jpeg",
                })
            }

            const response = await axios.put(`https://mamarecipe-backend-mobile.vercel.app/recipes/${recipes_id}`, formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    },
                })
            alert("edit recipe success")
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
        <NativeBaseProvider>
            <PaperProvider>
                <View className=" flex-1 flex-row items-center justify-end">
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                            setModalVisible2(!modalVisible);
                        }}
                    >
                        <View style={styles.modalView}>
                            <Text fontSize={16}>Update recipe</Text>
                            <Text mt={3}>Title</Text>
                            <Input value={title} onChangeText={setTitle} />
                            <Text mt={3}>Ingredients</Text>
                            <TextArea
                                value={recipe}
                                onChangeText={setRecipe}
                            />
                            <Text mt={3}>Url Video</Text>
                            <Input value={video} onChangeText={(value) => setVideo(value)} />
                            <Text mt={3}>Picture</Text>
                            <Button mt={3} onPress={handlePickPhoto} backgroundColor={"transparant"}>
                            <FeatherIcon name="camera" size={30} color={"#EFC81A"} />
                            </Button>

                            <HStack className="flex-col items-center justify-center gap-3" mt={3}>
                                <Button
                                    backgroundColor={"#EEC302"}
                                    width={150}
                                    onPress={handleUpdate}
                                >
                                    Update
                                </Button>
                                <Button
                                    style={{ backgroundColor: "#337CCF" }}
                                    onPress={() => setModalVisible2(!modalVisible)}

                                >
                                    Cancel
                                </Button>
                            </HStack>
                        </View>
                    </Modal>
                    <TouchableOpacity onPress={() => setModalVisible2(true)}  >
                    <Avatar.Icon size={45} icon="square-edit-outline" color='#EFC81A' backgroundColor="transparant" className="mr-[-10]" />
                    </TouchableOpacity>
                </View>
            </PaperProvider>
        </NativeBaseProvider>
    )
}

export default ModalUpdate

const styles = StyleSheet.create({
    modalView: {
        marginTop: 100,
        marginHorizontal: 10,
        backgroundColor: "#EFEFEF",
        borderRadius: 20,
        padding: 35,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
})