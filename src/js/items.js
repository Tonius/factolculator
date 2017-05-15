export default {
    coal: {
        name: 'Coal'
    },
    copperCable: {
        name: 'Copper cable'
    },
    copperOre: {
        name: 'Copper ore'
    },
    copperPlate: {
        name: 'Copper plate',
        recipe: {
            producedBy: 'furnace',
            units: 1,
            time: 3.5,
            ingredients: [
                {item: 'copperOre', amount: 1}
            ]
        }
    },
    electronicCircuit: {
        name: 'Electronic circuit',
        recipe: {
            producedBy: 'assembler',
            units: 1,
            time: 0.5,
            ingredients: [
                {item: 'ironPlate', amount: 1},
                {item: 'copperCable', amount: 3}
            ]
        }
    },
    ironOre: {
        name: 'Iron ore'
    },
    ironPlate: {
        name: 'Iron plate',
        recipe: {
            producedBy: 'furnace',
            units: 1,
            time: 3.5,
            ingredients: [
                {item: 'ironOre', amount: 1}
            ]
        }
    },
    steelPlate: {
        name: 'Steel plate',
        recipe: {
            producedBy: 'furnace',
            units: 1,
            time: 17.5,
            ingredients: [
                {item: 'ironPlate', amount: 5}
            ]
        }
    },
    stone: {
        name: 'Stone'
    },
    stoneBrick: {
        name: 'Stone brick',
        recipe: {
            producedBy: 'furnace',
            units: 1,
            time: 3.5,
            ingredients: [
                {item: 'stone', amount: 2}
            ]
        }
    },
};
