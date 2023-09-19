import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { PaperProvider, Avatar } from 'react-native-paper'
import Backbutton from '../components/button/Backbutton'
import resep1 from '../../assets/image/myrecipe.png'
import resep2 from '../../assets/image/myrecipe2.png'
import resep3 from '../../assets/image/resep3.png'
import resep4 from '../../assets/image/resep4.png'
import resep5 from '../../assets/image/resep5.png'
import star from '../../assets/image/star.png'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'



export default function DetailPopulerMenu() {
    // const navigation = useNavigation();
    const [data, setData] = useState([]);

    useEffect(() => {
        getData();
    }, [data]);

    const getData = async () => {
        try {
            const response = await axios.get('http://192.168.7.230:3000/recipes');
            setData(response.data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <PaperProvider>
            <Backbutton />
            <View className="item-center">
                <View className="items-center mb-5">
                    <Text style={{ fontSize: 40, fontWeight: 500, color: "#EFC81A" }}>
                        Popular Menu
                    </Text>
                </View>
                <View className="m-5">
                    {data.map((recipes, index) =>(
                        <View className="flex-row mb-2" style={styles.card}>
                        <Image source={{ uri: recipes.recipes_photo }} style={{ width: 80, height: 80, borderRadius:10 }} />
                        <View className="ml-5">
                            <Text style={{ fontSize: 17, fontWeight: 500, color: "#666" }} >{recipes.recipes_title}</Text>
                            <Text style={{ fontSize: 14, fontWeight: 400, color: "#B6B6B6" }}>In Veg Pizza</Text>
                            <Text style={{ fontSize: 17, fontWeight: 500, color: "#666" }} >Spicy</Text>
                            <View className="flex-row items-center">
                                <Image className="mr-1" source={star} />
                                <Text style={{ fontSize: 13, fontWeight: 400, color: "#B6B6B6" }}>4.7</Text>
                            </View>
                        </View>
                        <View className="flex-1 flex-row items-center justify-end">
                            <Avatar.Icon size={50} icon="bookmark-outline" color='#EFC81A' backgroundColor="transparant" className="mr-[-10]" />
                            <Avatar.Icon size={50} icon="thumb-up-outline" color='#EFC81A' backgroundColor="transparant" />
                        </View>
                    </View>
                    ))}
                    {/* <View className="flex-row mb-2" style={styles.card}>
                        <Image source={resep2} style={{ width: 80, height: 80 }} />
                        <View className="ml-5">
                            <Text style={{ fontSize: 17, fontWeight: 500, color: "#666" }} >Farm House</Text>
                            <Text style={{ fontSize: 14, fontWeight: 400, color: "#B6B6B6" }}>In Pizza Mania</Text>
                            <Text style={{ fontSize: 17, fontWeight: 500, color: "#666" }} >Spicy</Text>
                            <View className="flex-row items-center">
                                <Image className="mr-1" source={star} />
                                <Text style={{ fontSize: 13, fontWeight: 400, color: "#B6B6B6" }}>4.7</Text>
                            </View>
                        </View>
                        <View className="flex-1 flex-row items-center justify-end ">
                            <Avatar.Icon size={50} icon="bookmark-outline" color='#EFC81A' backgroundColor="transparant" className="mr-[-10]" />
                            <Avatar.Icon size={50} icon="thumb-up-outline" color='#EFC81A' backgroundColor="transparant" />
                        </View>
                    </View> */}
                    {/* <View className="flex-row mb-2" style={styles.card}>
                        <Image source={resep3} style={{ width: 80, height: 80 }} />
                        <View className="ml-5">
                            <Text style={{ fontSize: 17, fontWeight: 500, color: "#666" }} >Fresh Veggie</Text>
                            <Text style={{ fontSize: 14, fontWeight: 400, color: "#B6B6B6" }}>In Pizza Mania</Text>
                            <Text style={{ fontSize: 17, fontWeight: 500, color: "#666" }} >Spicy</Text>
                            <View className="flex-row items-center">
                                <Image className="mr-1" source={star} />
                                <Text style={{ fontSize: 13, fontWeight: 400, color: "#B6B6B6" }}>4.7</Text>
                            </View>
                        </View>
                        <View className="flex-1 flex-row items-center justify-end">
                            <Avatar.Icon size={50} icon="bookmark-outline" color='#EFC81A' backgroundColor="transparant" className="mr-[-10]" />
                            <Avatar.Icon size={50} icon="thumb-up-outline" color='#EFC81A' backgroundColor="transparant" />
                        </View>
                    </View> */}
                    {/* <View className="flex-row mb-2" style={styles.card}>
                        <Image source={resep4} style={{ width: 80, height: 80 }} />
                        <View className="ml-5">
                            <Text style={{ fontSize: 17, fontWeight: 500, color: "#666" }} >Tomato</Text>
                            <Text style={{ fontSize: 14, fontWeight: 400, color: "#B6B6B6" }}>In Pizza Mania</Text>
                            <Text style={{ fontSize: 17, fontWeight: 500, color: "#666" }} >Spicy</Text>
                            <View className="flex-row items-center">
                                <Image className="mr-1" source={star} />
                                <Text style={{ fontSize: 13, fontWeight: 400, color: "#B6B6B6" }}>4.7</Text>
                            </View>
                        </View>
                        <View className="flex-1 flex-row items-center justify-end ">
                            <Avatar.Icon size={50} icon="bookmark-outline" color='#EFC81A' backgroundColor="transparant" className="mr-[-10]" />
                            <Avatar.Icon size={50} icon="thumb-up-outline" color='#EFC81A' backgroundColor="transparant" />
                        </View>
                    </View> */}
                    {/* <View className="flex-row mb-2" style={styles.card}>
                        <Image source={resep5} style={{ width: 80, height: 80 }} />
                        <View className="ml-5">
                            <Text style={{ fontSize: 17, fontWeight: 500, color: "#666" }} >Teriyaki Salmon</Text>
                            <Text style={{ fontSize: 14, fontWeight: 400, color: "#B6B6B6" }}>In Pizza Mania</Text>
                            <Text style={{ fontSize: 17, fontWeight: 500, color: "#666" }} >Spicy</Text>
                            <View className="flex-row items-center">
                                <Image className="mr-1" source={star} />
                                <Text style={{ fontSize: 13, fontWeight: 400, color: "#B6B6B6" }}>4.7</Text>
                            </View>
                        </View>
                        <View className="flex-1 flex-row items-center justify-end">
                            <Avatar.Icon size={50} icon="bookmark-outline" color='#EFC81A' backgroundColor="transparant" className="mr-[-10]" />
                            <Avatar.Icon size={50} icon="thumb-up-outline" color='#EFC81A' backgroundColor="transparant" />
                        </View>
                    </View> */}
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