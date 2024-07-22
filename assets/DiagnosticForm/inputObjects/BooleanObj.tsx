import { TextInput } from "react-native-gesture-handler"
import { View, Text, StyleSheet } from "react-native"
import React from "react"

const NewBooleanInput = ({ prop }:any) => {
    const { valuebool,valuetext,id,handleBooleanChange,handleBooleanTextChange } = prop

    return <View style={styles.container}>
        <TextInput style={styles.text} onChangeText={text=>{handleBooleanTextChange(text,id)}} value={valuetext}/>
        <Text style={[styles.bool,valuebool==1?styles.boolgreen:styles.boolred]} onPress={()=>{handleBooleanChange(!valuebool,id)}}>{valuebool==0?"NU":"DA"}</Text>
        </View>
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-around',
    },
    text:{
        borderColor:'gray',
        borderWidth:1,
        flex:1,
        paddingRight:'60%',
        marginRight:'15%',
    },
    bool:{
        borderColor:'gray',
        borderWidth:1,
        borderRadius:7,
        flex:1,
        textAlign:'center',
    },
    boolgreen:{
        backgroundColor:'limegreen',
    },
    boolred:{
        backgroundColor:'red',
    }
})

export default NewBooleanInput