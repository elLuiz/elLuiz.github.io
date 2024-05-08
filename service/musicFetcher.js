async function fetchLyric(lyricsURL) {
    try {
        console.log(window.location.search)
        var url = "http://https://quinta-lyrics-ws.onrender.com/api/v1/lyrics?src=" + lyricsURL
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept-Language": "pt-BR",
                "Accept": "application/json"
            }
        })
        const body = await response.json()
        fillLyricsContentDiv(body)
    } catch(error) {
        console.log("Error: ", error)
    }
}

function fillLyricsContentDiv(response) {
    const div = document.getElementById("lyrics")
    div.innerHTML = response?.content
}