//priority: 0

LevelEvents.loaded((event) => {
    event.server.runCommandSilent('gamerule doFireTick false')
    event.server.runCommandSilent('gamerule commandBlockOutput false')
    event.server.runCommandSilent('gamerule lavaSourceConversion true')
})

ServerEvents.tags('item', (event) => {
    event.add('creategoggles:goggle', 'kubejs:nether_helmet')
})

PlayerEvents.tick((event) => {
    let { player } = event
    if(player.age % 20 != 0) return
    if((player.headArmorItem == 'kubejs:nether_helmet' && player.chestArmorItem == 'kubejs:nether_chestplate' && player.legsArmorItem == 'kubejs:nether_leggings' && player.feetArmorItem == 'kubejs:nether_boots') || player.isCreative() || player.isSpectator()) {
        player.abilities.mayfly = true
    } else {
        player.abilities.mayfly = false
        player.abilities.flying = false
    }
    player.onUpdateAbilities()
})