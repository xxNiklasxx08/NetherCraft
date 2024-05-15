//priority: 1

ServerEvents.recipes((event) => {

    event.recipes.createMechanicalCrafting('storagedrawers:controller', 
    ['XXX', 'YZA', 'XBX'], {
        X: 'create:item_vault',
        Y: 'minecraft:comparator',
        Z: '#storagedrawers:drawers',
        A: 'minecraft:repeater',
        B: 'create:electron_tube'
    })

    event.recipes.createMechanicalCrafting('storagedrawers:compacting_drawers_3',
    ['XXX', 'YZY', 'XAX'], {
        X: 'create:item_vault',
        Y: 'minecraft:chest',
        Z: '#storagedrawers:drawers',
        A: 'minecraft:barrel'
    })
    
})