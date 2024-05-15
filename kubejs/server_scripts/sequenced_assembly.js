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

    event.recipes.createSequencedAssembly('create:steam_engine', copper, [
        event.recipes.createDeploying(copper, [copper, 'create:golden_sheet']),
        event.recipes.createDeploying(copper, [copper, 'create:shaft']),
        event.recipes.createFilling(copper, [copper, Fluid.water(500)]),
        event.recipes.createDeploying(copper, [copper, 'create:brass_ingot'])
    ]).transitionalItem(copper).loops(1)

})