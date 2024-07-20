import * as Print from 'expo-print';
import * as Sharing from 'expo-sharing';
import GenerateTextInputString from './Html_string_to_pdf/GenerateTextInputstring';
import GenerateParagrafString from './Html_string_to_pdf/GenerateParagrafString';
import GenerateBooleanString from './Html_string_to_pdf/GenerateBooleanString';
    ///text structure: {id:code,value:string}
    ///paragraf structure: {id:code,masterText,value:[]}
    ///boolean structure: {id:code,valuebool:boolean,valuetext:string}

const GeneratePDF = async ( data:any ) => {
    let html:string = '<html><h1 style="font:50;text-align:center;">Document medical</h1><div>';
    let lastcode:string = "0";
    data.map((textobj:any) => {
        /*if(lastcode!=="3" || textobj.id[0]!=="3")
            html = html.concat('<hr>')*/
        if (textobj.id[0] === "1") {
            html = html.concat(GenerateTextInputString(textobj))
        }
        else if (textobj.id[0] === "2") {
            html = html.concat(GenerateParagrafString(textobj))
        }
        else {
            html = html.concat(GenerateBooleanString(textobj))
        }
        
        lastcode=textobj.id[0];
    })
    html = html.concat("</div></html")
    const { uri } = await Print.printToFileAsync({ html: html, base64: false });
    await Sharing.shareAsync(uri);
}

export default GeneratePDF