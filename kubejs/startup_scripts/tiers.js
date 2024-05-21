//priority: 0

ItemEvents.toolTierRegistry((event) => {

    event.add('nether', (tier) => {
        tier.uses = 10000;
        tier.speed = 100.0;
        tier.attackDamageBonus = 4.5;
        tier.level = 10;
        tier.enchantmentValue = 14;
    })

})

ItemEvents.armorTierRegistry((event) => {

    event.add('nether', (tier) => {
        tier.durabilityMultiplier = 2500;
        tier.slotProtections = [9, 18, 24, 9];
        tier.enchantmentValue = 14;
        tier.equipSound = "minecraft:item.armor.equip_netherite";
        tier.toughness = 12.0;
        tier.knockbackResistance = 0.7;
    })

})