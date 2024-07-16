import { TextInput } from "react-native-gesture-handler"
import { View, Text, StyleSheet } from "react-native"

const NewBooleanInput = ({ prop }) => {
    const { valuebool,valuetext,id,handleBooleanChange,handleBooleanTextChange } = prop

    return <View style={styles.container}>
        <TextInput style={styles.text} value={valuetext} onChange={text=>{handleBooleanTextChange(text,id)}}/>
        <Text style={styles.bool} onPress={()=>{handleBooleanChange(!valuebool,id)}}>{valuebool==0?"NU":"DA"}</Text>
        </View>
}

styles = StyleSheet.create({
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