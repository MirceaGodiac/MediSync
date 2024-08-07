import { TextInput } from "react-native-gesture-handler";
import { StyleSheet } from "react-native"
import React from "react";
import { inputsEdges,inputsBackground } from '../../color';

const NewText = ({prop}:any) =>{
    const {text,index,id,handleInputChange} = prop
    return <TextInput
        style={styles.input}
        onChangeText={(text) => handleInputChange(text, id)}
        value={text}
    />
}

const styles = StyleSheet.create({
    input: {
        width:'90%',
        height: 30,
        borderColor: inputsEdges,
        backgroundColor:inputsBackground,
        borderWidth: 2,
        borderRadius:50,
    },
})

export default NewText