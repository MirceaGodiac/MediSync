import storage from '@react-native-firebase/storage';
import GeneratePDF from "./PDFgenerator"
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

//
//acest fisier salveaza in storage datele de la inputs 
//de asemenea se ocupa si de post-submit functions
//

const HandleSaveDataAndOther = async ({ inputs, titlu, PrescriptionOrForm, email }: any) => {
    //salveaza datele din input intrun fisier json pentru a fi pus in istoric

    //type FORML{num} - formular
    //type PRESC{num} - prescriptie cu referinta la numarul formularului 
    //creeam pentru fiecare nou formular un subdirectory la ISTORICDATA
    //un folder are un singur formular dar are mai multe prescriptii(sau 0)
    
    const pathFORMLS = `${email}/ISTORICDATA/FORMLS`
    const pathPRESCS = `${email}/ISTORICDATA/PRESCS`
    
    const numFormulare = storage.ref(pathFORMLS).listAll.then(
        (result: any) => { return result.items.lenght }
    )

    //
    //const nav = useNavigation<NativeStackNavigationProp<any>>();
    console.log(inputs, titlu, PrescriptionOrForm, email)

    if (PrescriptionOrForm === 0) {
        GeneratePDF({ inputs, titlu });
        //daca este un formular
    }
    else {
        //daca este o reteta seteaza un interval in care user-ul sa primeasca
        //notificare pentru a le lua
        //du l pe user la un stack frame separat pentru a introduce intervalul
        //nav.replace("IntervalNotifSetter",email)
    }
}

export default HandleSaveDataAndOther