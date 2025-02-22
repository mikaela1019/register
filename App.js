import React, { useState } from "react";
import { Text } from "react-native";
import { View } from "react-native";
import { Image } from "react-native";
import { TextInput } from "react-native";
import { TouchableOpacity } from "react-native";
import { loginstyle } from "./src/styles/MainStyles";

const App = () => {
  const [username, setUsername] = useState('')
  const [firstname, setFirstName] = useState('')

  const HandlePress = () => {
    console.log('Hello')
    setUsername('Nanami')
    setFirstName ('Mikai')
  }
  return (
    <View style= {loginstyle.container} >
      <TextInput 
        value={username}
        style={loginstyle.TextInput}
        onChangeText={(text) => setUsername (text)}
      />
      <TextInput 
        value={firstname}
        style={loginstyle.TextInput}
        onChangeText={(text) => setFirstName (text)}
      />
      <TouchableOpacity 
        onPress= {HandlePress}>
          <Image
      style= {loginstyle.Imagecontainer}
      source={require('./src/assets/nanami.jpeg')}/>
        </TouchableOpacity>
       <Text>
      Hello everyone
      </Text>
    </View>
   
  );

}
export default App