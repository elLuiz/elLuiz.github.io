function format() {
    const lyrics = document.getElementById("lyrics").value;
    if(isNotEmpty(lyrics)) {
        const converted = convert(lyrics);
        displayModal(converted)
    } else {
        window.alert("Por favor, preencha o primeiro box")
    }
}

function displayModal(lyrics) {
    const convertedLyricsTextArea = document.getElementById("transformed-lyrics-body");
    appendParagraphs(convertedLyricsTextArea, lyrics)
    displayCopyToClipboardButton()
    var modal = document.getElementById("modal");
    modal.style.display = "block";
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
    const lyricsTextArea = document.getElementById("lyrics")
    if (lyricsTextArea) {
        let lyrics = lyricsTextArea.value;
        if (isNotEmpty(lyrics)) {
            lyrics = lyrics.trim() + "\n\n" + stropheNumber
            lyricsTextArea.value = lyrics
        }
    }
}