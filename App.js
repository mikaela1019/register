import React, { useState } from "react";
import { Text } from "react-native";
import { View } from "react-native";
import { Image } from "react-native";
import { TextInput } from "react-native";
import { TouchableOpacity } from "react-native";
import { ImageBackground } from "react-native";
import { loginstyle } from "./src/styles/MainStyles";

const App = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');

  const HandlePress = () => {
    console.log('Registered');
  }
  return (
    <ImageBackground 
      source={require('./src/assets/background.png')}  // Replace with your image path
      style={loginstyle.background}
    >
    <View style= {loginstyle.container} >
    <Text style={loginstyle.helloText}>REGISTER</Text>
    <Text style={loginstyle.label}>Username:</Text>
      <TextInput 
        value={username}
        placeholder="Username"
        style={loginstyle.TextInput}
        onChangeText={(text) => setUsername (text)}
      />
      <Text style={loginstyle.label}>Email:</Text>
      <TextInput 
        value={email}
        placeholder="Email"
        style={loginstyle.TextInput}
        onChangeText={(text) => setEmail (text)}
      />
      <Text style={loginstyle.label}>Password:</Text>
      <TextInput
        value={password}
        placeholder="Password"
        style={loginstyle.TextInput}
        secureTextEntry={true} // This hides the text (password field)
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity 
        onPress= {HandlePress}>
          <Image
      style= {loginstyle.Imagecontainer}
      source={require('./src/assets/button.png')}/>
        </TouchableOpacity>
    </View>
    </ImageBackground>
   
  );

}
export default App
