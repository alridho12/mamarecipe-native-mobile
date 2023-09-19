import { View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import { useNavigation } from 'expo-router'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Backbutton = () => {
    const navigation = useNavigation();
  return (
    <View style={{position:"absolute"}}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
      <Button icon="chevron-left"/>
      </TouchableOpacity>
    </View>
  )
}

export default Backbutton