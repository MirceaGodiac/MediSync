import React, { useState } from 'react';
import { View, Button, StyleSheet, ScrollView, TouchableOpacity, Text } from 'react-native';
import NewText from './inputObjects/TextObj';
import NewParagraf from './inputObjects/ParagrafObj';
import NewBooleanInput from './inputObjects/BooleanObj';
import { TextInput } from 'react-native-gesture-handler';
import { formularBackground, inputsBackground, inputsEdges } from '../color';


const Formular = ({prop}:any) => {
    const [counter,changeCounter] = useState(0)
    const {inputs,setInputs,titlu,changeTitlu} = prop

    
    ///text structure: {id:code,value:string}
    ///paragraf structure: {id:code,masterText:string,value:[]}
    ///boolean structure: {id:code,valuebool:boolean,valuetext:string}
    const addInputHandler = () => {
        changeCounter(counter+1)
        const code = "1"+counter
        setInputs([...inputs, { id: code, value: '' }]);
    }
    const addParagrafHandler = () =>{
        changeCounter(counter+1)
        const code = "2"+counter
        setInputs([...inputs, { id: code, masterText:'' , value: [] }]);
    }
    const addBooleanHandler = () =>{
        changeCounter(counter+1)
        const code = "3"+counter
        setInputs([...inputs, { id: code, valuetext:'' , valuebool:0 }]);
    }

    const handleParagrafMasterTextChange = (text:string,id:number) =>{
        const newinputs = inputs.map((input:any)=>{
            if(input.id==id)
                return {...input,masterText:text}
            return input
        })
        setInputs(newinputs)
    }
    const handleBooleanTextChange = (text:string,id:number) =>{
        const newinputs = inputs.map((input:any)=>{
            if(input.id==id)
                return {...input,valuetext:text}
            return input
        })
        setInputs(newinputs)
    }
    const handleBooleanChange = (val:number,id:number) =>{
        const newinputs = inputs.map((input:any)=>{
            if(input.id==id)
                return {...input,valuebool:val}
            return input
        })
        setInputs(newinputs)
    }
    const handleInputChange = (text:string,id:number) => {
        const newInputs = inputs.map((input:any) => {
            if (input.id === id) {
                return { ...input, value: text };
            }
            return input;
        });
        setInputs(newInputs);
    };
    const handleParagrafAnyUpdate = (texts:object,id:number) =>{
        const NewObjs = inputs.map((input:any)=>{
            if(input.id===id)
                return {...input,value:texts}
            return input
        })
        setInputs(NewObjs)
    }

    const deleteInputHandler = (id:number) => {
        setInputs(inputs.filter((input:any) => input.id !== id));
    };

    return (
        <View style={styles.container}>
                <View style={styles.buttonContainer}>
                <Button title="Add Input" onPress={addInputHandler} />
                <Button title="Add Paragraph" onPress={addParagrafHandler} />
                <Button title="Add Boolean" onPress={addBooleanHandler} />
                </View>
                <TextInput placeholder="Titlu document" value={titlu} onChangeText={text=>{changeTitlu(text)}} style={styles.titlu}/>
                <ScrollView style={{width:'100%',height:'100%'}}>
                {inputs.map((input:any, index:number) => (
                    <View key={input.id} style={styles.inputContainer}>
                        {input.id[0]==1?<NewText prop={{text:input.value,index:index,id:input.id,handleInputChange:handleInputChange}}/>:''}
                        {input.id[0]==2?<NewParagraf prop={{inputs:input.value,id:input.id,handleParagrafAnyUpdate:handleParagrafAnyUpdate,masterText:input.masterText,handleParagrafMasterTextChange:handleParagrafMasterTextChange}}/>:''}
                        {input.id[0]==3?<NewBooleanInput prop={{valuebool:input.valuebool,valuetext:input.valuetext,id:input.id,handleBooleanChange:handleBooleanChange,handleBooleanTextChange:handleBooleanTextChange}}/>:''}
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
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        height:'100%',
        backgroundColor:formularBackground,
    },
    inputContainer: {
        width:'100%',
        marginBottom: 10,
        flex:1,
        flexDirection:'row',
    },
    titlu: {
        marginBottom:15,
        textAlign:"center",
        height: 30,
        marginRight:"10%",
        marginLeft:"10%",
        borderColor: inputsEdges,
        backgroundColor:inputsBackground,
        borderWidth: 2,
        borderRadius:50,
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
    buttonContainer:{
        flexDirection:'row',
        justifyContent:'space-around',
        paddingBottom:15,
    },
});

export default Formular;