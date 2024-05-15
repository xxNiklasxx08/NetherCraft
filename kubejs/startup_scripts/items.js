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

})