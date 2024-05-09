function format() {
    const lyrics = getLyricsComponent().value;
    if(isNotEmpty(lyrics)) {
        const converted = convert(lyrics);
        displayModal(converted)
    } else {
        window.alert("Por favor, preencha o primeiro box")
    }
}

function getLyricsComponent() {
    return document.getElementById("lyrics");
}

function displayModal(lyrics) {
    const convertedLyricsTextArea = document.getElementById("transformed-lyrics-body");
    clearModal()
    appendLyrics()
  
    function clearModal() {
        convertedLyricsTextArea.replaceChildren()
    }

    function appendLyrics() {
        appendParagraphs(convertedLyricsTextArea, lyrics)
        displayCopyToClipboardButton()
        var modal = document.getElementById("modal");
        modal.style.display = "block";
    }
}

function appendParagraphs(parentComponent, lyrics) {
    lyrics.split("\n").forEach(verse => {
        if (isNotEmpty(verse)) {
            const paragraph = document.createElement("p")
            paragraph.textContent = verse
            parentComponent.appendChild(paragraph)
        }
    })
}

function displayCopyToClipboardButton() {
    const copyToClipboard = document.getElementById("copy-to-clipboard");
    copyToClipboard.style.display='flex';
}

function copyToClipboard() {
    const body = document.getElementById("transformed-lyrics-body");
    var text;
    body.childNodes.forEach(node => {
        let content = node.textContent.trim()
        if (isNotEmpty(content)) {
            if (text) {
                text += content + "\n\n"
            } else {
                text = content + "\n\n"
            }
        }
    })
    navigator.clipboard.writeText(text.trim())
        .then(() => {
            window.alert("Letra copiada com sucesso!");
        })
        .catch(() => {
            window.alert("Algo deu errado ao copiar a letra da música! Por favor, tente novamente.")
        })
}

function addStrophe(stropheNumber) {
    const lyricsTextArea = getLyricsComponent()
    if (lyricsTextArea) {
        let lyrics = lyricsTextArea.value;
        if (isNotEmpty(lyrics)) {
            lyrics = lyrics.trim() + "\n\n" + stropheNumber
            lyricsTextArea.value = lyrics
        }
    }
}

function manageContentVisibility() {
    const lyrics = getLyricsComponent().value
    checkButtonsVisibility()
    checkStrophesContent()
    
    function checkButtonsVisibility() {
        const buttons = document.getElementsByClassName("dependent-on-input");
        console.log(buttons);
        if (isNotEmpty(lyrics)) {
            Array.prototype.forEach.call(buttons, btn => {
                btn.style.cursor = 'pointer'
            });
        } else {
            Array.prototype.forEach.call(buttons, btn => {
                btn.style.cursor = 'not-allowed'
            });
        }
    }

    function checkStrophesContent() {
        if (isEmpty(lyrics)) {
            const strophesContent = document.getElementById("strophes")
            strophesContent.replaceChildren()
        }
    }
}