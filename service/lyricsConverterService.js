function convert(lyrics) {
    let converted = removeUnwantedCharactersFromLyrics(lyrics)
    converted = removeCommaAtTheEnd(converted)
    converted = toUpperCase(converted)
    converted = replaceStrophes(converted)
    return separateLines(converted)
}

function convertAndMaintainStrophes(lyrics) {
    let converted = removeUnwantedCharactersFromLyrics(lyrics)
    converted = removeCommaAtTheEnd(converted)
    converted = toUpperCase(converted)
    return replaceStrophes(converted)
}

function removeUnwantedCharactersFromLyrics(lyrics) {
    const regex = /^[^A-zÀ-ú?()\s\d]|[^A-zÀ-ú?()\s\d]+$/gm
    return lyrics.replace(regex, "")
}

function removeCommaAtTheEnd(lyrics) {
    return lyrics.replace(/,$/, "")
}

function toUpperCase(lyrics) {
    return lyrics.toUpperCase()
}

function replaceStrophes(lyrics) {
    let groupsMap = createStropheGroups(lyrics)
    groupsMap.forEach((value, key) => {
        const rgex = new RegExp("^" + key + "$", "gm")
        lyrics = lyrics.replace(rgex, value)
    })
    return lyrics;
}

function separateLines(lyrics) {
    return lyrics.split(/\n/)
        .filter(verse => verse.trim().length > 0)
        .join("\n\n")
}
