import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
import LoginScreen from "./screens/login"
import HomeScreen from "./mainconteiner"
import DetailPopulerMenu from "./screens/detailrecipemenu";
import MyRecipe from "./screens/myrecipe";
import SavedRecipe from "./screens/savedrecipe";
import LikedRecipe from "./screens/likedrecipe";
import EditProfile from "./screens/editprofile";
import Register from "./screens/register";


export default function Page() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          name="LoginMain"
          component={LoginScreen}
          options={{
            tabBarShowLabel:false,
            headerShown : false
          }}
        />
        <Stack.Screen
          name="RegisterMain"
          component={Register}
          options={{
            tabBarShowLabel:false,
            headerShown : false
          }}
        />
        <Stack.Screen
          name="HomeMain"
          component={HomeScreen}
          options={{
            tabBarShowLabel: false,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="MoreInfo"
          component={DetailPopulerMenu}
          options={{
            tabBarShowLabel: false,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Editprofile"
          component={EditProfile}
          options={{
            tabBarShowLabel: false,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Myrecipes"
          component={MyRecipe}
          options={{
            tabBarShowLabel: false,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Savedrecipes"
          component={SavedRecipe}
          options={{
            tabBarShowLabel: false,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Likedrecipes"
          component={LikedRecipe}
          options={{
            tabBarShowLabel: false,
            headerShown: false,
          }}
        />
      </Stack.Navigator>
      {/* <MainContainer /> */}
      {/* <View style={styles.container}>
        <View style={styles.main}>
          <Text style={styles.title}>Hello World</Text>
          <Text style={styles.subtitle}>This is the first page of your app.</Text>
          <Link href={"/screens/register"}>register page</Link>
          <Link href={"/screens/login"}>login page</Link>
          <Link href={"/screens/home"}>home page</Link>
          <Link href={"/screens/profile"}>profile page</Link>
          <Link href={"/screens/addrecipe"}>crud page</Link>
          <Link href={"/screens/editprofile"}>edit profile</Link>
          <Link href={"/screens/myrecipe"}>my recipe</Link>
          <Link href={"/screens/savedrecipe"}>saved recipe</Link>
          <Link href={"/screens/likedrecipe"}>Liked  recipe</Link>
          <Link href={"/screens/detailrecipemenu"}>detail  recipe</Link>
        </View>
      </View> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
