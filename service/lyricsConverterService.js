function convert(lyrics) {
    let converted = removeUnwantedCharactersFromLyrics(lyrics);
    converted = removeCommaAtTheEnd(converted);
    return separateLines(converted);
}

function removeUnwantedCharactersFromLyrics(lyrics) {
    const regex = /^[^A-zÀ-ú?(]|[^A-zÀ-ú?)\s]+$/gm;
    return lyrics.replace(regex, "");
}

function removeCommaAtTheEnd(lyrics) {
    return lyrics.replace(/,$/, "");
}

function separateLines(lyrics) {
    const regex = /\n/g;
    return lyrics.replace(regex, "\n\n");
}
