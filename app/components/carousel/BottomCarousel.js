import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import star from '../../../assets/image/star.png'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'


export default function BottomCarousel() {
    const navigation = useNavigation();
    const [data, setData] = useState([]);

    useEffect(() => {
        getData();
    }, [data]);

    const getData = async () => {
        try {
            const response = await axios.get('https://mamarecipe-backend-mobile.vercel.app/recipes');
            setData(response.data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <View>
            <View className="flex-row justify-between items-center mb-2">
                <Text className=" font-bold text-2xl" style={{ color: "#3F3A3A" }}>Popular Recipes</Text>
                <TouchableOpacity onPress={() => navigation.navigate("MoreInfo")} >
                    <Text style={styles.moreButtonText}>More info</Text>
                </TouchableOpacity>
            </View>
            {data.map((recipes, index) => (
                <View key={index} className="flex-row mb-2" style={styles.card}>
                    <Image source={{ uri: recipes.recipes_photo }} style={{ width: 80, height: 80, borderRadius:10 }} />
                    <View className="ml-5">
                        <Text style={{ fontSize: 17, fontWeight: 500, color: "#666" }} className="mb-5">{recipes.recipes_title}</Text>
                        <Text style={{ fontSize: 14, fontWeight: 400, color: "#B6B6B6" }}>spicy, salted</Text>
                        <View className="flex-row items-center">
                            <Image className="mr-1" source={star} />
                            <Text style={{ fontSize: 13, fontWeight: 400, color: "#B6B6B6" }}>4.7</Text>
                        </View>
                    </View>
                </View>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    moreButtonText: {
        color: 'blue',
    },
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