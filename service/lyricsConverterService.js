function convert(lyrics) {
    let onlyAllowedCharacters = removeUnwantedCharactersFromLyrics(lyrics);
    return separateLines(onlyAllowedCharacters);
}

function removeUnwantedCharactersFromLyrics(lyrics) {
    const regex = /^[^A-zÀ-ú?(]|[^A-zÀ-ú?)\s]+$/gm;
    return lyrics.replace(regex, "");
}

function separateLines(lyrics) {
    const regex = /\n/g;
    return lyrics.replace(regex, "\n\n")
}