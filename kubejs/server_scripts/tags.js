//priority: 1

let spawnEggs = [
    'minecraft:bee_spawn_egg',
    'minecraft:blaze_spawn_egg',
    'minecraft:chicken_spawn_egg',
    'minecraft:cow_spawn_egg',
    'minecraft:creeper_spawn_egg',
    'minecraft:enderman_spawn_egg',
    'minecraft:evoker_spawn_egg',
    'minecraft:iron_golem_spawn_egg',
    'minecraft:piglin_spawn_egg',
    'minecraft:shulker_spawn_egg',
    'minecraft:slime_spawn_egg',
    'minecraft:witch_spawn_egg',
    'minecraft:zombie_villager_spawn_egg',
    'minecraft:zombified_piglin_spawn_egg'
]

ServerEvents.tags('item', (event) => {
    spawnEggs.forEach((item) => {
        event.add('nethercraft:spawn_egg', item)
    })
})