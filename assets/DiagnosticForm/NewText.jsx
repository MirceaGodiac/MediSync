import { useState } from "react"
import { StyleSheet, View, Text } from "react-native"
import React from "react"
import { TextInput, TouchableOpacity } from "react-native-gesture-handler"

const NewText = () =>{
    const [text,changeText] = useState('')

    const Print = () =>{
        
        return <TextInput value={text} onChangeText={changeText}/>
    }
    return {"PrintMethod":<Print/>,"string":text}
}

class Newtext extends React.Component{
    constructor()
    {
        this.state={}
    }
    render()
    {
        return <TextInput value={text} onChangeText={changeText}/>
    }
}

<Newtext/>
new Newtext

export default NewText