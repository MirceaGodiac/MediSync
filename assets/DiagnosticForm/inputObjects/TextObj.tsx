import { TextInput } from "react-native-gesture-handler";
import { StyleSheet } from "react-native"
import React from "react";

const NewText = ({prop}:any) =>{
    const {text,index,id,handleInputChange} = prop
    return <TextInput
        style={styles.input}
        onChangeText={(text) => handleInputChange(text, id)}
        value={text}
        placeholder={`Input ${index + 1}`}
    />
}

const styles = StyleSheet.create({
    input: {
        width:'100%',
        height: 30,
        borderColor: 'gray',
        borderWidth: 1,
    },
})

export default NewText