import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Avatar, Button, PaperProvider } from 'react-native-paper'
import Backbutton from '../components/button/Backbutton'
import resep1 from '../../assets/image/myrecipe.png'
import resep2 from '../../assets/image/myrecipe2.png'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import ModalDelete from '../components/button/ModalDelete'
import ModalUpdate from '../components/button/ModalUpdate'



export default function MyRecipe() {

    const [data, setData] = useState([]);

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        const dataUser = await AsyncStorage.getItem('users_id')
        try {
            const response = await axios.get(`https://mamarecipe-backend-mobile.vercel.app/recipes/users/${dataUser}`);
            setData(response.data.data);
        } catch (error) {
            console.log(error);
            setData([]);
        }
    }


    return (
        <PaperProvider>
            <Backbutton />
            <View className="item-center">
                <View className="items-center mb-5">
                    <Text style={{ fontSize: 40, fontWeight: 500, color: "#EFC81A" }}>
                        My Recipe
                    </Text>
                </View>
                <View className="m-5">
                    {data?.map((recipes) => (
                        <View  className="flex-row mb-2" style={styles.card}>
                            <Image source={{ uri: recipes.recipes_photo }} style={{ width: 80, height: 80, borderRadius: 5 }} />
                            <View className="ml-5">
                                <Text style={{ fontSize: 17, fontWeight: 500, color: "#666" }} >{recipes.recipes_title} </Text>
                                <Text style={{ fontSize: 14, fontWeight: 400, color: "#B6B6B6" }}>In Veg Pizza</Text>
                                <Text style={{ fontSize: 17, fontWeight: 500, color: "#666" }} >Spicy</Text>
                            </View>
                            <View className=" flex-1 flex-row items-center justify-end">
                                <ModalDelete recipes_id = {recipes.recipes_id} />
                                <ModalUpdate 
                                recipes_id = {recipes.recipes_id} 
                                recipes_title = {recipes.recipes_title}
                                recipes_ingredients = {recipes.recipes_ingredients}
                                recipes_photo = {recipes.recipes_photo}
                                recipes_video = {recipes.recipes_video}
                                getData={getData}
                                />
                            </View>
                        </View>
                    ))}
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