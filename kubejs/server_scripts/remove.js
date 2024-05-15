//priority: 10

let remove = [
    'storagedrawers:controller',
    'storagedrawers:compacting_drawers_3',
    'storagedrawers:upgrade_template',
    'storagedrawers:controller_slave',
    'storagedrawers:obsidian_storage_upgrade',
    'storagedrawers:iron_storage_upgrade',
    'storagedrawers:gold_storage_upgrade',
    'storagedrawers:diamond_storage_upgrade',
    'storagedrawers:emerald_storage_upgrade',
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
]

let id = [
    'create_bic_bit:mixing/curdled_milk'
]

ServerEvents.recipes((event) => {
    remove.forEach((item) => event.remove({ output: item }))
    id.forEach((item) => event.remove({ id: item }))
})