//priority: 1

ServerEvents.recipes((event) => {

    event.shaped('9x create:mechanical_crafter',
    ['XYX', 'YZY', 'XYX'], {
        X: 'create:electron_tube',
        Y: 'create:brass_casing',
        Z: 'minecraft:crafting_table'
    })

    event.shaped('create:basin',
    ['   ', 'X X', 'XXX'], {
        X: 'create:iron_sheet'
    })

    event.shaped('kubejs:compressed_obsidian',
    ['XXX', 'XXX', 'XXX'], {
        X: 'minecraft:obsidian'
    })
    
    event.shaped('create:empty_blaze_burner',
    ['   ', 'XXX', 'YYY'], {
        X: 'minecraft:iron_bars',
        Y: 'create:iron_sheet'
    })

    event.shaped('create_bic_bit:mechanical_fryer',
    [' X ', 'YZY', ' A '],  {
        A: 'create_bic_bit:andesite_basket',
        X: 'create:shaft',
        Y: 'create:copper_casing',
        Z: 'create:whisk'
    })

})