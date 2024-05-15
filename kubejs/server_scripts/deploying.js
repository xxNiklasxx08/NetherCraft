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

    let template = 'storagedrawers:upgrade_template'
    event.recipes.createDeploying('storagedrawers:upgrade_template', ['#minecraft:logs', '#storagedrawers:drawers'])
    event.recipes.createDeploying('storagedrawers:obsidian_storage_upgrade', [template, '#forge:obsidian'])
    event.recipes.createDeploying('storagedrawers:iron_storage_upgrade', [template, 'minecraft:iron_ingot'])
    event.recipes.createDeploying('storagedrawers:gold_storage_upgrade', [template, 'minecraft:gold_ingot'])
    event.recipes.createDeploying('storagedrawers:diamond_storage_upgrade', [template, 'minecraft:diamond'])
    event.recipes.createDeploying('storagedrawers:emerald_storage_upgrade', [template, 'minecraft:emerald'])
    event.recipes.createDeploying('storagedrawers:controller_slave', ['minecraft:comparator', 'storagedrawers:controller'])

})