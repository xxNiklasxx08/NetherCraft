//priority: 1

ServerEvents.recipes((event) => {

    event.smoking('minecraft:oak_planks', 'minecraft:birch_planks')
    event.smoking('minecraft:spruce_planks', 'minecraft:oak_planks')
    event.smoking('minecraft:dark_oak_planks', 'minecraft:spruce_planks')
    event.smoking('minecraft:acacia_planks', 'minecraft:jungle_planks')
    event.smoking('minecraft:mangrove_planks', 'minecraft:cherry_planks')
    event.smoking('minecraft:crimson_planks', 'minecraft:mangrove_planks')

})