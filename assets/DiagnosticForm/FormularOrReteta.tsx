import Formular from "./FormularAnalize";
import React,{ useState } from "react";
import HandleSaveDataAndOther from './HandleSaveDataAndOther';
import Prescriptie from "./Prescriptie";
import { View,StyleSheet, TouchableOpacity,Text } from 'react-native';
import {formularBackground,formularButtonSubmit} from '../color'
import generateformular from "../PDFgeneratorFormular/PDFgenerator";
import generatereteta from "../PDFgeneratorReteta/PDFgenerator";

const ChooseWhich = (email:string) =>{

    const [PrescriptionOrForm,changePrescriptionOrForm] = useState<boolean>(false)
    const [titlu,changeTitlu] = useState('')
    const [inputsFormular, setInputsFormular] = useState<object[]>([]);
    const [inputsReteta, setInputsReteta] = useState<object[]>([
        {id:'unitate',val:''},{id:'serie',val:''},{id:'nr',val:''},{id:'DateP',val:''}
        ,{id:'varsta',val:''},{id:'CNP',val:''},{id:'diagnostic',val:''},{id:'detalimed',val:''}
        ,{id:'dencomert',val:''},{id:'concentratia',val:''},{id:'durata',val:''},{id:'numedoc',val:''}
        ,{id:'codparaf',val:''}
    ]);

    return <View style={styles.container}>
        <View style={styles.twoOptionsContainer}>
            <TouchableOpacity style={[styles.FormularBTN,(PrescriptionOrForm===false?styles.Selected:styles.NotSelected)]} 
            onPress={()=>{changePrescriptionOrForm(false)}}>
                <Text style={styles.textalignment}>Formular</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.RetetaBTN,(PrescriptionOrForm===false?styles.NotSelected:styles.Selected)]} 
            onPress={()=>{changePrescriptionOrForm(true)}}>
                <Text style={styles.textalignment}>Prescriptie</Text>
            </TouchableOpacity>
        </View>
        <View style={{height:'86%'}}>
        {PrescriptionOrForm===false?
        <Formular prop={{inputs:inputsFormular
            ,setInputs:setInputsFormular
            ,titlu:titlu
            ,changeTitlu:changeTitlu}}/>
        :<Prescriptie prop={{inputs:inputsReteta
            ,setInputs:setInputsReteta
            ,titlu:titlu
            ,changeTitlu:changeTitlu
        }}/>}
        </View>
        <View style={{height:'10%',backgroundColor:formularBackground}}>
            <TouchableOpacity style={styles.submit} onPress={()=>{
                if(PrescriptionOrForm===false)
                    generateformular({inputs:inputsFormular,titlu:titlu})
                else
                    generatereteta({inputs:inputsReteta,titlu:'PRESCRIPȚIE MEDICALĂ'})
            }}>
                <Text style={{textAlign:'center',fontSize:20}}>Trimi-te</Text>
            </TouchableOpacity>
        </View>
    </View>
}

const styles=StyleSheet.create({
    container:{
        height:'100%',
    },
    twoOptionsContainer:{
        height:'4%',
        paddingLeft:10,
        paddingRight:10,
        flex:1,
        flexDirection:'row',
        borderRadius:30,
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
    },
    FormularBTN:{
        width:'50%',
        direction:'ltr',
    },
    RetetaBTN:{
        width:'50%',
        direction:'rtl',
    },
    textalignment:{
        fontSize:20,
        textAlign:'center',
        alignSelf:'center',
    },
    Selected:{
        backgroundColor:formularBackground,
        borderTopLeftRadius:15,
        borderTopRightRadius:15,
    },
    NotSelected:{
        opacity:0.5,
    },
    submit:{
        marginTop:10,
        justifyContent:'center',
        alignSelf:'center',
        backgroundColor:formularButtonSubmit,
        width:'40%',
        height:'45%',
        borderRadius:10,
    }
})

export default ChooseWhich

