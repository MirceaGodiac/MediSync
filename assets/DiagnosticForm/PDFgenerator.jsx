import * as Print from 'expo-print';
import * as Sharing from 'expo-sharing';

const GeneratePDF = async ({data}) =>{
    const html = `<h1> Teste </h1>`;
    const { uri } = await Print.printToFileAsync({ html:html,base64:false });
    Sharing.shareAsync(uri);
}

export default GeneratePDF