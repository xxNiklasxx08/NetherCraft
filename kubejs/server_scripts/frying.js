//priority: 1

ServerEvents.recipes((event) => {

    event.custom({
        'type': 'create_bic_bit:deep_frying',
        'heatRequirements': 'heated',
        'ingredients': [{
            'item': 'create_bic_bit:raw_fries'
        }, {
            'fluid': 'create_bic_bit:frying_oil',
            'amount': 250
        }],
        'processingTime': 100,
        'results': [{
            'item': 'create_bic_bit:fries'
        }]
    })

    event.custom({
        'type': 'create_bic_bit:deep_frying',
        'heatRequirements': 'heated',
        'ingredients': [{
            'item': 'farmersdelight:rice'
        }, {
            'fluid': 'create_bic_bit:frying_oil',
            'amount': 250
        }],
        'processingTime': 100,
        'results': [{
            'item': 'farmersdelight:fried_rice'
        }]
    })
    
})