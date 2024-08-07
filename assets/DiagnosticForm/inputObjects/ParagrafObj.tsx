import React, { useState } from 'react';
import { TextInput } from "react-native-gesture-handler";
import { View, Button, StyleSheet, ScrollView, TouchableOpacity, Text } from 'react-native';
import { inputsEdges,inputsBackground } from '../../color';
import NewText from './TextObj';

const NewParagraf = ({prop}:any) =>{
    const {inputs,id,handleParagrafAnyUpdate,masterText,handleParagrafMasterTextChange} = prop
    const [counter,changeCounter] = useState(0)

    const ParafaddInputHandler = () => {
        changeCounter(counter+1)
        const code = "1"+counter
        const newInputs = [...inputs,{ id: code, value: '' }]
        handleParagrafAnyUpdate(newInputs,prop.id)
    };

    const ParafhandleInputChange = (text:string, id:number) => {
        const newInputs = inputs.map((input:any) => {
            if (input.id === id) {
                return { ...input, value: text };
            }
            return input;
        });
        handleParagrafAnyUpdate(newInputs,prop.id)
    };

    const deleteInputHandler = (id:number) => {
        const newInputs = inputs.filter((input:any) => input.id !== id);
        handleParagrafAnyUpdate(newInputs,prop.id)
    };

    return (
        <View style={styles.container}>
            <TextInput value = {masterText} onChangeText = {text=>{handleParagrafMasterTextChange(text,prop.id)}} style={styles.masterinput}/>
            <View style={{flex:1,justifyContent:'center'}}>
                <Button title="Add Input" onPress={ParafaddInputHandler} />
                <ScrollView>
                {inputs.map((input:any, index:number) => (
                    <View key={input.id} style={styles.inputContainer}>
                        <NewText prop={{text:input.value,index:index,id:input.id,handleInputChange:ParafhandleInputChange}}/>
                        <TouchableOpacity
                            style={styles.deleteButton}
                            onPress={() => deleteInputHandler(input.id)}
                        >
                            <Text style={styles.deleteButtonText}>X</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>
            </View>
            
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        backgroundColor:'white',
        width:'90%',
        borderRadius:17,
    },
    inputContainer: {
        width:'100%',
        marginBottom: 10,
        paddingLeft:15,
        paddingRight:15,
        flex:1,
        flexDirection:'row',
    },
    input: {
        width:'100%',
        height: 30,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
    },
    deleteButton: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        width:35,
        alignSelf: 'flex-start',
    },
    deleteButtonText: {
        color: 'grey',
        fontWeight: 'bold',
        justifyContent:'center',
        fontSize:17
    },
    addbutton:{
        width:'20%',
        flex:1,
        alignSelf:'flex-end',

    },
    masterinput: {
        width:'100%',
        height: 30,
        borderColor: inputsEdges,
        backgroundColor:inputsBackground,
        borderWidth: 2,
        marginBottom:10,
        borderRadius:50,
    },
});

export default NewParagraf