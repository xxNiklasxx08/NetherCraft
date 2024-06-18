//priority: 10

let remove = [
    'functionalstorage:storage_controller',
    'functionalstorage:compacting_drawer',
    'functionalstorage:copper_upgrade',
    'functionalstorage:gold_upgrade',
    'functionalstorage:diamond_upgrade',
    'functionalstorage:netherite_upgrade',
    'functionalstorage:controller_extension',
    'functionalstorage:simple_compacting_drawer',
    'functionalstorage:framed_simple_compacting_drawer',
    'functionalstorage:framed_controller_extension',
    'functionalstorage:framed_4',
    'functionalstorage:framed_storage_controller',
    'functionalstorage:compacting_framed_drawer',
    'functionalstorage:framed_2',
    'functionalstorage:framed_1',
    'functionalstorage:ender_drawer',
    'functionalstorage:armory_cabinet',
    'functionalstorage:fluid_1',
    'functionalstorage:fluid_2',
    'functionalstorage:fluid_4',
    'functionalstorage:oak_1',
    'functionalstorage:spruce_1',
    'functionalstorage:birch_1',
    'functionalstorage:jungle_1',
    'functionalstorage:acacia_1',
    'functionalstorage:dark_oak_1',
    'functionalstorage:crimson_1',
    'functionalstorage:warped_1',
    'functionalstorage:mangrove_1',
    'functionalstorage:cherry_1',
    'functionalstorage:oak_2',
    'functionalstorage:spruce_2',
    'functionalstorage:birch_2',
    'functionalstorage:jungle_2',
    'functionalstorage:acacia_2',
    'functionalstorage:dark_oak_2',
    'functionalstorage:crimson_2',
    'functionalstorage:warped_2',
    'functionalstorage:mangrove_2',
    'functionalstorage:cherry_2',
    'functionalstorage:oak_4',
    'functionalstorage:spruce_4',
    'functionalstorage:birch_4',
    'functionalstorage:jungle_4',
    'functionalstorage:acacia_4',
    'functionalstorage:dark_oak_4',
    'functionalstorage:crimson_4',
    'functionalstorage:warped_4',
    'functionalstorage:mangrove_4',
    'functionalstorage:cherry_4',
    'create:mechanical_crafter',
    'create:item_vault',
    'create:blaze_cake_base',
    'create:basin',
    'create:electron_tube',
    'create:empty_blaze_burner',
    'create:steam_engine',
    'create:rose_quartz',
    'farmersdelight:hamburger',
    'farmersdelight:chicken_sandwich',
    'farmersdelight:egg_sandwich',
    'farmersdelight:bacon_sandwich',
    'farmersdelight:kelp_roll',
    'farmersdelight:fried_rice',
    'farmersdelight:milk_bottle',
    'farmersdelight:roasted_mutton_chops',
    'vegandelight:salt',
    'create_bic_bit:raw_fries',
    'create_bic_bit:fries',
    'create_bic_bit:mechanical_fryer',
    'ironfurnaces:iron_furnace',
    'ironfurnaces:gold_furnace',
    'ironfurnaces:diamond_furnace',
    'ironfurnaces:emerald_furnace',
    'ironfurnaces:obsidian_furnace',
    'ironfurnaces:crystal_furnace',
    'ironfurnaces:netherite_furnace',
    'ironfurnaces:copper_furnace',
    'ironfurnaces:silver_furnace',
    'ironfurnaces:rainbow_core',
    'ironfurnaces:rainbow_plating',
    'ironfurnaces:million_furnace',
    'ironfurnaces:rainbow_coal',
    'ironfurnaces:upgrade_iron',
    'ironfurnaces:upgrade_gold',
    'ironfurnaces:upgrade_diamond',
    'ironfurnaces:upgrade_emerald',
    'ironfurnaces:upgrade_obsidian',
    'ironfurnaces:upgrade_crystal',
    'ironfurnaces:upgrade_netherite',
    'ironfurnaces:upgrade_copper',
    'ironfurnaces:upgrade_silver',
    'ironfurnaces:upgrade_obsidian2',
    'ironfurnaces:upgrade_iron2',
    'ironfurnaces:upgrade_gold2',
    'ironfurnaces:upgrade_silver2',
    'gravestone:gravestone',
    'travelersbackpack:hose',
    'travelersbackpack:hose_nozzle',
    'travelersbackpack:backpack_tank',
    'travelersbackpack:white_sleeping_bag',
    'travelersbackpack:orange_sleeping_bag',
    'travelersbackpack:magenta_sleeping_bag',
    'travelersbackpack:light_blue_sleeping_bag',
    'travelersbackpack:yellow_sleeping_bag',
    'travelersbackpack:lime_sleeping_bag',
    'travelersbackpack:pink_sleeping_bag',
    'travelersbackpack:gray_sleeping_bag',
    'travelersbackpack:light_gray_sleeping_bag',
    'travelersbackpack:cyan_sleeping_bag',
    'travelersbackpack:purple_sleeping_bag',
    'travelersbackpack:blue_sleeping_bag',
    'travelersbackpack:brown_sleeping_bag',
    'travelersbackpack:green_sleeping_bag',
    'travelersbackpack:red_sleeping_bag',
    'travelersbackpack:black_sleeping_bag',
    'travelersbackpack:blank_upgrade',
    'travelersbackpack:iron_tier_upgrade',
    'travelersbackpack:gold_tier_upgrade',
    'travelersbackpack:diamond_tier_upgrade',
    'travelersbackpack:netherite_tier_upgrade',
    'travelersbackpack:crafting_upgrade',
    'travelersbackpack:snow',,
    'travelersbackpack:standard',
    'minecraft:snow_block',
    'minecraft:infested_deepslate',
    'tetra:holo'
]

let id = [
    'create_bic_bit:mixing/curdled_milk',
    'create_bic_bit:deep_frying/ice_recipe',
    'travelersbackpack:standard_from_custom',
    'travelersbackpack:standard_smithing',
    'create:mixing/lava_from_cobble',
    'vegandelight:compacting/agave_from_compacting'
]

ServerEvents.recipes((event) => {
    remove.forEach((item) => event.remove({ output: item }))
    id.forEach((item) => event.remove({ id: item }))
})