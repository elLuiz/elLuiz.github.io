function visualizeStrophes() {
    const lyrics = document.getElementById("lyrics").value
    if (lyrics && lyrics.length > 0) {
        const parentNode = document.getElementById("strophes")
        strophes = createStropheGroups(lyrics)
        strophes.forEach((value, key) => {
            console.log(value)
            const divParagraph = document.createElement("div")
            divParagraph.id = key
            const paragraph = document.createElement("p")
            value.split(/\n/).forEach(verse => {
                const strophe = document.createTextNode(verse)
                paragraph.appendChild(strophe)
                paragraph.appendChild(document.createElement("br"))
            })
            divParagraph.appendChild(paragraph)
            parentNode.appendChild(divParagraph)
        })
        const panel = document.getElementById("strophes-panel")
        panel.style.display = "flex"
    }
}