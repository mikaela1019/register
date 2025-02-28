import { StyleSheet } from "react-native";

export const loginstyle = StyleSheet.create (
    {
        background: {
            flex: 1,
            resizeMode: 'cover', 
            justifyContent: 'center',
            alignItems: 'center',
        },
        container: {
            justifyContent: 'center',
            alignItems: 'center',
            height:'100%',

        },
        helloText: {
            color: 'white', 
            fontSize: 30,
            fontWeight: 'bold',
            marginTop: 20,
            marginBottom: 20,
          },
        label: {
            alignSelf: 'flex-start',
            marginLeft: '3%', 
            marginBottom: 5,
            fontWeight: 'bold',
            fontSize: 16,
            color: 'white',
          },
        TextInput: {
            width: '280',
            height: 50,
            borderColor: 'gray',
            borderWidth: 1,
            paddingHorizontal: 10,
            marginBottom: 15,
            borderRadius: 50,
            backgroundColor: 'white', 
          },
        Imagecontainer: {
            marginTop: 15,
            height:'80',
            width:'230',

        }
    }
)
