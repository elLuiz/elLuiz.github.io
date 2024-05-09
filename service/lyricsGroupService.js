function createStropheGroups(lyrics) {
    if (isNotEmpty(lyrics)) {
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
        console.log(groups)
        return groupsMap
    }
    return new Map()
}