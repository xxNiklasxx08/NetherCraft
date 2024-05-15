//priority: 0

LevelEvents.loaded((event) => {
    event.server.runCommandSilent('gamerule doFireTick false')
    event.server.runCommandSilent('gamerule commandBlockOutput false')
    event.server.runCommandSilent('gamerule lavaSourceConversion true')
})