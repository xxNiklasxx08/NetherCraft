//priority: 1

ServerEvents.recipes((event) => {

    event.shaped('9x create:mechanical_crafter',
        ['XYX', 'YZY', 'XYX'], {
            X: 'create:electron_tube',
            Y: 'create:brass_casing',
            Z: 'minecraft:crafting_table'
        }
    )

    event.shaped('create:basin',
        ['   ', 'X X', 'XXX'], {
            X: 'create:iron_sheet'
        }
    )

    event.shaped('kubejs:compressed_obsidian',
        ['XXX', 'XXX', 'XXX'], {
            X: 'minecraft:obsidian'
        }
    )
    
    event.shaped('create:empty_blaze_burner',
        ['   ', 'XXX', 'YYY'], {
            X: 'minecraft:iron_bars',
            Y: 'create:iron_sheet'
        }
    )

    event.shaped('create_bic_bit:mechanical_fryer',
        [' X ', 'YZY', ' A '],  {
            A: 'create_bic_bit:andesite_basket',
            X: 'create:shaft',
            Y: 'create:copper_casing',
            Z: 'create:whisk'
        }
    )

    event.shaped('travelersbackpack:backpack_tank', 
        ['XYX', 'Z Z', 'XYX'], {
            X: '#forge:glass/colorless',
            Y: 'create:fluid_tank',
            Z: 'minecraft:iron_ingot'
        }
    )

    event.shaped('travelersbackpack:blank_upgrade',
        ['XXX', 'ZYZ', 'XXX'], {
            X: '#minecraft:logs',
            Y: '#functionalstorage:drawer',
            Z: 'travelersbackpack:backpack_tank'
        }
    )

    event.shaped('travelersbackpack:snow',
        ['XXX', 'YZY', 'AYA'], {
            X: 'minecraft:ice',
            Y: 'minecraft:snow_block',
            A: 'minecraft:powder_snow_bucket'
        }
    )

    // Drawer

    event.shaped('functionalstorage:oak_1',
        ['XXX', 'XYX', 'XXX'], {
            X: 'minecraft:oak_planks',
            Y: 'minecraft:chest'
        }
    )

    event.shaped('functionalstorage:spruce_1',
        ['XXX', 'XYX', 'XXX'], {
            X: 'minecraft:spruce_planks',
            Y: 'minecraft:chest'
        }
    )

    event.shaped('functionalstorage:birch_1',
        ['XXX', 'XYX', 'XXX'], {
            X: 'minecraft:birch_planks',
            Y: 'minecraft:chest'
        }
    )

    event.shaped('functionalstorage:jungle_1',
        ['XXX', 'XYX', 'XXX'], {
            X: 'minecraft:jungle_planks',
            Y: 'minecraft:chest'
        }
    )

    event.shaped('functionalstorage:acacia_1',
        ['XXX', 'XYX', 'XXX'], {
            X: 'minecraft:acacia_planks',
            Y: 'minecraft:chest'
        }
    )

    event.shaped('functionalstorage:dark_oak_1',
        ['XXX', 'XYX', 'XXX'], {
            X: 'minecraft:dark_oak_planks',
            Y: 'minecraft:chest'
        }
    )

    event.shaped('functionalstorage:crimson_1',
        ['XXX', 'XYX', 'XXX'], {
            X: 'minecraft:crimson_planks',
            Y: 'minecraft:chest'
        }
    )

    event.shaped('functionalstorage:warped_1',
        ['XXX', 'XYX', 'XXX'], {
            X: 'minecraft:warped_planks',
            Y: 'minecraft:chest'
        }
    )

    event.shaped('functionalstorage:mangrove_1',
        ['XXX', 'XYX', 'XXX'], {
            X: 'minecraft:mangrove_planks',
            Y: 'minecraft:chest'
        }
    )

    event.shaped('functionalstorage:cherry_1',
        ['XXX', 'XYX', 'XXX'], {
            X: 'minecraft:cherry_planks',
            Y: 'minecraft:chest'
        }
    )

    event.shaped('functionalstorage:oak_2',
        ['XXX', 'XYX', 'XXX'], {
            X: 'minecraft:oak_planks',
            Y: 'functionalstorage:oak_1'
        }
    )

    event.shaped('functionalstorage:spruce_2',
        ['XXX', 'XYX', 'XXX'], {
            X: 'minecraft:spruce_planks',
            Y: 'functionalstorage:spruce_1'
        }
    )

    event.shaped('functionalstorage:birch_2',
        ['XXX', 'XYX', 'XXX'], {
            X: 'minecraft:birch_planks',
            Y: 'functionalstorage:birch_1'
        }
    )

    event.shaped('functionalstorage:jungle_2',
        ['XXX', 'XYX', 'XXX'], {
            X: 'minecraft:jungle_planks',
            Y: 'functionalstorage:jungle_1'
        }
    )

    event.shaped('functionalstorage:acacia_2',
        ['XXX', 'XYX', 'XXX'], {
            X: 'minecraft:acacia_planks',
            Y: 'functionalstorage:acacia_1'
        }
    )

    event.shaped('functionalstorage:dark_oak_2',
        ['XXX', 'XYX', 'XXX'], {
            X: 'minecraft:dark_oak_planks',
            Y: 'functionalstorage:dark_oak_1'
        }
    )

    event.shaped('functionalstorage:crimson_2',
        ['XXX', 'XYX', 'XXX'], {
            X: 'minecraft:crimson_planks',
            Y: 'functionalstorage:crimson_1'
        }
    )

    event.shaped('functionalstorage:warped_2',
        ['XXX', 'XYX', 'XXX'], {
            X: 'minecraft:warped_planks',
            Y: 'functionalstorage:warped_1'
        }
    )

    event.shaped('functionalstorage:mangrove_2',
        ['XXX', 'XYX', 'XXX'], {
            X: 'minecraft:mangrove_planks',
            Y: 'functionalstorage:mangrove_1'
        }
    )

    event.shaped('functionalstorage:cherry_2',
        ['XXX', 'XYX', 'XXX'], {
            X: 'minecraft:cherry_planks',
            Y: 'functionalstorage:cherry_1'
        }
    )

})