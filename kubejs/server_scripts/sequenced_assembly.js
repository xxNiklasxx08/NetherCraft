//priority: 1

ServerEvents.recipes((event) => {

    let barrel = 'minecraft:barrel'
    let copper = 'minecraft:copper_block'
    let bread = 'minecraft:bread'
    let kelp = 'minecraft:dried_kelp'

    event.recipes.createSequencedAssembly('create:item_vault', barrel, [
        event.recipes.createDeploying(barrel, [barrel, 'create:iron_sheet'])
    ]).transitionalItem(barrel).loops(2)

    event.recipes.createSequencedAssembly('farmersdelight:hamburger', bread, [
        event.recipes.createDeploying(bread, [bread, ['farmersdelight:beef_patty', 'vegandelight:tofu_patty']]),
        event.recipes.createDeploying(bread, [bread, 'farmersdelight:tomato']),
        event.recipes.createDeploying(bread, [bread, 'farmersdelight:cabbage_leaf']),
        event.recipes.createFilling(bread, [bread, Fluid.of('create_bic_bit:ketchup', 250)]),
        event.recipes.createFilling(bread, [bread, Fluid.of('create_bic_bit:mayonnaise', 250)])
    ]).transitionalItem(bread).loops(1)

    event.recipes.createSequencedAssembly('farmersdelight:chicken_sandwich', bread, [
        event.recipes.createDeploying(bread, [bread, '#forge:cooked_chicken']),
        event.recipes.createDeploying(bread, [bread, 'farmersdelight:cabbage_leaf']),
        event.recipes.createFilling(bread, [bread, Fluid.of('create_bic_bit:mayonnaise', 250)])
    ]).transitionalItem(bread).loops(1)

    event.recipes.createSequencedAssembly('farmersdelight:bacon_sandwich', bread, [
        event.recipes.createDeploying(bread, [bread, 'farmersdelight:cabbage_leaf']),
        event.recipes.createDeploying(bread, [bread, ['vegandelight:cooked_smoked_tofu_slices', 'farmersdelight:cooked_bacon']]),
        event.recipes.createDeploying(bread, [bread, 'farmersdelight:tomato']),
        event.recipes.createFilling(bread, [bread, Fluid.of('create_bic_bit:ketchup', 250)])
    ]).transitionalItem(bread).loops(1)

    event.recipes.createSequencedAssembly('farmersdelight:kelp_roll', kelp, [
        event.recipes.createDeploying(kelp, [kelp, 'farmersdelight:fried_rice']),
        event.recipes.createDeploying(kelp, [kelp, 'farmersdelight:salmon_slice']),
        event.recipes.createDeploying(kelp, [kelp, 'farmersdelight:fried_rice'])
    ]).transitionalItem(kelp).loops(1)

    let bowl = 'minecraft:bowl'
    event.recipes.createSequencedAssembly('farmersdelight:roasted_mutton_chops', bowl, [
        event.recipes.createDeploying(bowl, [bowl, 'minecraft:beetroot']),
        event.recipes.createDeploying(bowl, [bowl, 'farmersdelight:tomato']),
        event.recipes.createDeploying(bowl, [bowl, 'farmersdelight:cooked_rice']),
        event.recipes.createDeploying(bowl, [bowl, ['farmersdelight:cooked_mutton_chops', 'vegandelight:cooked_tofu_slice']]),
        event.recipes.createFilling(bowl, [bowl, Fluid.of('create_bic_bit:frying_oil', 500)]),
        event.recipes.createPressing(bowl, bowl)
    ]).transitionalItem(bowl).loops(1)

    event.recipes.createSequencedAssembly('create:steam_engine', copper, [
        event.recipes.createDeploying(copper, [copper, 'create:golden_sheet']),
        event.recipes.createDeploying(copper, [copper, 'create:shaft']),
        event.recipes.createFilling(copper, [copper, Fluid.water(500)]),
        event.recipes.createDeploying(copper, [copper, 'create:brass_ingot'])
    ]).transitionalItem(copper).loops(1)

    let netherite = 'minecraft:netherite_block'
    event.recipes.createSequencedAssembly('kubejs:nether_helmet', netherite, [
        event.recipes.createDeploying(netherite, [netherite, 'minecraft:netherite_helmet']),
        event.recipes.createDeploying(netherite, [netherite, 'minecraft:nether_star']),
        event.recipes.createFilling(netherite, [netherite, Fluid.of('create:chocolate', 1500)]),
        event.recipes.createDeploying(netherite, [netherite, 'minecraft:spawner']),
        event.recipes.createDeploying(netherite, [netherite, 'minecraft:dragon_egg'])
    ]).transitionalItem(netherite).loops(2)

    event.recipes.createSequencedAssembly('kubejs:nether_chestplate', netherite, [
        event.recipes.createDeploying(netherite, [netherite, 'minecraft:netherite_chestplate']),
        event.recipes.createDeploying(netherite, [netherite, 'minecraft:nether_star']),
        event.recipes.createFilling(netherite, [netherite, Fluid.of('create:chocolate', 1500)]),
        event.recipes.createDeploying(netherite, [netherite, 'minecraft:spawner']),
        event.recipes.createDeploying(netherite, [netherite, 'minecraft:dragon_egg'])
    ]).transitionalItem(netherite).loops(2)

    event.recipes.createSequencedAssembly('kubejs:nether_leggings', netherite, [
        event.recipes.createDeploying(netherite, [netherite, 'minecraft:netherite_leggings']),
        event.recipes.createDeploying(netherite, [netherite, 'minecraft:nether_star']),
        event.recipes.createFilling(netherite, [netherite, Fluid.of('create:chocolate', 1500)]),
        event.recipes.createDeploying(netherite, [netherite, 'minecraft:spawner']),
        event.recipes.createDeploying(netherite, [netherite, 'minecraft:dragon_egg'])
    ]).transitionalItem(netherite).loops(2)

    event.recipes.createSequencedAssembly('kubejs:nether_boots', netherite, [
        event.recipes.createDeploying(netherite, [netherite, 'minecraft:netherite_boots']),
        event.recipes.createDeploying(netherite, [netherite, 'minecraft:nether_star']),
        event.recipes.createFilling(netherite, [netherite, Fluid.of('create:chocolate', 1500)]),
        event.recipes.createDeploying(netherite, [netherite, 'minecraft:spawner']),
        event.recipes.createDeploying(netherite, [netherite, 'minecraft:dragon_egg'])
    ]).transitionalItem(netherite).loops(2)

    event.recipes.createSequencedAssembly('kubejs:nether_sword', netherite, [
        event.recipes.createDeploying(netherite, [netherite, 'minecraft:netherite_sword']),
        event.recipes.createDeploying(netherite, [netherite, 'minecraft:nether_star']),
        event.recipes.createFilling(netherite, [netherite, Fluid.of('create:chocolate', 1500)]),
        event.recipes.createDeploying(netherite, [netherite, 'minecraft:spawner']),
        event.recipes.createDeploying(netherite, [netherite, 'minecraft:dragon_egg'])
    ]).transitionalItem(netherite).loops(2)

    event.recipes.createSequencedAssembly('kubejs:nether_pickaxe', netherite, [
        event.recipes.createDeploying(netherite, [netherite, 'minecraft:netherite_pickaxe']),
        event.recipes.createDeploying(netherite, [netherite, 'minecraft:nether_star']),
        event.recipes.createFilling(netherite, [netherite, Fluid.of('create:chocolate', 1500)]),
        event.recipes.createDeploying(netherite, [netherite, 'minecraft:spawner']),
        event.recipes.createDeploying(netherite, [netherite, 'minecraft:dragon_egg'])
    ]).transitionalItem(netherite).loops(2)

    event.recipes.createSequencedAssembly('kubejs:nether_axe', netherite, [
        event.recipes.createDeploying(netherite, [netherite, 'minecraft:netherite_axe']),
        event.recipes.createDeploying(netherite, [netherite, 'minecraft:nether_star']),
        event.recipes.createFilling(netherite, [netherite, Fluid.of('create:chocolate', 1500)]),
        event.recipes.createDeploying(netherite, [netherite, 'minecraft:spawner']),
        event.recipes.createDeploying(netherite, [netherite, 'minecraft:dragon_egg'])
    ]).transitionalItem(netherite).loops(2)

    event.recipes.createSequencedAssembly('kubejs:nether_shovel', netherite, [
        event.recipes.createDeploying(netherite, [netherite, 'minecraft:netherite_shovel']),
        event.recipes.createDeploying(netherite, [netherite, 'minecraft:nether_star']),
        event.recipes.createFilling(netherite, [netherite, Fluid.of('create:chocolate', 1500)]),
        event.recipes.createDeploying(netherite, [netherite, 'minecraft:spawner']),
        event.recipes.createDeploying(netherite, [netherite, 'minecraft:dragon_egg'])
    ]).transitionalItem(netherite).loops(2)

    event.recipes.createSequencedAssembly('kubejs:nether_hoe', netherite, [
        event.recipes.createDeploying(netherite, [netherite, 'minecraft:netherite_hoe']),
        event.recipes.createDeploying(netherite, [netherite, 'minecraft:nether_star']),
        event.recipes.createFilling(netherite, [netherite, Fluid.of('create:chocolate', 1500)]),
        event.recipes.createDeploying(netherite, [netherite, 'minecraft:spawner']),
        event.recipes.createDeploying(netherite, [netherite, 'minecraft:dragon_egg'])
    ]).transitionalItem(netherite).loops(2)

    let dragonEgg = 'minecraft:dragon_egg'
    event.recipes.createSequencedAssembly([Item.of('minecraft:blaze_spawn_egg').withChance(0.8), Item.of('minecraft:egg').withChance(0.2)], dragonEgg, [
        event.recipes.createDeploying(dragonEgg, [dragonEgg, 'create:blaze_cake']),
        event.recipes.createDeploying(dragonEgg, [dragonEgg, 'minecraft:blaze_rod'])
    ]).transitionalItem(dragonEgg).loops(4)

    event.recipes.createSequencedAssembly([Item.of('minecraft:creeper_spawn_egg').withChance(0.8), Item.of('minecraft:egg').withChance(0.2)], dragonEgg, [
        event.recipes.createDeploying(dragonEgg, [dragonEgg, 'minecraft:gunpowder']),
        event.recipes.createDeploying(dragonEgg, [dragonEgg, 'minecraft:tnt'])
    ]).transitionalItem(dragonEgg).loops(4)

    event.recipes.createSequencedAssembly([Item.of('minecraft:enderman_spawn_egg').withChance(0.8), Item.of('minecraft:egg').withChance(0.2)], dragonEgg, [
        event.recipes.createDeploying(dragonEgg, [dragonEgg, 'minecraft:ender_pearl']),
        event.recipes.createDeploying(dragonEgg, [dragonEgg, 'minecraft:ender_eye'])
    ]).transitionalItem(dragonEgg).loops(4)

    event.recipes.createSequencedAssembly([Item.of('minecraft:evoker_spawn_egg').withChance(0.8), Item.of('minecraft:egg').withChance(0.2)], dragonEgg, [
        event.recipes.createDeploying(dragonEgg, [dragonEgg, 'minecraft:totem_of_undying']),
        event.recipes.createDeploying(dragonEgg, [dragonEgg, 'minecraft:emerald'])
    ]).transitionalItem(dragonEgg).loops(4)

    event.recipes.createSequencedAssembly([Item.of('minecraft:piglin_spawn_egg').withChance(0.8), Item.of('minecraft:egg').withChance(0.2)], dragonEgg, [
        event.recipes.createDeploying(dragonEgg, [dragonEgg, 'minecraft:gold_block']),
        event.recipes.createDeploying(dragonEgg, [dragonEgg, 'minecraft:crossbow'])
    ]).transitionalItem(dragonEgg).loops(4)

    event.recipes.createSequencedAssembly([Item.of('minecraft:shulker_spawn_egg').withChance(0.8), Item.of('minecraft:egg').withChance(0.2)], dragonEgg, [
        event.recipes.createDeploying(dragonEgg, [dragonEgg, 'minecraft:shulker_box']),
        event.recipes.createDeploying(dragonEgg, [dragonEgg, 'stoneworks:raw_purpur'])
    ]).transitionalItem(dragonEgg).loops(4)

    event.recipes.createSequencedAssembly([Item.of('minecraft:slime_spawn_egg').withChance(0.8), Item.of('minecraft:egg').withChance(0.2)], dragonEgg, [
        event.recipes.createDeploying(dragonEgg, [dragonEgg, 'minecraft:slime_block']),
        event.recipes.createDeploying(dragonEgg, [dragonEgg, 'minecraft:slime_ball'])
    ]).transitionalItem(dragonEgg).loops(4)

    event.recipes.createSequencedAssembly([Item.of('minecraft:witch_spawn_egg').withChance(0.8), Item.of('minecraft:egg').withChance(0.2)], dragonEgg, [
        event.recipes.createDeploying(dragonEgg, [dragonEgg, 'minecraft:redstone_block']),
        event.recipes.createDeploying(dragonEgg, [dragonEgg, 'minecraft:glowstone'])
    ]).transitionalItem(dragonEgg).loops(4)

    event.recipes.createSequencedAssembly([Item.of('minecraft:zombified_piglin_spawn_egg').withChance(0.8), Item.of('minecraft:egg').withChance(0.2)], dragonEgg, [
        event.recipes.createDeploying(dragonEgg, [dragonEgg, 'minecraft:rotten_flesh']),
        event.recipes.createDeploying(dragonEgg, [dragonEgg, 'minecraft:gold_block'])
    ]).transitionalItem(dragonEgg).loops(4)

    event.recipes.createSequencedAssembly([Item.of('minecraft:bee_spawn_egg').withChance(0.8), Item.of('minecraft:egg').withChance(0.2)], dragonEgg, [
        event.recipes.createDeploying(dragonEgg, [dragonEgg, 'minecraft:honey_block']),
        event.recipes.createDeploying(dragonEgg, [dragonEgg, 'create:honeyed_apple'])
    ]).transitionalItem(dragonEgg).loops(4)

    event.recipes.createSequencedAssembly([Item.of('minecraft:chicken_spawn_egg').withChance(0.8), Item.of('minecraft:egg').withChance(0.2)], dragonEgg, [
        event.recipes.createDeploying(dragonEgg, [dragonEgg, 'minecraft:egg']),
        event.recipes.createDeploying(dragonEgg, [dragonEgg, 'minecraft:feather'])
    ]).transitionalItem(dragonEgg).loops(4)

    event.recipes.createSequencedAssembly([Item.of('minecraft:cow_spawn_egg').withChance(0.8), Item.of('minecraft:egg').withChance(0.2)], dragonEgg, [
        event.recipes.createDeploying(dragonEgg, [dragonEgg, 'minecraft:leather']),
        event.recipes.createFilling(dragonEgg, [dragonEgg, Fluid.of('minecraft:milk', 1000)])
    ]).transitionalItem(dragonEgg).loops(4)

    event.recipes.createSequencedAssembly([Item.of('minecraft:iron_golem_spawn_egg').withChance(0.8), Item.of('minecraft:egg').withChance(0.2)], dragonEgg, [
        event.recipes.createDeploying(dragonEgg, [dragonEgg, 'minecraft:iron_block']),
        event.recipes.createDeploying(dragonEgg, [dragonEgg, 'createdeco:iron_hull'])
    ]).transitionalItem(dragonEgg).loops(4)

    event.recipes.createSequencedAssembly([Item.of('minecraft:zombie_villager_spawn_egg').withChance(0.8), Item.of('minecraft:egg').withChance(0.2)], dragonEgg, [
        event.recipes.createDeploying(dragonEgg, [dragonEgg, 'minecraft:lectern']),
        event.recipes.createDeploying(dragonEgg, [dragonEgg, 'tetra:pristine_emerald'])
    ]).transitionalItem(dragonEgg).loops(4)

})