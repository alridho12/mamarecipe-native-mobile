import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { PaperProvider } from 'react-native-paper'
import Backbutton from '../components/button/Backbutton'
import resep1 from '../../assets/image/myrecipe.png'
import resep2 from '../../assets/image/myrecipe2.png'

export default function SavedRecipe() {
  return (
    <PaperProvider>
            <Backbutton />
            <View className="item-center">
                <View className="items-center mb-5">
                    <Text style={{ fontSize: 40, fontWeight: 500, color: "#EFC81A" }}>
                        Saved Recipe
                    </Text>
                </View>
                <View className="m-5">
                    <View className="flex-row mb-2" style={styles.card}>
                        <Image source={resep1} style={{ width: 80, height: 80 }} />
                        <View className="ml-5">
                            <Text style={{ fontSize: 17, fontWeight: 500, color: "#666" }} >Teriyaki Salmon</Text>
                            <Text style={{ fontSize: 14, fontWeight: 400, color: "#B6B6B6" }}>In Veg Pizza</Text>
                            <Text style={{ fontSize: 17, fontWeight: 500, color: "#666" }} >Spicy</Text>
                        </View>
                    </View>
                    <View className="flex-row mb-2" style={styles.card}>
                        <Image source={resep2} style={{ width: 80, height: 80 }} />
                        <View className="ml-5">
                            <Text style={{ fontSize: 17, fontWeight: 500, color: "#666" }} >Teriyaki Salmon</Text>
                            <Text style={{ fontSize: 14, fontWeight: 400, color: "#B6B6B6" }}>In Pizza Mania</Text>
                            <Text style={{ fontSize: 17, fontWeight: 500, color: "#666" }} >Spicy</Text>
                        </View>
                    </View>
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