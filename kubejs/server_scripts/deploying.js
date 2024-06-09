//priority: 1

ServerEvents.recipes((event) => {

    event.recipes.createDeploying('ironfurnaces:upgrade_iron', ['minecraft:furnace', 'minecraft:iron_block'])
    event.recipes.createDeploying('ironfurnaces:upgrade_gold', ['ironfurnaces:upgrade_iron', 'minecraft:gold_block'])
    event.recipes.createDeploying('ironfurnaces:upgrade_diamond', ['ironfurnaces:upgrade_gold', 'minecraft:diamond_block'])
    event.recipes.createDeploying('ironfurnaces:upgrade_emerald', ['ironfurnaces:upgrade_diamond', 'minecraft:emerald_block'])
    event.recipes.createDeploying('ironfurnaces:upgrade_obsidian', ['ironfurnaces:upgrade_emerald', 'kubejs:compressed_obsidian'])
    event.recipes.createDeploying('ironfurnaces:upgrade_netherite', ['ironfurnaces:upgrade_obsidian', 'minecraft:netherite_block'])

    event.recipes.createDeploying('minecraft:light', ['minecraft:torch', 'minecraft:torch'])
    event.recipes.createDeploying('kubejs:birthday_cake', ['minecraft:cake', 'minecraft:candle'])
    event.recipes.createDeploying('kubejs:wither_block', ['kubejs:compressed_obsidian', 'minecraft:cobblestone'])
    event.recipes.createDeploying('kubejs:wither_glass', ['kubejs:compressed_obsidian', 'minecraft:glass'])

    event.recipes.createDeploying('functionalstorage:copper_upgrade', ['#minecraft:logs', '#functionalstorage:drawer'])
    event.recipes.createDeploying('functionalstorage:gold_upgrade', ['functionalstorage:copper_upgrade', 'minecraft:gold_block'])
    event.recipes.createDeploying('functionalstorage:diamond_upgrade', ['functionalstorage:gold_upgrade', 'minecraft:diamond_block'])
    event.recipes.createDeploying('functionalstorage:netherite_upgrade', ['functionalstorage:diamond_upgrade', 'minecraft:netherite_block'])
    event.recipes.createDeploying('functionalstorage:controller_extension', ['functionalstorage:collector_upgrade', 'functionalstorage:storage_controller'])
    event.recipes.createDeploying('functionalstorage:fluid_1', ['#functionalstorage:drawer', 'minecraft:bucket'])
    event.recipes.createDeploying('functionalstorage:fluid_2', ['functionalstorage:fluid_1', 'create:fluid_tank'])
    event.recipes.createDeploying('functionalstorage:fluid_4', ['functionalstorage:fluid_4', 'functionalstorage:fluid_2'])

    event.recipes.createDeploying('functionalstorage:oak_4', ['functionalstorage:oak_2', 'functionalstorage:oak_2'])
    event.recipes.createDeploying('functionalstorage:spruce_4', ['functionalstorage:spruce_2', 'functionalstorage:spruce_2'])
    event.recipes.createDeploying('functionalstorage:birch_4', ['functionalstorage:birch_2', 'functionalstorage:birch_2'])
    event.recipes.createDeploying('functionalstorage:jungle_4', ['functionalstorage:jungle_2', 'functionalstorage:jungle_2'])
    event.recipes.createDeploying('functionalstorage:acacia_4', ['functionalstorage:acacia_2', 'functionalstorage:acacia_2'])
    event.recipes.createDeploying('functionalstorage:dark_oak_4', ['functionalstorage:dark_oak_2', 'functionalstorage:dark_oak_2'])
    event.recipes.createDeploying('functionalstorage:crimson_4', ['functionalstorage:crimson_2', 'functionalstorage:crimson_2'])
    event.recipes.createDeploying('functionalstorage:warped_4', ['functionalstorage:warped_2', 'functionalstorage:warped_2'])
    event.recipes.createDeploying('functionalstorage:mangrove_4', ['functionalstorage:mangrove_2', 'functionalstorage:mangrove_2'])
    event.recipes.createDeploying('functionalstorage:cherry_4', ['functionalstorage:cherry_2', 'functionalstorage:cherry_2'])

    event.recipes.createDeploying('travelersbackpack:iron_tier_upgrade', ['travelersbackpack:blank_upgrade', 'minecraft:iron_block'])
    event.recipes.createDeploying('travelersbackpack:gold_tier_upgrade', ['travelersbackpack:iron_tier_upgrade', 'minecraft:gold_block'])
    event.recipes.createDeploying('travelersbackpack:diamond_tier_upgrade', ['travelersbackpack:gold_tier_upgrade', 'minecraft:diamond_block'])
    event.recipes.createDeploying('travelersbackpack:netherite_tier_upgrade', ['travelersbackpack:diamond_tier_upgrade', 'minecraft:netherite_block'])
    event.recipes.createDeploying('travelersbackpack:crafting_upgrade', ['travelersbackpack:blank_upgrade', 'minecraft:crafting_table'])

})