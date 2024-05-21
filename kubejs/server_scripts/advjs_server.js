//priority: 0

AdvJSEvents.advancement((event) => {
    let { TRIGGER } = event
    event.remove({ mod: 'minecraft' })
    event.remove({ mod: 'create' })
    event.remove({ mod: 'create_bic_bit' })
    event.remove({ mod: 'farmersdelight' })
    event.remove({ mod: 'vegandelight' })
    event.remove({ mod: 'tetra' })
    event.remove({ mod: 'ironfurnaces' })
    event.remove({ mod: 'alexsmobs' })
    //event.remove({ mod: 'stellarity' })

    let root = event.create('nethercraft:root').display((builder) => {
        builder.setIcon('naturescompass:naturescompass')
        builder.setTitle({translate: 'advancement.root.name'})
        builder.setDescription({translate: 'advancement.root.lore'})
        builder.setBackground('textures/gui/advancements/backgrounds/stone.png')
        builder.setShowToast(true)
        builder.setAnnounceToChat(false)
        builder.setFrameType('challenge')
        builder.setHidden(false)
    }).criteria((builder) => {
        builder.add('root', TRIGGER.hasItems(['#minecraft:logs']))
    })

    let andesiteAlloy = root.addChild('andesite_alloy', (advancement) => {
        advancement.display((builder) => {
            builder.setIcon('create:andesite_alloy')
            builder.setTitle({translate: 'advancement.andesite_alloy.name'})
            builder.setDescription({translate: 'advancement.andesite_alloy.lore'})
        }).criteria((builder) => {
            builder.add('andesite_alloy', TRIGGER.hasItems('create:andesite_alloy'))
        }).requireParentDone()
    })

    let goggles = andesiteAlloy.addChild('goggles', (advancement) => {
        advancement.display((builder) => {
            builder.setIcon('create:goggles')
            builder.setTitle({translate: 'advancement.goggles.name'})
            builder.setDescription({translate: 'advancement.goggles.lore'})
        }).criteria((builder) => {
            builder.add('goggles', TRIGGER.hasItems('create:goggles'))
        }).requireParentDone()
    })

    let goggleHelmet = goggles.addChild('goggle_helmet', (advancement) => {
        advancement.display((builder) => {
            builder.setIcon('creategoggles:goggle_netherite_helmet')
            builder.setTitle({translate: 'advancement.goggle_helmet.name'})
            builder.setDescription({translate: 'advancement.goggle_helmet.lore'})
        }).criteria((builder) => {
            builder.add('google_helmet', TRIGGER.hasItems(['creategoggles:goggle_chainmail_helmet', 'creategoggles:goggle_diamond_helmet', 'creategoggles:goggle_golden_helmet', 'creategoggles:goggle_iron_helmet', 'creategoggles:goggle_turtle_helmet', 'creategoggles:goggle_netherite_helmet', 'creategoggles:goggle_leather_helmet']))
        }).requireParentDone()
    })

    let wrench = goggles.addChild('wrench', (advancement) => {
        advancement.display((builder) => {
            builder.setIcon('create:wrench')
            builder.setTitle({translate: 'advancement.wrench.name'})
            builder.setDescription({translate: 'advancement.wrench.lore'})
        }).criteria((builder) => {
            builder.add('wrench', TRIGGER.hasItems('create:wrench'))
        }).requireParentDone()
    })

    let fryer = andesiteAlloy.addChild('mechanical_fryer', (advancement) => {
        advancement.display((builder) => {
            builder.setIcon('create_bic_bit:mechanical_fryer')
            builder.setTitle({translate: 'advancement.mechanical_fryer.name'})
            builder.setDescription({translate: 'advancement.mechanical_fryer.lore'})
        }).criteria((builder) => {
            builder.add('mechanical_fryer', TRIGGER.hasItems('create_bic_bit:mechanical_fryer'))
        }).requireParentDone()
    })

    let chassis = andesiteAlloy.addChild('chassis', (advancement) => {
        advancement.display((builder) => {
            builder.setIcon('create:linear_chassis')
            builder.setTitle({translate: 'advancement.chassis.name'})
            builder.setDescription({translate: 'advancement.chassis.lore'})
        }).criteria((builder) => {
            builder.add('chassis', TRIGGER.hasItems('create:linear_chassis'))
        }).requireParentDone()
    })

    let gantry = andesiteAlloy.addChild('gantry_carriage', (advancement) => {
        advancement.display((builder) => {
            builder.setIcon('create:gantry_carriage')
            builder.setTitle({translate: 'advancement.gantry_carriage.name'})
            builder.setDescription({translate: 'advancement.gantry_carriage.lore'})
        }).criteria((builder) => {
            builder.add('gantry', TRIGGER.hasItems('create:gantry_carriage'))
        }).requireParentDone()
    })

    let brassIngot = andesiteAlloy.addChild('brass_ingot', (advancement) => {
        advancement.display((builder) => {
            builder.setIcon('create:brass_ingot')
            builder.setTitle({translate: 'advancement.brass_ingot.name'})
            builder.setDescription({translate: 'advancement.brass_ingot.lore'})
        }).criteria((builder) => {
            builder.add('brass_ingot', TRIGGER.hasItems('create:brass_ingot'))
        }).requireParentDone()
    })

    let polishedRoseQuartz = brassIngot.addChild('polished_rose_quartz', (advancement) => {
        advancement.display((builder) => {
            builder.setIcon('create:polished_rose_quartz')
            builder.setTitle({translate: 'advancement.polished_rose_quartz.name'})
            builder.setDescription({translate: 'advancement.polished_rose_quartz.lore'})
            builder.setFrameType('challenge')
        }).criteria((builder) => {
            builder.add('polished_rose_quartz', TRIGGER.hasItems('create:polished_rose_quartz'))
        }).requireParentDone()
    })

    let mechanicalArm = brassIngot.addChild('mechanical_arm', (advancement) => {
        advancement.display((builder) => {
            builder.setIcon('create:mechanical_arm')
            builder.setTitle({translate: 'advancement.mechanical_arm.name'})
            builder.setDescription({translate: 'advancement.mechanical_arm.lore'})
        }).criteria((builder) => {
            builder.add('mechanical_arm', TRIGGER.hasItems('create:mechanical_arm'))
        }).requireParentDone()
    })

    let drawer = root.addChild('drawer', (advancement) => {
        advancement.display((builder) => {
            builder.setIcon('functionalstorage:oak_1'),
            builder.setTitle({translate: 'advancement.drawer.name'})
            builder.setDescription({translate: 'advancement.drawer.lore'})
        }).criteria((builder) => {
            builder.add('drawer', TRIGGER.hasItems('#functionalstorage:drawer'))
        }).requireParentDone()
    })

    let drawerController = drawer.addChild('drawer_controller', (advancement) => {
        advancement.display((builder) => {
            builder.setIcon('functionalstorage:storage_controller')
            builder.setTitle({translate: 'advancement.drawerController.name'})
            builder.setDescription({translate: 'advancement.drawerController.lore'})
            builder.setFrameType('challenge')
        }).criteria((builder) => {
            builder.add('drawerController', TRIGGER.hasItems('functionalstorage:storage_controller'))
        }).requireParentDone()
    })

    let drawerCompacting = drawer.addChild('drawer_compacting', (advancement) => {
        advancement.display((builder) => {
            builder.setIcon('functionalstorage:compacting_drawer')
            builder.setTitle({translate: 'advancement.drawerCompacting.name'})
            builder.setDescription({translate: 'advancement.drawerCompacting.lore'})
        }).criteria((builder) => {
            builder.add('drawerCompacting', TRIGGER.hasItems('functionalstorage:compacting_drawer'))
        }).requireParentDone()
    })

    let woodenHammer = root.addChild('wooden_hammer', (advancement) => {
        advancement.display((builder) => {
            builder.setIcon(Item.of('tetra:modular_double', {
                'double/handle': 'double/basic_handle',
                'double/head_left': 'double/basic_hammer_left',
                'double/head_right': 'double/basic_hammer_right',
                'double/basic_hammer_right_material': 'basic_hammer/oak',
                'double/basic_hammer_left_material': 'basic_hammer/oak',
                'double/basic_hammer_material': 'basic_handle/stick'
            }))
            builder.setTitle({translate: 'advancement.wooden_hammer.name'})
            builder.setDescription({translate: 'advancement.wooden_hammer.lore'})
        }).criteria((builder) => {
            builder.add('wooden_hammer', TRIGGER.hasItems(Item.of('tetra:modular_double', {
                'double/handle': 'double/basic_handle',
                'double/head_left': 'double/basic_hammer_left',
                'double/head_right': 'double/basic_hammer_right',
                'double/basic_hammer_right_material': 'basic_hammer/oak',
                'double/basic_hammer_left_material': 'basic_hammer/oak',
                'double/basic_hammer_material': 'basic_handle/stick'
            })))
        }).requireParentDone()
    })

    let pristineLapis = woodenHammer.addChild('pristine_lapis', (advancement) => {
        advancement.display((builder) => {
            builder.setIcon('tetra:pristine_lapis')
            builder.setTitle({translate: 'advancement.pristine_lapis.name'})
            builder.setDescription({translate: 'advancement.pristine_lapis.lore'})
        }).criteria((builder) => {
            builder.add('pristine_lapis', TRIGGER.hasItems('tetra:pristine_lapis'))
        }).requireParentDone()
    })

    let pristineEmerald = woodenHammer.addChild('pristine_emerald', (advancement) => {
        advancement.display((builder) => {
            builder.setIcon('tetra:pristine_emerald')
            builder.setTitle({translate: 'advancement.pristine_emerald.name'})
            builder.setDescription({translate: 'advancement.pristine_emerald.lore'})
        }).criteria((builder) => {
            builder.add('pristine_emerald', TRIGGER.hasItems('tetra:pristine_emerald'))
        }).requireParentDone()
    })

    let pristineDiamond = woodenHammer.addChild('pristine_diamond', (advancement) => {
        advancement.display((builder) => {
            builder.setIcon('tetra:pristine_diamond')
            builder.setTitle({translate: 'advancement.pristine_diamond.name'})
            builder.setDescription({translate: 'advancement.pristine_diamond.lore'})
        }).criteria((builder) => {
            builder.add('pristine_diamond', TRIGGER.hasItems('tetra:pristine_diamond'))
        }).requireParentDone()
    })

    let pristineAmethyst = woodenHammer.addChild('pristine_amethyst', (advancement) => {
        advancement.display((builder) => {
            builder.setIcon('tetra:pristine_amethyst')
            builder.setTitle({translate: 'advancement.pristine_amethyst.name'})
            builder.setDescription({translate: 'advancement.pristine_amethyst.lore'})
        }).criteria((builder) => {
            builder.add('pristine_amethyst', TRIGGER.hasItems('tetra:pristine_amethyst'))
        }).requireParentDone()
    })

    let compressedObsidian = root.addChild('compressed_obsidian', (advancement) => {
        advancement.display((builder) => {
            builder.setIcon('kubejs:compressed_obsidian')
            builder.setTitle({translate: 'advancement.compressed_obsidian.name'})
            builder.setDescription({translate: 'advancement.compressed_obsidian.lore'})
        }).criteria((builder) => {
            builder.add('compressed_obsidian', TRIGGER.hasItems('kubejs:compressed_obsidian'))
        }).requireParentDone()
    })

    let speedBlock = compressedObsidian.addChild('speed_block', (advancement) => {
        advancement.display((builder) => {
            builder.setIcon('kubejs:speed')
            builder.setTitle({translate: 'advancement.speed.name'})
            builder.setDescription({translate: 'advancement.speed.lore'})
        }).criteria((builder) => {
            builder.add('speed_block', TRIGGER.hasItems('kubejs:speed'))
        }).requireParentDone()
    })

    let specialCake = compressedObsidian.addChild('special_cake', (advancement) => {
        advancement.display((builder) => {
            builder.setIcon('kubejs:birthday_cake')
            builder.setTitle({translate: 'advancement.special_cake.name'})
            builder.setDescription({translate: 'advancement.special_cake.lore'})
        }).criteria((builder) => {
            builder.add('special_cake', TRIGGER.hasItems('kubejs:birthday_cake'))
        }).requireParentDone()
    })

    let witherBlock = compressedObsidian.addChild('wither_block', (advancement) => {
        advancement.display((builder) => {
            builder.setIcon('kubejs:wither_block')
            builder.setTitle({translate: 'advancement.wither_block.name'})
            builder.setDescription({translate: 'advancement.wither_block.lore'})
        }).criteria((builder) => {
            builder.add('wither_block', TRIGGER.hasItems('kubejs:wither_block'))
        }).requireParentDone()
    })

    let witherGlass = witherBlock.addChild('wither_glass', (advancement) => {
        advancement.display((builder) => {
            builder.setIcon('kubejs:wither_glass')
            builder.setTitle({translate: 'advancement.wither_glass.name'})
            builder.setDescription({translate: 'advancement.wither_glass.lore'})
        }).criteria((builder) => {
            builder.add('wither_glass', TRIGGER.hasItems('kubejs:wither_glass'))
        }).requireParentDone()
    })

    let diamond = root.addChild('diamond', (advancement) => {
        advancement.display((builder) => {
            builder.setIcon('minecraft:diamond')
            builder.setTitle({translate: 'advancement.diamond.name'})
            builder.setDescription({translate: 'advancement.diamond.lore'})
        }).criteria((builder) => {
            builder.add('diamond', TRIGGER.hasItems('minecraft:diamond'))
        }).requireParentDone()
    })

    let ancientDebris = diamond.addChild('ancient_debris', (advancement) => {
        advancement.display((builder) => {
            builder.setIcon('minecraft:ancient_debris')
            builder.setTitle({translate: 'advancement.ancient_debris.name'})
            builder.setDescription({translate: 'advancement.ancient_debris.lore'})
        }).criteria((builder) => {
            builder.add('ancient_debris', TRIGGER.hasItems('minecraft:ancient_debris'))
        }).requireParentDone()
    })

    let netheriteArmor = ancientDebris.addChild('netherite_armor', (advancement) => {
        advancement.display((builder) => {
            builder.setIcon('minecraft:netherite_chestplate'),
            builder.setTitle({translate: 'advancement.netherite_armor.name'})
            builder.setDescription({translate: 'advancement.netherite_armor.lore'})
            builder.setFrameType('challenge')
        }).criteria((builder) => {
            builder.add('helmet', TRIGGER.hasItems('minecraft:netherite_helmet'))
            builder.add('chestplate', TRIGGER.hasItems('minecraft:netherite_chestplate'))
            builder.add('leggings', TRIGGER.hasItems('minecraft:netherite_leggings'))
            builder.add('boots', TRIGGER.hasItems('minecraft:netherite_boots'))
        }).requireParentDone()
    })

    let netheriteTools = ancientDebris.addChild('netherite_tools', (advancement) => {
        advancement.display((builder) => {
            builder.setIcon('minecraft:netherite_pickaxe')
            builder.setTitle({translate: 'advancement.netherite_tools.name'})
            builder.setDescription({translate: 'advancement.netherite_tools.lore'})
            builder.setFrameType('challenge')
        }).criteria((builder) => {
            builder.add('pickaxe', TRIGGER.hasItems('minecraft:netherite_pickaxe'))
            builder.add('axe', TRIGGER.hasItems('minecraft:netherite_axe'))
            builder.add('shovel', TRIGGER.hasItems('minecraft:netherite_shovel'))
            builder.add('sword', TRIGGER.hasItems('minecraft:netherite_sword'))
        }).requireParentDone()
    })

    let netheriteHoe = netheriteTools.addChild('netherite_hoe', (advancement) => {
        advancement.display((builder) => {
            builder.setIcon('minecraft:netherite_hoe')
            builder.setTitle({translate: 'advancement.netherite_hoe.name'})
            builder.setDescription({translate: 'advancement.netherite_hoe.lore'})
            builder.setFrameType('challenge')
        }).criteria((builder) => {
            builder.add('hoe', TRIGGER.hasItems('minecraft:netherite_hoe'))
        }).requireParentDone()
    })

})