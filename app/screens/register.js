import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Button, PaperProvider, TextInput } from 'react-native-paper'
import Backbutton from '../components/button/Backbutton'
import { useNavigation } from 'expo-router'
import axios from 'axios'


const Register = () => {
  const [nama, setName] = useState("");
  const [email, setEmail] = useState('');
  const [handphone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigation = useNavigation();

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const userData = {
      nama,
      email,
      handphone,
      password,
    };
    axios
      .post('http://192.168.7.230:3000/users/register', userData)
      .then(response => {
        alert("Register succesfull")
        navigation.navigate("LoginMain")
      })
      .catch(error => {
        alert("Register failed")
      });
  }

  return (
    <PaperProvider>
      <View style={styles.container}>
        <View className=" items-center mb-5">
          <Text style={{ fontSize: 40, fontWeight: 500, color: "#EFC81A" }}>
            Let's Get Started !
          </Text>
          <Text style={{ fontSize: 17, fontWeight: 400, color: "#999" }}>
            Create new account to access all feautures
          </Text>
        </View>
        <View className="m-5">
          <TextInput
            mode="outlined"
            label="Name"
            placeholder="Input your name"
            placeholderTextColor='#8B8A8F'
            outlineColor='#fff'
            activeOutlineColor='#EFC81A'
            left={<TextInput.Icon icon="account-outline" color={"#8B8A8F"} />}
            value={nama}
            onChangeText={(value) => setName(value)}
          />
          <TextInput
            mode="outlined"
            label="E-Mail"
            placeholder="Input your email"
            placeholderTextColor='#8B8A8F'
            outlineColor='#fff'
            activeOutlineColor='#EFC81A'
            left={<TextInput.Icon icon="email-outline" color={"#8B8A8F"} />}
            value={email}
            onChangeText={(value) => setEmail(value)}
          />
          <TextInput
            mode="outlined"
            label="Phone Number"
            placeholder="Input your phone number"
            placeholderTextColor='#8B8A8F'
            outlineColor='#fff'
            activeOutlineColor='#EFC81A'
            left={<TextInput.Icon icon="phone-outline" color={"#8B8A8F"} />}
            value={handphone}
            onChangeText={(value) => setPhone(value)}
          />
          <TextInput
            mode="outlined"
            label="Create New Password"
            placeholder="Input your password"
            placeholderTextColor='#8B8A8F'
            outlineColor='#fff'
            activeOutlineColor='#EFC81A'
            left={<TextInput.Icon icon="lock-outline" color={"#8B8A8F"} />}
            value={password}
            onChangeText={(value) => setPassword(value)}
            secureTextEntry
          />
          <TextInput
            mode="outlined"
            label="Confirm Password"
            placeholder="Confirm your password"
            placeholderTextColor='#8B8A8F'
            outlineColor='#fff'
            activeOutlineColor='#EFC81A'
            left={<TextInput.Icon icon="lock-outline" color={"#8B8A8F"} />}
            value={confirmPassword}
            onChangeText={(value) => setConfirmPassword(value)}
            secureTextEntry
          />
          <Button 
          mode='contained' 
          className="bg-yellow-500 p-1 mt-5 m-5" 
          onPress={handleSignUp}
          >
            Sign Up
          </Button>
          <Text className="text-center" style={{ color: "#999" }}>Already have account? <Text onPress={() => navigation.navigate('LoginMain')} style={{ color: "#EFC81A" }}>Log in Here</Text></Text>
        </View>
      </View>
    </PaperProvider>
  )
}

export default Register

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },

})