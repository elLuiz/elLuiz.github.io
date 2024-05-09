function visualizeStrophes() {
    const lyrics = document.getElementById("lyrics").value
    if (isNotEmpty(lyrics)) {
        const parentNode = document.getElementById("strophes")
        parentNode.replaceChildren()
        strophes = createStropheGroups(lyrics)
        createStrophesAsParagraphs(parentNode)
        const panel = document.getElementById("strophes-panel")
        panel.style.display = "flex"
    }

    function createStrophesAsParagraphs(parentNode) {
        strophes.forEach((value, key) => {
            const divParagraph = document.createElement("div")
            divParagraph.id = key
            divParagraph.className="strophe"
            divParagraph.appendChild(addHeader(key))
            const paragraph = document.createElement("p")
            value.split(/\n/).forEach(verse => {
                const strophe = document.createTextNode(verse)
                paragraph.appendChild(strophe)
                paragraph.appendChild(document.createElement("br"))
            })
            divParagraph.appendChild(paragraph)
            divParagraph.appendChild(addFooter(key))
            parentNode.appendChild(divParagraph)
        })

        function addHeader(key) {
            const stropheHeader = document.createElement("div")
            stropheHeader.className = "strophe-header"
            const header = document.createElement("h6")
            header.appendChild(document.createTextNode(`Estrofe ${key}`))
            stropheHeader.appendChild(header)
            return stropheHeader
        }

        function addFooter(key) {
            const stropheFooter = document.createElement("div")
            stropheFooter.className = "strophe-footer"
            const action = document.createElement("button")
            action.addEventListener("click", () => addStrophe(key))
            action.className = "add-strophe"
            action.innerHTML = "<i class='fa-solid fa-music'></i> Adicionar estrofe"
            stropheFooter.appendChild(action)
            return stropheFooter
        }
    }
}