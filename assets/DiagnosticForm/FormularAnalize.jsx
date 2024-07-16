import React, { useState } from 'react';
import { View, Button, StyleSheet, ScrollView, TouchableOpacity, Text } from 'react-native';
import NewText from './TextObj';
import NewParagraf from './ParagrafObj';
import NewBooleanInput from './BooleanObj';
import GeneratePDF from './PDFgenerator';

const Formular = (email) => {
    const [inputs, setInputs] = useState([]);
    const [counter,changeCounter] = useState(0)
    ///text structure: {code,val:string}
    ///paragraf structure: {code,master_title,values:[]}
    ///boolean structure: {code,valuebool:boolean,valuetext:string}

    const addInputHandler = () => {
        changeCounter(counter+1)
        const code = "1"+counter
        setInputs([...inputs, { id: code, value: '' }]);
    }
    const addParagrafHandler = () =>{
        changeCounter(counter+1)
        const code = "2"+counter
        setInputs([...inputs, { id: code, masterText:'aaaa' , value: [] }]);
    }
    const addBooleanHandler = () =>{
        changeCounter(counter+1)
        const code = "3"+counter
        setInputs([...inputs, { id: code, valuetext:'' , valuebool:0 }]);
    }

    const handleParagrafMasterTextChange = (text,id) =>{
        const newinputs = inputs.map((input)=>{
            if(input.id==id)
                return {...input,masterText:text}
            return input
        })
        setInputs(newinputs)
    }
    const handleBooleanTextChange = (text,id) =>{
        const newinputs = inputs.map((input)=>{
            if(input.id==id)
                return {...input,valuetext:text}
            return input
        })
        setInputs(newinputs)
    }
    const handleBooleanChange = (val,id) =>{
        const newinputs = inputs.map((input)=>{
            if(input.id==id)
                return {...input,valuebool:val}
            return input
        })
        setInputs(newinputs)
    }
    const handleInputChange = (text, id) => {
        const newInputs = inputs.map(input => {
            if (input.id === id) {
                return { ...input, value: text };
            }
            return input;
        });
        setInputs(newInputs);
    };
    const handleParagrafAnyUpdate = (texts,id) =>{
        console.log(texts,id)
        const NewObjs = inputs.map(input=>{
            if(input.id===id)
                return {...input,value:texts}
            return input
        })
        console.log(NewObjs)
        setInputs(NewObjs)
    }

    const deleteInputHandler = (id) => {
        setInputs(inputs.filter(input => input.id !== id));
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
                {inputs.map((input, index) => (
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
                <Button title="trimite" onPress={()=>{GeneratePDF(inputs)}}/>
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