//priority: 1

ServerEvents.recipes((event) => {

    event.recipes.createCutting('create_bic_bit:raw_fries', 'minecraft:potato').processingTime(100)
    
    event.recipes.createCutting('gravestone:gravestone', 'minecraft:cobblestone').processingTime(500)

})