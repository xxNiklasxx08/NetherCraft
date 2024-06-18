//priority: 1

ServerEvents.recipes((event) => {
    
    event.recipes.createCompacting('create:blaze_cake_base', [
        'minecraft:paper',
        'create:iron_sheet'
    ])

    event.recipes.createCompacting('create:electron_tube', [
        'create:iron_sheet',
        'create:polished_rose_quartz'
    ])

    event.recipes.createCompacting('minecraft:diamond', 'minecraft:coal_block').heated()

})