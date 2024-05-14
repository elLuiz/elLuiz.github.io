function createStropheGroups(lyrics) {
    if (isNotEmpty(lyrics)) {
        var groups = new Set(lyrics.split(/\n{2}/gm).map(strophe => strophe.trim()))
        const groupsMap = new Map()
        let groupId = 1
        groups.forEach(strophe => {
            if (!strophe.match(/\d+/) && strophe.trim().length > 0) {
                groupsMap.set(groupId, strophe)
                groupId++
            }
        })
        return groupsMap
    }
    return new Map()
}