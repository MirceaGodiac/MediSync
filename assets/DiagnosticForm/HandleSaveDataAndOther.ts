import storage from '@react-native-firebase/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
//
//acest fisier salveaza in storage datele de la inputs 
//de asemenea se ocupa si de post-submit functions
//

const ConvertTimeToString = () =>{
    let currTime = new Date()
    const year = currTime.getFullYear().toString();
    const month = (currTime.getMonth()+1<10?'0'+currTime.getMonth()+1:(currTime.getMonth()+1).toString());
    const day = currTime.getDate()<10?'0'+currTime.getDate():currTime.getDate().toString();

    const hour = currTime.getHours()<10?'0'+currTime.getHours():currTime.getHours().toString();
    const minute = currTime.getMinutes()<10?'0'+currTime.getMinutes():currTime.getMinutes().toString();
    const second = currTime.getSeconds()<10?'0'+currTime.getSeconds():currTime.getSeconds().toString();

    const key = `${day}/${month}/${year} ${hour}:${minute}:${second}`;
    return key
}

const AsyncCall = async ({ inputs, titlu, PrescriptionOrForm, email }: any) => {
    //salveaza datele din input intrun fisier json pentru a fi pus in istoric

    //type FORML{num} - formular
    //type PRESC{num} - prescriptie cu referinta la numarul formularului 
    //creeam pentru fiecare nou formular un subdirectory la ISTORICDATA
    //un folder are un singur formular dar are mai multe prescriptii(sau 0)

    
    console.log(inputs)


    if (PrescriptionOrForm === false) {

        const rawValue = await AsyncStorage.getItem('ISTORICDATA')
        const lastlist:any = rawValue===null?null:JSON.parse(rawValue)

        const keytime = ConvertTimeToString();
        lastlist[keytime] = {titlu:titlu,Prescriptie:inputs};
        await AsyncStorage.setItem('ISTORICDATA',JSON.stringify(lastlist));

        //daca este un formular
    }
    else {
        //daca este o reteta seteaza un interval in care user-ul sa primeasca
        //notificare pentru a le lua
        //du l pe user la un stack frame separat pentru a introduce intervalul
        //nav.replace("IntervalNotifSetter",email)
    }
    
}

const HandleSaveDataAndOther = ({ inputs, titlu, PrescriptionOrForm, email }: any) =>{
    const nav = useNavigation<NativeStackNavigationProp<any>>();
    
    AsyncCall({ inputs, titlu, PrescriptionOrForm, email }) 

    nav.pop()
}

export default HandleSaveDataAndOther