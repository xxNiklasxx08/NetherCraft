//priority: 0

LevelEvents.loaded((event) => {
    event.server.runCommandSilent('gamerule doFireTick false')
    event.server.runCommandSilent('gamerule commandBlockOutput false')
    event.server.runCommandSilent('gamerule lavaSourceConversion true')
})

LevelEvents.tick((event) => {
    event.server.runCommandSilent('clear @a gravestone:obituary')
    event.server.runCommandSilent('execute as @e[type=minecraft:minecart] if data entity @s {Passengers:[{Contraption:{Blocks:{Palette:[{Name:"minecraft:spawner"}]}}}]} run kill @s')
    event.server.runCommandSilent('kill @e[type=minecraft:item,nbt={Item:{id:"minecraft:snowball"}}]')
    event.server.runCommandSilent('execute as @e[type=minecraft:snowball] at @s unless block ~ ~ ~ minecraft:air run summon minecraft:tnt ~ ~ ~ {block_state:{Name:"minecraft:air"},fuse:1}')
    event.server.runCommandSilent('execute as @e[type=minecraft:snowball] at @s unless block ~ ~-1 ~ minecraft:air run summon minecraft:tnt ~ ~ ~ {block_state:{Name:"minecraft:air"},fuse:1}')
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