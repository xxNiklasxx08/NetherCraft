//priority: 0

StartupEvents.registry('block', (event) => {

    event.create('compressed_obsidian').requiresTool(true).tagBlock('minecraft:needs_diamond_tool').hardness(150.0).resistance(1200.0).soundType('stone')

    event.create('speed').requiresTool(true).speedFactor(1.75).soundType('wood')

    event.create('wither_block').requiresTool(true).tagBlock('minecraft:needs_diamond_tool').tagBlock('minecraft:wither_immune').hardness(10.0).resistance(1200.0).soundType('stone')
    event.create('wither_glass').requiresTool(true).tagBlock('minecraft:needs_diamond_tool').tagBlock('minecraft:wither_immune').hardness(10.0).resistance(1200.0).defaultTranslucent().soundType('glass')

})