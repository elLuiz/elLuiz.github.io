function format() {
    const lyrics = document.getElementById("lyrics").value;
    if(!isEmpty(lyrics)) {
        const converted = convert(lyrics);
        const convertedLyricsTextArea = document.getElementById("lyrics-converted");
        convertedLyricsTextArea.value = converted;
        convertedLyricsTextArea.className ="lyrics-converted-sucess"
        displayCopyToClipboardButton();
    } else {
        window.alert("Por favor, preencha o primeiro box")
    }
}

function isEmpty(string) {
    return (!string || string.length === 0)
}

function displayCopyToClipboardButton() {
    const copyToClipboard = document.getElementById("copy-to-clipboard");
    copyToClipboard.style.display='flex';
}

function copyToClipboard() {
    const text = document.getElementById("lyrics-converted");
    text.select();
    text.setSelectionRange(0, 99_999);
    navigator.clipboard.writeText(text.value)
        .then(() => {
            window.alert("Letra copiada com sucesso!");
        })
        .catch(() => {
            window.alert("Algo deu errado ao copiar a letra da música! Por favor, tente novamente.")
        })
}