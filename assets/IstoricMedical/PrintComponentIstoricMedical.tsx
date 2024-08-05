import React,{ useState } from "react"
import { View,Text,StyleSheet } from "react-native"
import { ScrollView } from "react-native-gesture-handler"

const PrintComponentIstoricMedical = ({DataToPrint}:any) => {
    const {inputs,h,w} = DataToPrint

    const PrintText = (val:any) =>{
        return <Text>val</Text>
    }
    const PrintParagraf = ({masterText,value}:any) => {
        return <View>
            <Text>{masterText}</Text>
            {value.map((textobj:any)=>{
                return <Text>{textobj.value}</Text>
            })}
        </View>
    }

    const PrintBoolean = ({valuebool,valuetext}:any) => {
        return <View>
            <Text>{valuetext}</Text>
            <Text>{valuebool==1?'DA':'NU'}</Text>
        </View>
    }

    return <ScrollView style={{width:w,height:h}}>
        {inputs.map((obj:any)=>{
            if(obj.id[0]==1)
                return <PrintText prop={obj.value}/>
            else if(obj.id[0]==2)
                return <PrintParagraf prop={{"masterText":obj.masterText,"value":obj.value}}/>
            return <PrintBoolean prop={{"valuebool":obj.valuebool,"valuetext":obj.valuetext}}/>
        })}
    </ScrollView>
}

const styles = StyleSheet.create({

})

export default PrintComponentIstoricMedical