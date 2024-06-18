//priority: 1

ServerEvents.recipes((event) => {

    event.recipes.createCrushing('minecraft:tuff', 'minecraft:stone').processingTime(100)
    event.recipes.createCrushing('create:limestone', 'minecraft:tuff').processingTime(100)

})