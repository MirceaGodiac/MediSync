import React, { useState } from 'react';
import { View, Button, StyleSheet, ScrollView, TouchableOpacity, Text } from 'react-native';
import NewText from './inputObjects/TextObj';
import NewParagraf from './inputObjects/ParagrafObj';
import NewBooleanInput from './inputObjects/BooleanObj';
import GeneratePDF from './PDFgenerator';

const Formular = (email:string) => {
    const [inputs, setInputs] = useState<object[]>([]);
    const [counter,changeCounter] = useState(0)
    
    ///text structure: {id:code,value:string}
    ///paragraf structure: {id:code,masterText,value:[]}
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
        console.log(NewObjs)
        setInputs(NewObjs)
    }

    const deleteInputHandler = (id:number) => {
        setInputs(inputs.filter((input:any) => input.id !== id));
    };

    return (
        <View style={styles.container}>
            <View>
                <View style={styles.buttonContainer}>
                <Button title="Add Input" onPress={addInputHandler} />
                <Button title="Add Paragraph" onPress={addParagrafHandler} />
                <Button title="Add Boolean" onPress={addBooleanHandler} />
                </View>
                <ScrollView>
                {inputs.map((input:any, index) => (
                    <View key={input.id} style={styles.inputContainer}>
                        <TouchableOpacity
                            style={styles.deleteButton}
                            onPress={() => deleteInputHandler(input.id)}
                        >
                            <Text style={styles.deleteButtonText}>X</Text>
                        </TouchableOpacity>
                        {input.id[0]==1?<NewText prop={{text:input.value,index:index,id:input.id,handleInputChange:handleInputChange}}/>:''}
                        {input.id[0]==2?<NewParagraf prop={{inputs:input.value,id:input.id,handleParagrafAnyUpdate:handleParagrafAnyUpdate,masterText:input.masterText,handleParagrafMasterTextChange:handleParagrafMasterTextChange}}/>:''}
                        {input.id[0]==3?<NewBooleanInput prop={{valuebool:input.valuebool,valuetext:input.valuetext,id:input.id,handleBooleanChange:handleBooleanChange,handleBooleanTextChange:handleBooleanTextChange}}/>:''}
                    </View>
                ))}
                
            </ScrollView>
                <Button title="trimite" onPress={()=>{
                    GeneratePDF(inputs)}}/>
            </View>
            
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        justifyContent: 'space-around',
    },
    inputContainer: {

        alignItems: 'flex-start',
        marginBottom: 10,
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
        alignItems: 'flex-end',
    },
    deleteButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    buttonContainer:{
        flexDirection:'row',

    },
    button:{
        flex:1
    }
});

export default Formular;