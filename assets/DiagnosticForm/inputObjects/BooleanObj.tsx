import { TextInput } from "react-native-gesture-handler"
import { View, Text, StyleSheet } from "react-native"
import React from "react"

const NewBooleanInput = ({ prop }:any) => {
    const { valuebool,valuetext,id,handleBooleanChange,handleBooleanTextChange } = prop

    return <View style={styles.container}>
        <TextInput style={styles.text} onChange={text=>{handleBooleanTextChange(text,id)}} value={valuetext}/>
        <Text style={styles.bool} onPress={()=>{handleBooleanChange(!valuebool,id)}}>{valuebool==0?"NU":"DA"}</Text>
        </View>
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        backgroundColor:'red',
        justifyContent:'space-around',
    },
    text:{
        borderColor:'gray',
        borderWidth:1,
        flex:1,
        width:'80%',
    },
    bool:{
        borderColor:'gray',
        borderWidth:1,
        flex:1,
        width:'20%',
        alignItems:'center',
    }
})

export default NewBooleanInput