import { FlatList, Image, StyleSheet, View, Text } from 'react-native'
import React from 'react'

const imageList = [
    { image: require('../../../assets/image/rectangle8.png'), name: 'Roti Bakar' },
    { image: require('../../../assets/image/rectangle10.png'), name: 'Ketoprak' },
    { image: require('../../../assets/image/rectangle8.png'), name: 'Roti Bakar' },
    { image: require('../../../assets/image/rectangle10.png'), name: 'Roti Bakar' },
]


export default function TopCarousel() {
    return (
        <View>
            <Text className=" font-bold text-2xl" style={{ color: "#3F3A3A" }}>New Recipes</Text>
            <FlatList
                horizontal
                data={imageList}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View>
                        <Image source={item.image} style={styles.image} />
                        <View style={styles.textOverlay}>
                            <Text style={styles.itemName}>{item.name}</Text>
                        </View>
                    </View>
                )}
            />
        </View>

    )
}

const styles = StyleSheet.create({

    image: {
        width: 170,
        height: 200,
        borderRadius: 8,
    },

    textOverlay: {
        position: 'absolute',
        bottom:40,
        left:30
    },
    itemName: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'white',
    },
})