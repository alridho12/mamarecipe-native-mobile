import { StyleSheet, Text, View,TouchableOpacity,Modal } from 'react-native'
import React, { useState } from 'react'
import { HStack, NativeBaseProvider } from 'native-base'
import { Avatar, Button, PaperProvider } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

import axios from 'axios'
const ModalDelete = ({recipes_id}) => {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible2] = useState(false);
    const handleDelete = () => {
        axios.delete(`http://192.168.226.184:3000/recipes/${recipes_id}`)
            .then(() => {
                alert("delete success")
                navigation.navigate("Home")
            })
            .catch((error) => console.log(error));
    }

    return (
        <NativeBaseProvider>
            <PaperProvider>
                <View className="flex-1 flex-row items-center justify-end">
                    <TouchableOpacity onPress={() => setModalVisible2(!modalVisible)}>
                        <Avatar.Icon size={50} icon="delete-outline" color='red' backgroundColor="transparant" className="mr-[-10]" />
                    </TouchableOpacity>
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
                            <Text marginLeft={'auto'} marginRight={'auto'} fontSize={20}>Apakah anda yakin ingin menghapus resep ini?</Text>

                            <HStack mt={5} style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                                <Button

                                    onPress={() => setModalVisible2(!modalVisible)}
                                    mr={3}
                                >
                                    Cancel
                                </Button>
                                <Button backgroundColor={'red.600'} w={20} onPress={handleDelete} >Hapus</Button>
                            </HStack>
                        </View>
                    </Modal>
                </View>
            </PaperProvider>
        </NativeBaseProvider>
    )
}

export default ModalDelete

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