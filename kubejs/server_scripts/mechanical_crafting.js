//priority: 1

ServerEvents.recipes((event) => {

    event.recipes.createMechanicalCrafting('functionalstorage:storage_controller', 
        ['XXX', 'YZA', 'XBX'], {
            X: 'create:item_vault',
            Y: 'minecraft:comparator',
            Z: '#functionalstorage:drawer',
            A: 'minecraft:repeater',
            B: 'create:electron_tube'
        }
    )

    event.recipes.createMechanicalCrafting('functionalstorage:compacting_drawer',
        ['XXX', 'YZY', 'XAX'], {
            X: 'create:item_vault',
            Y: 'minecraft:chest',
            Z: '#functionalstorage:drawer',
            A: 'minecraft:barrel'
        }
    )

    event.recipes.createMechanicalCrafting('minecraft:spawner',
        ['XYYYYYX', 'YZZAZZY', 'YZBCBZY', 'YACCCAY', 'YZBCBZY', 'YZZAZZY', 'XYYYYYX'], {
            X: 'minecraft:netherite_block',
            Y: 'minecraft:iron_bars',
            Z: 'createdeco:industrial_iron_mesh_fence',
            A: 'create:industrial_iron_block',
            B: 'minecraft:respawn_anchor',
            C: 'minecraft:dragon_egg'
        }
    )
    
})