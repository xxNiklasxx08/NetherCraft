//priority: 0

StartupEvents.registry('item', (event) => {

    event.create('birthday_cake').tooltip({translate: 'tooltip.kubejs.birthday_cake'}).food((builder) => {
        builder.hunger(20).saturation(1.2).alwaysEdible().eaten((context) => {
            let explosion = context.player.block.createExplosion()
            explosion.strength(15)
            explosion.explosionMode('block')
            explosion.explode()
        })
    }).useAnimation('eat')

    event.create('nether_sword', 'sword').tier('nether')
    event.create('nether_pickaxe', 'pickaxe').tier('nether')
    event.create('nether_axe', 'axe').tier('nether')
    event.create('nether_shovel', 'shovel').tier('nether')
    event.create('nether_hoe', 'hoe').tier('nether')
    event.create('nether_helmet', 'helmet').tier('nether')
    event.create('nether_chestplate', 'chestplate').tier('nether')
    event.create('nether_leggings', 'leggings').tier('nether')
    event.create('nether_boots', 'boots').tier('nether')

})