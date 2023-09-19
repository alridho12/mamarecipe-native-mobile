import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { PaperProvider, Searchbar } from 'react-native-paper'
import foto1 from '../../assets/image/foto1.png'
import foto2 from '../../assets/image/foto2.png'
import foto3 from '../../assets/image/foto3.png'
import foto4 from '../../assets/image/foto4.png'
import TopCarousel from '../components/carousel/TopCarousel'
import BottomCarousel from '../components/carousel/BottomCarousel'
import { NavigationContainer } from '@react-navigation/native'



export default function Home() {

    return (
            <PaperProvider>
                <ScrollView>
                    <View className=" m-5 ">
                        <Searchbar
                            placeholder='Search Pasta, Bread, etc'
                            placeholderTextColor='#8B8A8F'
                            iconColor='#8B8A8F'
                            style={{
                                backgroundColor: '#EFEFEF',
                                borderRadius: 15
                            }}
                        />
                        <View className="mt-10">
                            <Text className=" font-bold text-2xl" style={{ color: "#3F3A3A" }}>Popular for You</Text>
                            <View className="justify-center flex-row gap-3 my-2">
                                <View >
                                    <Image source={foto1} style={{ width: 80, height: 80 }} />
                                    <Text className="text-center mt-1 font-medium">Chicken</Text>
                                </View>
                                <View>
                                    <Image source={foto2} style={{ width: 80, height: 80, borderRadius: 20 }} />
                                    <Text className="text-center mt-1 font-medium">Soup</Text>
                                </View>
                                <View >
                                    <Image source={foto3} style={{ width: 80, height: 80 }} />
                                    <Text className="text-center mt-1 font-medium">Seafood</Text>
                                </View>
                                <View >
                                    <Image source={foto4} style={{ width: 80, height: 80 }} />
                                    <Text className="text-center mt-1 font-medium">Dessert</Text>
                                </View>
                            </View>
                        </View>
                        <View className="mt-10">
                            <TopCarousel />
                        </View>
                        <View className="mt-8" >
                            <BottomCarousel />
                        </View>
                    </View>
                </ScrollView>
            </PaperProvider>
    )
}

const styles = StyleSheet.create({})