const GenerateParagrafString = (dataobj:any) => {
    const { id, masterText, value } = dataobj
    let StringToReturn = `<h1 style="font-family: "Times New Roman", Times, serif;">${masterText}</h1><div style="border:2px solid;;padding-left:10px"><ul style="list-style-type:none;padding:5px">`
    value.map((Textobj:any) => {
        const { id, value } = Textobj
        StringToReturn = StringToReturn.concat(`<li style="font-family: "Times New Roman", Times, serif;">${value}</li>`)
    })
    StringToReturn = StringToReturn.concat("</ul></div>")
    return StringToReturn
}

export default GenerateParagrafString