import React, { useState } from "react"
import { StyleSheet, View, Text } from "react-native"
import { TextInput, TouchableOpacity } from "react-native-gesture-handler"
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import NewText from './NewText.jsx'

const Formular = (EmailPacient) => {//luam mailul pentru a adauga datele la contul corect

    const [ParagrafSelectat, changeParagraf] = useState('')//daca exista paragrafe textul se va afisa
    const [ListaObj, changeLista] = useState([])//o lista cu toate obiectele adaugate dinamic

    const AddText = () => {
        ListaObj.push(NewText())
        changeLista(ListaObj);
    }
    const deleteObj = (toEliminateIndex) => {
        ListaObj.splice(toEliminateIndex, 1);
        changeLista(ListaObj)
    }

    return <View>
        <View style={styles.radpadding}>{/*action buttons(add only text/paragrafe cu titlu/click pentru a selecta paragrafe) */}
            <TouchableOpacity onPress={AddText}><Text>adauga text</Text></TouchableOpacity>
            <TouchableOpacity><Text>adauga paragraf(cu titlu)</Text></TouchableOpacity>
        </View>
        {ParagrafSelectat != '' ? <Text></Text> : ''/*paragraf selectat */}
        <View>{/*contentul formularului*/}
            {console.log(ListaObj)}
            {ListaObj.map((obj, index) => {
                console.log(index,ListaObj)
                return <View>
                    {obj.PrintMethod}
                </View>
            })}
        </View>
    </View>
//
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    radpadding: {
        marginTop: 50
    }
})



export default Formular