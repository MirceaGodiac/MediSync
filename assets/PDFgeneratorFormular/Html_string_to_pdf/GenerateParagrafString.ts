const GenerateParagrafString = (dataobj:any) => {
    const { id, masterText, value } = dataobj
    let StringToReturn = `<h1 style="font-family: "Times New Roman", Times, serif;">${masterText}:</h1><div style="padding-left:50px"><ul style="list-style-type:none">`
    value.map((Textobj:any) => {
        const { id, value } = Textobj
        StringToReturn = StringToReturn.concat(`<li style="font-family: "Times New Roman", Times, serif"><h2>- ${value}</h2></li>`)
    })
    StringToReturn = StringToReturn.concat("</ul></div>")
    return StringToReturn
}

export default GenerateParagrafString