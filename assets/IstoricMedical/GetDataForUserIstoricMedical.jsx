import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { View, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import PrintComponentIstoricMedical from './PrintComponentIstoricMedical';

const GetDataForUserIstoricMedical = async () => {

    const rawValue = await AsyncStorage.getItem('ISTORICDATA')
    const Istoric = rawValue === null ? null : JSON.parse(rawValue)

    return <ScrollView>
        <Text>{Istoric.titlu}</Text>
        <View>
            {Object.keys(Istoric).forEach((key) => {
                if(key!='titlu')
                {
                    if(key=='Prescriptie')
                        return <PrintComponentIstoricMedical prop={{inputs:Istoric[key],h:320,w:200}}/>
                    return <PrintComponentIstoricMedical prop={{inputs:Istoric[key],h:80,w:200}}/>

                }
            })}
        </View>
    </ScrollView>
}