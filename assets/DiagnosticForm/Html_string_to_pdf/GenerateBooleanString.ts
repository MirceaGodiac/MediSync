const GenerateBooleanString = (dataobj:any) =>{
    const {id,valuebool,valuetext} = dataobj
    return `<div style="width:100%">
    <h3 style="display:inline;font-family: "Times New Roman", Times, serif">${valuetext}</h3>
    <h3 style="display:inline;float:right;font-family: "Times New Roman", Times, serif">${valuebool==0?"NU":"DA"}</h3>
    </div>`
}

export default GenerateBooleanString