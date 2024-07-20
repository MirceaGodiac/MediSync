const GenerateTextInputString = (dataobj:any) =>{
    const {id,value} = dataobj
    return `<h3 style="font-family: "Times New Roman", Times, serif;;padding-left:10px">${value}</h3>`
}

export default GenerateTextInputString