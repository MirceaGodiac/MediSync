import React, { useState } from 'react';
import { TextInput } from "react-native-gesture-handler";
import { View, Button, StyleSheet, ScrollView, TouchableOpacity, Text } from 'react-native';
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
        <View >
            <TextInput value = {masterText} onChangeText = {text=>{handleParagrafMasterTextChange(text,prop.id)}} style={styles.masterinput}/>
            <View style={styles.container}>
                <Button title="Add Input" onPress={ParafaddInputHandler} />
                <ScrollView>
                {inputs.map((input:any, index:number) => (
                    <View key={input.id} style={styles.inputContainer}>
                        <TouchableOpacity
                            style={styles.deleteButton}
                            onPress={() => deleteInputHandler(input.id)}
                        >
                            <Text style={styles.deleteButtonText}>X</Text>
                        </TouchableOpacity>
                        <NewText prop={{text:input.value,index:index,id:input.id,handleInputChange:ParafhandleInputChange}}/>
                        
                    </View>
                ))}
            </ScrollView>
            </View>
            
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-around',
        borderWidth:3,
        paddingLeft:20,
        borderColor:'grey',
        width:'100%'
    },
    inputContainer: {
        alignItems: 'flex-start',
    },
    input: {
        width:'100%',
        height: 30,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
    },
    deleteButton: {
        backgroundColor: 'red',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    deleteButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    addbutton:{
        width:'20%',
        flex:1,
        alignSelf:'flex-end',
    },
    masterinput: {
        width:'100%',
        height: 30,
        borderColor: 'gray',
        borderWidth: 1,
    },
});

export default NewParagraf