export default {
    advancedCircuit: {
        name: 'Advanced circuit',
        recipe: {
            producedBy: 'assembler',
            units: 1,
            time: 6,
            ingredients: [
                [2, 'electronicCircuit'],
                [2, 'plasticBar'],
                [4, 'copperCable']
            ]
        }
    },
    assemblingMachine1: {
        name: 'Assembling machine 1'
    },
    battery: {
        name: 'Battery',
        recipe: {
            producedBy: 'chemicalPlant',
            units: 1,
            time: 5,
            ingredients: [
                [1, 'ironPlate'],
                [1, 'copperPlate'],
                [20, 'sulfuricAcid']
            ]
        }
    },
    coal: {
        name: 'Coal'
    },
    copperCable: {
        name: 'Copper cable',
        recipe: {
            producedBy: 'assembler',
            units: 2,
            time: 0.5,
            ingredients: [
                [1, 'copperPlate']
            ]
        }
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
                [1, 'copperOre']
            ]
        }
    },
    electricEngineUnit: {
        name: 'Electric engine unit',
        recipe: {
            producedBy: 'assembler',
            units: 1,
            time: 10,
            ingredients: [
                [1, 'engineUnit'],
                [2, 'electronicCircuit'],
                [15, 'lubricant']
            ]
        }
    },
    electricFurnace: {
        name: 'Electric furnace'
    },
    electricMiningDrill: {
        name: 'Electric mining drill'
    },
    electronicCircuit: {
        name: 'Electronic circuit',
        recipe: {
            producedBy: 'assembler',
            units: 1,
            time: 0.5,
            ingredients: [
                [1, 'ironPlate'],
                [3, 'copperCable']
            ]
        }
    },
    emptyBarrel: {
        name: 'Empty barrel',
        recipe: {
            producedBy: 'assembler',
            units: 1,
            time: 1,
            ingredients: [
                [1, 'steelPlate']
            ]
        }
    },
    engineUnit: {
        name: 'Engine unit',
        recipe: {
            producedBy: 'assembler',
            units: 1,
            time: 10,
            ingredients: [
                [1, 'steelPlate'],
                [1, 'ironGearWheel'],
                [2, 'pipe']
            ]
        }
    },
    explosives: {
        name: 'Explosives',
        recipe: {
            producedBy: 'chemicalPlant',
            units: 1,
            time: 5,
            ingredients: [
                [1, 'sulfur'],
                [1, 'coal'],
                [10, 'water']
            ]
        }
    },
    flyingRobotFrame: {
        name: 'Flying robot frame',
        recipe: {
            producedBy: 'assembler',
            units: 1,
            time: 20,
            ingredients: [
                [1, 'electricEngineUnit'],
                [2, 'battery'],
                [1, 'steelPlate'],
                [3, 'electronicCircuit']
            ]
        }
    },
    grenade: {
        name: 'Grenade'
    },
    gunTurret: {
        name: 'Gun turret'
    },
    heavyOil: {
        name: 'Heavy oil'
    },
    highTechSciencePack: {
        name: 'High tech science pack',
        recipe: {
            producedBy: 'assembler',
            units: 2,
            time: 14,
            ingredients: [
                [1, 'battery'],
                [3, 'processingUnit'],
                [1, 'speedModule'],
                [30, 'copperCable']
            ]
        }
    },
    inserter: {
        name: 'Inserter'
    },
    ironGearWheel: {
        name: 'Iron gear wheel',
        recipe: {
            producedBy: 'assembler',
            units: 1,
            time: 0.5,
            ingredients: [
                [2, 'ironPlate']
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
                [1, 'ironOre']
            ]
        }
    },
    ironStick: {
        name: 'Iron stick',
        recipe: {
            producedBy: 'assembler',
            units: 2,
            time: 0.5,
            ingredients: [
                [1, 'ironPlate']
            ]
        }
    },
    lightOil: {
        name: 'Light oil'
    },
    lubricant: {
        name: 'Lubricant',
        recipe: {
            producedBy: 'chemicalPlant',
            units: 10,
            time: 1,
            ingredients: [
                [10, 'heavyOil']
            ]
        }
    },
    militarySciencePack: {
        name: 'Military science pack',
        recipe: {
            producedBy: 'assembler',
            units: 2,
            time: 10,
            ingredients: [
                [1, 'piercingRoundsMagazine'],
                [1, 'grenade'],
                [1, 'gunTurret']
            ]
        }
    },
    petroleumGas: {
        name: 'Petroleum gas'
    },
    piercingRoundsMagazine: {
        name: 'Piercing rounds magazine'
    },
    pipe: {
        name: 'Pipe'
    },
    plasticBar: {
        name: 'Plastic bar',
        recipe: {
            producedBy: 'chemicalPlant',
            units: 2,
            time: 1,
            ingredients: [
                [1, 'coal'],
                [20, 'petroleumGas']
            ]
        }
    },
    processingUnit: {
        name: 'Processing unit',
        recipe: {
            producedBy: 'assembler',
            units: 1,
            time: 10,
            ingredients: [
                [20, 'electronicCircuit'],
                [2, 'advancedCircuit'],
                [5, 'sulfuricAcid']
            ]
        }
    },
    productionSciencePack: {
        name: 'Production science pack',
        recipe: {
            producedBy: 'assembler',
            units: 2,
            time: 14,
            ingredients: [
                [1, 'electricEngineUnit'],
                [1, 'assemblingMachine1'],
                [1, 'electricFurnace']
            ]
        }
    },
    rawWood: {
        name: 'Raw wood'
    },
    sciencePack1: {
        name: 'Science pack 1',
        recipe: {
            producedBy: 'assembler',
            units: 1,
            time: 5,
            ingredients: [
                [1, 'copperPlate'],
                [1, 'ironGearWheel']
            ]
        }
    },
    sciencePack2: {
        name: 'Science pack 2',
        recipe: {
            producedBy: 'assembler',
            units: 1,
            time: 6,
            ingredients: [
                [1, 'inserter'],
                [1, 'transportBelt']
            ]
        }
    },
    sciencePack3: {
        name: 'Science pack 3',
        recipe: {
            producedBy: 'assembler',
            units: 1,
            time: 12,
            ingredients: [
                [1, 'advancedCircuit'],
                [1, 'engineUnit'],
                [1, 'electricMiningDrill']
            ]
        }
    },
    speedModule: {
        name: 'Speed module'
    },
    steelPlate: {
        name: 'Steel plate',
        recipe: {
            producedBy: 'furnace',
            units: 1,
            time: 17.5,
            ingredients: [
                [5, 'ironPlate']
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
                [2, 'stone']
            ]
        }
    },
    sulfur: {
        name: 'Sulfur',
        recipe: {
            producedBy: 'chemicalPlant',
            units: 2,
            time: 1,
            ingredients: [
                [30, 'water'],
                [30, 'petroleumGas']
            ]
        }
    },
    sulfuricAcid: {
        name: 'Sulfuric acid',
        recipe: {
            producedBy: 'chemicalPlant',
            units: 50,
            time: 1,
            ingredients: [
                [5, 'sulfur'],
                [1, 'ironPlate'],
                [100, 'water']
            ]
        }
    },
    transportBelt: {
        name: 'Transport belt'
    },
    water: {
        name: 'Water'
    },
    wood: {
        name: 'Wood',
        recipe: {
            producedBy: 'assembler',
            units: 2,
            time: 0.5,
            ingredients: [
                [1, 'rawWood']
            ]
        }
    },
    woodenChest: {
        name: 'Wooden chest',
        recipe: {
            producedBy: 'assembler',
            units: 1,
            time: 0.5,
            ingredients: [
                [4, 'wood']
            ]
        }
    },
};
