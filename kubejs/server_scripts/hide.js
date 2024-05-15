//priority: 0

let hide = [
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
    'ironfurnaces:upgrade_crystal',
    'ironfurnaces:upgrade_copper',
    'ironfurnaces:upgrade_silver',
    'ironfurnaces:upgrade_obsidian2',
    'ironfurnaces:upgrade_iron2',
    'ironfurnaces:upgrade_gold2',
    'ironfurnaces:upgrade_silver2',
    'create:handheld_worldshaper',
    'create:creative_motor',
    'create:creative_fluid_tank',
    'create:creative_crate',
    'create:creative_blaze_cake',
    'storagedrawers:creative_storage_upgrade',
    'storagedrawers:creative_vending_upgrade'
]

ServerEvents.tags('item', (event) => {
    hide.forEach((item) => {
        event.add('c:hidden_from_recipe_viewers', item)
    })
})