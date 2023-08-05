function startConversion() {
    const lyrics = document.getElementById("lyrics").value;
    const convertedLyricsTextArea = document.getElementById("lyrics-converted");
    if(!isEmpty(lyrics)) {
        const converted = convert(lyrics);
        convertedLyricsTextArea.value = converted;
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
    navigator.clipboard.writeText(text.value);
    window.alert("Letra copiada com sucesso!");
}