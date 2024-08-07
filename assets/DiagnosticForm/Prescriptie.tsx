import { View, Text, StyleSheet,ScrollView } from 'react-native';
import React from 'react'
import { TextInput } from 'react-native-gesture-handler';
import { formularBackground } from '../color';

const Prescriptie = ({prop}:any) =>{

    const {inputs,setInputs,titlu,changeTitlu} = prop

    const changeAnyInputs = (key:string,value:any) =>{
        const newInputs = inputs.map((obj:any)=>{
            if(obj.id==key)
                return {...obj,val:value}
            return {...obj}
        })
        setInputs(newInputs)
    }

    return <ScrollView style={styles.container}>
        <View id="Unitate Sanitara">
            <Text style={styles.deffont}>Unitate Sanitara</Text>
            <TextInput style = {[styles.input,{width:'40%',fontSize:20}]} placeholder="............." value={inputs[0].val} onChangeText={(text:any)=>{changeAnyInputs('unitate',text)}}/>
        </View>
        <View id="titlu" style={[,styles.sameline,styles.middlealign]}>
            <Text style={[styles.titlu]}>PRESCRIPȚIE MEDICALĂ</Text>
        </View>
        <View id="seria nr" style={[styles.sameline,styles.middlealign]}>
            <Text style={{paddingRight:5}}>Seria</Text>
            <TextInput style = {[styles.input,{width:'10%'}]} placeholder="............." value={inputs[1].val} onChangeText={(text:any)=>{changeAnyInputs('serie',text)}}/>
            <View style={{width:10}}></View>
            <Text style={{paddingRight:5}}>Nr.</Text>
            <TextInput style = {[styles.input,{width:'10%'}]} placeholder="............." value={inputs[2].val} onChangeText={(text:any)=>{changeAnyInputs('nr',text)}}/>
        </View>
        <View id="date pacient" style={[styles.sameline]}>
            <Text style={styles.deffont}>Datele Pacientului:</Text>
            <TextInput style = {[styles.input,{width:'50%',fontSize:20}]} placeholder="............." value={inputs[3].val} onChangeText={(text:any)=>{changeAnyInputs('DateP',text)}}/>
        </View>
        <View id="varsta" style={[styles.sameline]}>
            <Text style={styles.deffont}>Varsta:</Text>
            <TextInput style = {[styles.input,{width:'80%',fontSize:20}]} placeholder="............." value={inputs[4].val} onChangeText={(text:any)=>{changeAnyInputs('varsta',text)}}/>
        </View>
        <View id="cnp" style={[styles.sameline]}>
            <Text style={styles.deffont}>CNP:</Text>
            <TextInput style = {[styles.input,{width:'80%',fontSize:20}]} placeholder="............." value={inputs[5].val} onChangeText={(text:any)=>{changeAnyInputs('CNP',text)}}/>
        </View>
        <View id="diagnostic" style={[styles.sameline]}>
            <Text style={styles.deffont}>Diagnostic:</Text>
            <TextInput style = {[styles.input,{width:'70%',fontSize:20}]} placeholder="............." value={inputs[6].val} onChangeText={(text:any)=>{changeAnyInputs('diagnostic',text)}}/>
        </View>
        <View id="detalii medicale" style={[styles.sameline]}>
            <Text style={styles.deffont}>Detalii medicament:</Text>
            <TextInput style = {[styles.input,{width:'50%',fontSize:20}]} placeholder="............." value={inputs[7].val} onChangeText={(text:any)=>{changeAnyInputs('detalimed',text)}}/>
        </View>
        <View id="denumirea comerciala" >
            <Text style={styles.deffont}>Denumirea comercială și/sau denumirea comună internațională:</Text>
            <TextInput style = {[styles.input,{width:'100%',fontSize:20}]} placeholder="............." value={inputs[8].val} onChangeText={(text:any)=>{changeAnyInputs('dencomert',text)}}/>
        </View>
        <View id="concentratia" style={[styles.sameline]}>
            <Text style={styles.deffont}>Cantitatea:</Text>
            <TextInput style = {[styles.input,{width:'70%',fontSize:20}]} placeholder="............." value={inputs[9].val} onChangeText={(text:any)=>{changeAnyInputs('concentratia',text)}}/>
        </View>
        <View id="durata" style={[styles.sameline]}>
            <Text style={styles.deffont}>Durata tratamentului:</Text>
            <TextInput style = {[styles.input,{width:'50%',fontSize:20}]} placeholder="............." value={inputs[10].val} onChangeText={(text:any)=>{changeAnyInputs('durata',text)}}/>
        </View>
        <View id="numele doctorului" style={[styles.sameline]}>
            <Text style={styles.deffont}>Numele medicului prescriptor:</Text>
            <TextInput style = {[styles.input,{width:'30%',fontSize:20}]} placeholder="............." value={inputs[11].val} onChangeText={(text:any)=>{changeAnyInputs('numedoc',text)}}/>
        </View>
        <View id="codul de parafa" style={[styles.sameline]}>
            <Text style={styles.deffont}>Codul de parafă:</Text>
            <TextInput style = {[styles.input,{width:'60%',fontSize:20}]} placeholder="............." value={inputs[12].val} onChangeText={(text:any)=>{changeAnyInputs('codparaf',text)}}/>
        </View>
    </ScrollView>
}

const styles = StyleSheet.create({
    container:{
        height:'100%',
        width:'100%',
        paddingBottom:10,
        paddingTop:10,
        backgroundColor:formularBackground,
    },
    sameline:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
    },
    middlealign:{
        justifyContent:'center',
    },
    titlu:{
        fontSize:30,
    },
    deffont:{
        fontSize:20,
    },
    input:{
        height: 30,
    }
})
export default Prescriptie