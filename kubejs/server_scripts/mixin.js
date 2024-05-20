//priority: 1

ServerEvents.recipes((event) => {

    event.recipes.createMixing('4x create:brass_ingot', ['2x create:zinc_ingot','2x minecraft:copper_ingot']).superheated()
    
    event.recipes.createMixing('2x create:rose_quartz', ['4x minecraft:redstone', '4x minecraft:quartz']).heated()

    event.recipes.createMixing('4x farmersdelight:milk_bottle', ['minecraft:milk_bucket', '4x minecraft:glass_bottle'])

    event.recipes.createMixing(Fluid.of('create_bic_bit:curdled_milk', 1000), [Fluid.of('minecraft:milk', 1000)]).heated()

    event.recipes.createMixing('2x minecraft:dragon_egg', ['minecraft:dragon_egg', '8x minecraft:obsidian']).superheated()

    event.recipes.createMixing('vegandelight:salt', [Fluid.water(250)]).heated()

})