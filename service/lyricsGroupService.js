function createStropheGroups(lyrics) {
    if (lyrics && lyrics.length > 0) {
        var groups = lyrics.split(/\n{2}/gm)
        const groupsMap = new Map()
        let groupId = 1
        groups.forEach(strophe => {
            strophe = strophe.trim()
            if (!strophe.match(/\d+/) && strophe.trim().length > 0) {
                groupsMap.set(groupId, strophe)
                groupId++
            }
        })
        return groupsMap
    }
    return new Map()
}