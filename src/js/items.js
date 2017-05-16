export default {
    accumulator: {
        name: 'Accumulator',
        recipe: {
            producedBy: 'assembler',
            units: 1,
            time: 10,
            ingredients: [
                [2, 'ironPlate'],
                [5, 'battery']
            ]
        }
    },
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
    arithmeticCombinator: {
        name: 'Arithmetic combinator',
        recipe: {
            producedBy: 'assembler',
            units: 1,
            time: 0.5,
            ingredients: [
                [5, 'copperCable'],
                [5, 'electronicCircuit']
            ]
        }
    },
    assemblingMachine1: {
        name: 'Assembling machine 1',
        recipe: {
            producedBy: 'assembler',
            units: 1,
            time: 0.5,
            ingredients: [
                [3, 'electronicCircuit'],
                [5, 'ironGearWheel'],
                [9, 'ironPlate']
            ]
        }
    },
    assemblingMachine2: {
        name: 'Assembling machine 2',
        recipe: {
            producedBy: 'assembler',
            units: 1,
            time: 0.5,
            ingredients: [
                [9, 'ironPlate'],
                [3, 'electronicCircuit'],
                [5, 'ironGearWheel'],
                [1, 'assemblingMachine1']
            ]
        }
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
    batteryModule: {
        name: 'Battery (module)',
        recipe: {
            producedBy: 'assembler',
            units: 1,
            time: 10,
            ingredients: [
                [5, 'battery'],
                [10, 'steelPlate']
            ]
        }
    },
    bigElectricPole: {
        name: 'Big electric pole',
        recipe: {
            producedBy: 'assembler',
            units: 1,
            time: 0.5,
            ingredients: [
                [5, 'steelPlate'],
                [5, 'copperPlate']
            ]
        }
    },
    boiler: {
        name: 'Boiler',
        recipe: {
            producedBy: 'assembler',
            units: 1,
            time: 0.5,
            ingredients: [
                [1, 'stoneFurnace'],
                [4, 'pipe']
            ]
        }
    },
    burnerInserter: {
        name: 'Burner inserter',
        recipe: {
            producedBy: 'assembler',
            units: 1,
            time: 0.5,
            ingredients: [
                [1, 'ironPlate'],
                [1, 'ironGearWheel']
            ]
        }
    },
    burnerMiningDrill: {
        name: 'Burner mining drill',
        recipe: {
            producedBy: 'assembler',
            units: 1,
            time: 2,
            ingredients: [
                [3, 'ironGearWheel'],
                [1, 'stoneFurnace'],
                [3, 'ironPlate']
            ]
        }
    },
    cannonShell: {
        name: 'Cannon shell',
        recipe: {
            producedBy: 'assembler',
            units: 1,
            time: 8,
            ingredients: [
                [2, 'steelPlate'],
                [2, 'plasticBar'],
                [1, 'explosives']
            ]
        }
    },
    car: {
        name: 'Car',
        recipe: {
            producedBy: 'assembler',
            units: 1,
            time: 0.5,
            ingredients: [
                [8, 'engineUnit'],
                [20, 'ironPlate'],
                [5, 'steelPlate']
            ]
        }
    },
    cargoWagon: {
        name: 'Cargo wagon',
        recipe: {
            producedBy: 'assembler',
            units: 1,
            time: 0.5,
            ingredients: [
                [10, 'ironGearWheel'],
                [20, 'ironPlate'],
                [20, 'steelPlate']
            ]
        }
    },
    chemicalPlant: {
        name: 'Chemical plant',
        recipe: {
            producedBy: 'assembler',
            units: 1,
            time: 5,
            ingredients: [
                [5, 'steelPlate'],
                [5, 'ironGearWheel'],
                [5, 'electronicCircuit'],
                [5, 'pipe']
            ]
        }
    },
    coal: {
        name: 'Coal'
    },
    combatShotgun: {
        name: 'Combat shotgun',
        recipe: {
            producedBy: 'assembler',
            units: 1,
            time: 10,
            ingredients: [
                [15, 'steelPlate'],
                [5, 'ironGearWheel'],
                [10, 'copperPlate'],
                [10, 'wood']
            ]
        }
    },
    concrete: {
        name: 'Concrete',
        recipe: {
            producedBy: 'assembler',
            units: 10,
            time: 10,
            ingredients: [
                [5, 'stoneBrick'],
                [1, 'ironOre'],
                [100, 'water']
            ]
        }
    },
    constantCombinator: {
        name: 'Constant combinator',
        recipe: {
            producedBy: 'assembler',
            units: 1,
            time: 0.5,
            ingredients: [
                [5, 'copperCable'],
                [2, 'electronicCircuit']
            ]
        }
    },
    constructionRobot: {
        name: 'Construction robot',
        recipe: {
            producedBy: 'assembler',
            units: 1,
            time: 0.5,
            ingredients: [
                [1, 'flyingRobotFrame'],
                [2, 'electronicCircuit']
            ]
        }
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
    deciderCombinator: {
        name: 'Decider combinator',
        recipe: {
            producedBy: 'assembler',
            units: 1,
            time: 0.5,
            ingredients: [
                [5, 'copperCable'],
                [5, 'electronicCircuit']
            ]
        }
    },
    efficiencyModule: {
        name: 'Efficiency module',
        recipe: {
            producedBy: 'assembler',
            units: 1,
            time: 15,
            ingredients: [
                [5, 'advancedCircuit'],
                [5, 'electronicCircuit']
            ]
        }
    },
    efficiencyModule2: {
        name: 'Efficiency module 2',
        recipe: {
            producedBy: 'assembler',
            units: 1,
            time: 30,
            ingredients: [
                [4, 'efficiencyModule'],
                [5, 'advancedCircuit'],
                [5, 'processingUnit']
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
        name: 'Electric furnace',
        recipe: {
            producedBy: 'assembler',
            units: 1,
            time: 5,
            ingredients: [
                [10, 'steelPlate'],
                [5, 'advancedCircuit'],
                [10, 'stoneBrick']
            ]
        }
    },
    electricMiningDrill: {
        name: 'Electric mining drill',
        recipe: {
            producedBy: 'assembler',
            units: 1,
            time: 2,
            ingredients: [
                [3, 'electronicCircuit'],
                [5, 'ironGearWheel'],
                [10, 'ironPlate']
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
    explosiveCannonShell: {
        name: 'Explosive cannon shell',
        recipe: {
            producedBy: 'assembler',
            units: 1,
            time: 8,
            ingredients: [
                [2, 'steelPlate'],
                [2, 'plasticBar'],
                [2, 'explosives']
            ]
        }
    },
    fastInserter: {
        name: 'Fast inserter',
        recipe: {
            producedBy: 'assembler',
            units: 1,
            time: 0.5,
            ingredients: [
                [2, 'electronicCircuit'],
                [2, 'ironPlate'],
                [1, 'inserter']
            ]
        }
    },
    fastSplitter: {
        name: 'Fast splitter',
        recipe: {
            producedBy: 'assembler',
            units: 1,
            time: 2,
            ingredients: [
                [1, 'splitter'],
                [10, 'ironGearWheel'],
                [10, 'electronicCircuit']
            ]
        }
    },
    fastTransportBelt: {
        name: 'Fast transport belt',
        recipe: {
            producedBy: 'assembler',
            units: 1,
            time: 0.5,
            ingredients: [
                [5, 'ironGearWheel'],
                [1, 'transportBelt']
            ]
        }
    },
    fastUndergroundBelt: {
        name: 'Fast underground belt',
        recipe: {
            producedBy: 'assembler',
            units: 2,
            time: 0.5,
            ingredients: [
                [40, 'ironGearWheel'],
                [2, 'undergroundBelt']
            ]
        }
    },
    filterInserter: {
        name: 'Filter inserter',
        recipe: {
            producedBy: 'assembler',
            units: 1,
            time: 0.5,
            ingredients: [
                [1, 'fastInserter'],
                [4, 'electronicCircuit']
            ]
        }
    },
    firearmMagazine: {
        name: 'Firearm magazine',
        recipe: {
            producedBy: 'assembler',
            units: 1,
            time: 1,
            ingredients: [
                [4, 'ironPlate']
            ]
        }
    },
    flamethrower: {
        name: 'Flamethrower',
        recipe: {
            producedBy: 'assembler',
            units: 1,
            time: 10,
            ingredients: [
                [5, 'steelPlate'],
                [10, 'ironGearWheel']
            ]
        }
    },
    flamethrowerAmmo: {
        name: 'Flamethrower ammo',
        recipe: {
            producedBy: 'chemicalPlant',
            units: 1,
            time: 6,
            ingredients: [
                [5, 'steelPlate'],
                [50, 'lightOil'],
                [50, 'heavyOil']
            ]
        }
    },
    flamethrowerTurret: {
        name: 'Flamethrower turret',
        recipe: {
            producedBy: 'assembler',
            units: 1,
            time: 20,
            ingredients: [
                [30, 'steelPlate'],
                [15, 'ironGearWheel'],
                [10, 'pipe'],
                [5, 'engineUnit']
            ]
        }
    },
    fluidWagon: {
        name: 'Fluid wagon',
        recipe: {
            producedBy: 'assembler',
            units: 1,
            time: 1.5,
            ingredients: [
                [10, 'ironGearWheel'],
                [16, 'steelPlate'],
                [8, 'pipe'],
                [3, 'storageTank']
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
    gate: {
        name: 'Gate',
        recipe: {
            producedBy: 'assembler',
            units: 1,
            time: 0.5,
            ingredients: [
                [1, 'stoneWall'],
                [2, 'steelPlate'],
                [2, 'electronicCircuit']
            ]
        }
    },
    greenWire: {
        name: 'Green wire',
        recipe: {
            producedBy: 'assembler',
            units: 1,
            time: 0.5,
            ingredients: [
                [1, 'electronicCircuit'],
                [1, 'copperCable']
            ]
        }
    },
    grenade: {
        name: 'Grenade',
        recipe: {
            producedBy: 'assembler',
            units: 1,
            time: 8,
            ingredients: [
                [5, 'ironPlate'],
                [10, 'coal']
            ]
        }
    },
    gunTurret: {
        name: 'Gun turret',
        recipe: {
            producedBy: 'assembler',
            units: 1,
            time: 8,
            ingredients: [
                [10, 'ironGearWheel'],
                [10, 'copperPlate'],
                [20, 'ironPlate']
            ]
        }
    },
    hazardConcrete: {
        name: 'Hazard concrete',
        recipe: {
            producedBy: 'assembler',
            units: 10,
            time: 0.25,
            ingredients: [
                [10, 'concrete']
            ]
        }
    },
    heavyArmor: {
        name: 'Heavy armor',
        recipe: {
            producedBy: 'assembler',
            units: 1,
            time: 8,
            ingredients: [
                [100, 'copperPlate'],
                [50, 'steelPlate']
            ]
        }
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
        name: 'Inserter',
        recipe: {
            producedBy: 'assembler',
            units: 1,
            time: 0.5,
            ingredients: [
                [1, 'electronicCircuit'],
                [1, 'ironGearWheel'],
                [1, 'ironPlate']
            ]
        }
    },
    ironAxe: {
        name: 'Iron axe',
        recipe: {
            producedBy: 'assembler',
            units: 1,
            time: 0.5,
            ingredients: [
                [2, 'ironStick'],
                [3, 'ironPlate']
            ]
        }
    },
    ironChest: {
        name: 'Iron chest',
        recipe: {
            producedBy: 'assembler',
            units: 1,
            time: 0.5,
            ingredients: [
                [8, 'ironPlate']
            ]
        }
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
    lab: {
        name: 'Lab',
        recipe: {
            producedBy: 'assembler',
            units: 1,
            time: 3,
            ingredients: [
                [10, 'electronicCircuit'],
                [10, 'ironGearWheel'],
                [4, 'transportBelt']
            ]
        }
    },
    lamp: {
        name: 'Lamp',
        recipe: {
            producedBy: 'assembler',
            units: 1,
            time: 0.5,
            ingredients: [
                [1, 'electronicCircuit'],
                [3, 'ironStick'],
                [1, 'ironPlate']
            ]
        }
    },
    landfill: {
        name: 'Landfill',
        recipe: {
            producedBy: 'assembler',
            units: 1,
            time: 0.5,
            ingredients: [
                [20, 'stone']
            ]
        }
    },
    lightArmor: {
        name: 'Light armor',
        recipe: {
            producedBy: 'assembler',
            units: 1,
            time: 3,
            ingredients: [
                [40, 'ironPlate']
            ]
        }
    },
    lightOil: {
        name: 'Light oil'
    },
    locomotive: {
        name: 'Locomotive',
        recipe: {
            producedBy: 'assembler',
            units: 1,
            time: 0.5,
            ingredients: [
                [20, 'engineUnit'],
                [10, 'electronicCircuit'],
                [30, 'steelPlate']
            ]
        }
    },
    logisticRobot: {
        name: 'Logistic robot',
        recipe: {
            producedBy: 'assembler',
            units: 1,
            time: 0.5,
            ingredients: [
                [1, 'flyingRobotFrame'],
                [2, 'advancedCircuit']
            ]
        }
    },
    longHandedInserter: {
        name: 'Long handed inserter',
        recipe: {
            producedBy: 'assembler',
            units: 1,
            time: 0.5,
            ingredients: [
                [1, 'ironGearWheel'],
                [1, 'ironPlate'],
                [1, 'inserter']
            ]
        }
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
    mediumElectricPole: {
        name: 'Medium electric pole',
        recipe: {
            producedBy: 'assembler',
            units: 1,
            time: 0.5,
            ingredients: [
                [2, 'steelPlate'],
                [2, 'copperPlate']
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
    modularArmor: {
        name: 'Modular armor',
        recipe: {
            producedBy: 'assembler',
            units: 1,
            time: 15,
            ingredients: [
                [30, 'advancedCircuit'],
                [50, 'steelPlate']
            ]
        }
    },
    nightvision: {
        name: 'Nightvision',
        recipe: {
            producedBy: 'assembler',
            units: 1,
            time: 10,
            ingredients: [
                [5, 'advancedCircuit'],
                [10, 'steelPlate']
            ]
        }
    },
    offshorePump: {
        name: 'Offshore pump',
        recipe: {
            producedBy: 'assembler',
            units: 1,
            time: 0.5,
            ingredients: [
                [2, 'electronicCircuit'],
                [1, 'pipe'],
                [1, 'ironGearWheel']
            ]
        }
    },
    oilRefinery: {
        name: 'Oil refinery',
        recipe: {
            producedBy: 'assembler',
            units: 1,
            time: 10,
            ingredients: [
                [15, 'steelPlate'],
                [10, 'ironGearWheel'],
                [10, 'stoneBrick'],
                [10, 'electronicCircuit'],
                [10, 'pipe']
            ]
        }
    },
    passiveProviderChest: {
        name: 'Passive provider chest',
        recipe: {
            producedBy: 'assembler',
            units: 1,
            time: 0.5,
            ingredients: [
                [1, 'steelChest'],
                [3, 'electronicCircuit'],
                [1, 'advancedCircuit']
            ]
        }
    },
    personalRoboport: {
        name: 'Personal roboport',
        recipe: {
            producedBy: 'assembler',
            units: 1,
            time: 10,
            ingredients: [
                [10, 'advancedCircuit'],
                [40, 'ironGearWheel'],
                [20, 'steelPlate'],
                [45, 'battery']
            ]
        }
    },
    petroleumGas: {
        name: 'Petroleum gas'
    },
    piercingRoundsMagazine: {
        name: 'Piercing rounds magazine',
        recipe: {
            producedBy: 'assembler',
            units: 1,
            time: 3,
            ingredients: [
                [1, 'firearmMagazine'],
                [1, 'steelPlate'],
                [5, 'copperPlate']
            ]
        }
    },
    pipe: {
        name: 'Pipe',
        recipe: {
            producedBy: 'assembler',
            units: 1,
            time: 0.5,
            ingredients: [
                [1, 'ironPlate']
            ]
        }
    },
    pipeToGround: {
        name: 'Pipe to ground',
        recipe: {
            producedBy: 'assembler',
            units: 2,
            time: 0.5,
            ingredients: [
                [10, 'pipe'],
                [5, 'ironPlate']
            ]
        }
    },
    pistol: {
        name: 'Pistol',
        recipe: {
            producedBy: 'assembler',
            units: 1,
            time: 5,
            ingredients: [
                [5, 'copperPlate'],
                [5, 'ironPlate']
            ]
        }
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
    poisonCapsule: {
        name: 'Poison capsule',
        recipe: {
            producedBy: 'assembler',
            units: 1,
            time: 8,
            ingredients: [
                [3, 'steelPlate'],
                [3, 'electronicCircuit'],
                [10, 'coal']
            ]
        }
    },
    portableSolarPanel: {
        name: 'Portable solar panel',
        recipe: {
            producedBy: 'assembler',
            units: 1,
            time: 10,
            ingredients: [
                [5, 'solarPanel'],
                [1, 'advancedCircuit'],
                [5, 'steelPlate']
            ]
        }
    },
    powerArmor: {
        name: 'Power armor',
        recipe: {
            producedBy: 'assembler',
            units: 1,
            time: 20,
            ingredients: [
                [40, 'processingUnit'],
                [20, 'electricEngineUnit'],
                [40, 'steelPlate']
            ]
        }
    },
    powerSwitch: {
        name: 'Power switch',
        recipe: {
            producedBy: 'assembler',
            units: 1,
            time: 2,
            ingredients: [
                [5, 'ironPlate'],
                [5, 'copperCable'],
                [2, 'electronicCircuit']
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
    productivityModule: {
        name: 'Productivity module',
        recipe: {
            producedBy: 'assembler',
            units: 1,
            time: 15,
            ingredients: [
                [5, 'advancedCircuit'],
                [5, 'electronicCircuit']
            ]
        }
    },
    productivityModule2: {
        name: 'Productivity module 2',
        recipe: {
            producedBy: 'assembler',
            units: 1,
            time: 30,
            ingredients: [
                [4, 'productivityModule'],
                [5, 'advancedCircuit'],
                [5, 'processingUnit']
            ]
        }
    },
    programmableSpeaker: {
        name: 'Programmable speaker',
        recipe: {
            producedBy: 'assembler',
            units: 1,
            time: 2,
            ingredients: [
                [5, 'ironPlate'],
                [5, 'copperCable'],
                [4, 'electronicCircuit']
            ]
        }
    },
    pump: {
        name: 'Pump',
        recipe: {
            producedBy: 'assembler',
            units: 1,
            time: 2,
            ingredients: [
                [1, 'engineUnit'],
                [1, 'steelPlate'],
                [1, 'pipe']
            ]
        }
    },
    pumpjack: {
        name: 'Pumpjack',
        recipe: {
            producedBy: 'assembler',
            units: 1,
            time: 5,
            ingredients: [
                [5, 'steelPlate'],
                [10, 'ironGearWheel'],
                [5, 'electronicCircuit'],
                [10, 'pipe']
            ]
        }
    },
    radar: {
        name: 'Radar',
        recipe: {
            producedBy: 'assembler',
            units: 1,
            time: 0.5,
            ingredients: [
                [5, 'electronicCircuit'],
                [5, 'ironGearWheel'],
                [10, 'ironPlate']
            ]
        }
    },
    railSignal: {
        name: 'Rail signal',
        recipe: {
            producedBy: 'assembler',
            units: 1,
            time: 0.5,
            ingredients: [
                [1, 'electronicCircuit'],
                [5, 'ironPlate']
            ]
        }
    },
    railChainSignal: {
        name: 'Rail chain signal',
        recipe: {
            producedBy: 'assembler',
            units: 1,
            time: 0.5,
            ingredients: [
                [1, 'electronicCircuit'],
                [5, 'ironPlate']
            ]
        }
    },
    rawWood: {
        name: 'Raw wood'
    },
    redWire: {
        name: 'Red wire',
        recipe: {
            producedBy: 'assembler',
            units: 1,
            time: 0.5,
            ingredients: [
                [1, 'electronicCircuit'],
                [1, 'copperCable']
            ]
        }
    },
    repairPack: {
        name: 'Repair pack',
        recipe: {
            producedBy: 'assembler',
            units: 1,
            time: 0.5,
            ingredients: [
                [2, 'electronicCircuit'],
                [2, 'ironGearWheel']
            ]
        }
    },
    roboport: {
        name: 'Roboport',
        recipe: {
            producedBy: 'assembler',
            units: 1,
            time: 10,
            ingredients: [
                [45, 'steelPlate'],
                [45, 'ironGearWheel'],
                [45, 'advancedCircuit']
            ]
        }
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
    shotgun: {
        name: 'Shotgun',
        recipe: {
            producedBy: 'assembler',
            units: 1,
            time: 10,
            ingredients: [
                [15, 'ironPlate'],
                [5, 'ironGearWheel'],
                [10, 'copperPlate'],
                [5, 'wood']
            ]
        }
    },
    shotgunShells: {
        name: 'Shotgun shells',
        recipe: {
            producedBy: 'assembler',
            units: 1,
            time: 3,
            ingredients: [
                [2, 'copperPlate'],
                [2, 'ironPlate']
            ]
        }
    },
    slowdownCapsule: {
        name: 'Slowdown capsule',
        recipe: {
            producedBy: 'assembler',
            units: 1,
            time: 8,
            ingredients: [
                [2, 'steelPlate'],
                [2, 'electronicCircuit'],
                [5, 'coal']
            ]
        }
    },
    smallElectricPole: {
        name: 'Small electric pole',
        recipe: {
            producedBy: 'assembler',
            units: 2,
            time: 0.5,
            ingredients: [
                [2, 'wood'],
                [2, 'copperCable']
            ]
        }
    },
    solarPanel: {
        name: 'Solar panel',
        recipe: {
            producedBy: 'assembler',
            units: 1,
            time: 10,
            ingredients: [
                [5, 'steelPlate'],
                [15, 'electronicCircuit'],
                [5, 'copperPlate']
            ]
        }
    },
    solidFuel: {
        name: 'Solid fuel',
        recipe: {
            producedBy: 'chemicalPlant',
            units: 1,
            time: 3,
            ingredients: [
                [10, 'lightOil'],
                [20, 'heavyOil'],
                [20, 'petroleumGas']
            ]
        }
    },
    speedModule: {
        name: 'Speed module',
        recipe: {
            producedBy: 'assembler',
            units: 1,
            time: 15,
            ingredients: [
                [5, 'advancedCircuit'],
                [5, 'electronicCircuit']
            ]
        }
    },
    speedModule2: {
        name: 'Speed module 2',
        recipe: {
            producedBy: 'assembler',
            units: 1,
            time: 30,
            ingredients: [
                [4, 'speedModule'],
                [5, 'advancedCircuit'],
                [5, 'processingUnit']
            ]
        }
    },
    splitter: {
        name: 'Splitter',
        recipe: {
            producedBy: 'assembler',
            units: 1,
            time: 1,
            ingredients: [
                [5, 'electronicCircuit'],
                [5, 'ironPlate'],
                [4, 'transportBelt']
            ]
        }
    },
    stackInserter: {
        name: 'Stack inserter',
        recipe: {
            producedBy: 'assembler',
            units: 1,
            time: 0.5,
            ingredients: [
                [15, 'ironGearWheel'],
                [15, 'electronicCircuit'],
                [1, 'advancedCircuit'],
                [1, 'fastInserter']
            ]
        }
    },
    stackFilterInserter: {
        name: 'Stack filter inserter',
        recipe: {
            producedBy: 'assembler',
            units: 1,
            time: 0.5,
            ingredients: [
                [1, 'stackInserter'],
                [5, 'electronicCircuit']
            ]
        }
    },
    steamEngine: {
        name: 'Steam engine',
        recipe: {
            producedBy: 'assembler',
            units: 1,
            time: 0.5,
            ingredients: [
                [8, 'ironGearWheel'],
                [5, 'pipe'],
                [10, 'ironPlate']
            ]
        }
    },
    steelAxe: {
        name: 'Steel axe',
        recipe: {
            producedBy: 'assembler',
            units: 1,
            time: 0.5,
            ingredients: [
                [5, 'steelPlate'],
                [2, 'ironStick']
            ]
        }
    },
    steelChest: {
        name: 'Steel chest',
        recipe: {
            producedBy: 'assembler',
            units: 1,
            time: 0.5,
            ingredients: [
                [8, 'steelPlate']
            ]
        }
    },
    steelFurnace: {
        name: 'Steel furnace',
        recipe: {
            producedBy: 'assembler',
            units: 1,
            time: 3,
            ingredients: [
                [6, 'steelPlate'],
                [10, 'stoneBrick']
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
    stoneFurnace: {
        name: 'Stone furnace',
        recipe: {
            producedBy: 'assembler',
            units: 1,
            time: 0.5,
            ingredients: [
                [5, 'stone']
            ]
        }
    },
    stoneWall: {
        name: 'Stone wall',
        recipe: {
            producedBy: 'assembler',
            units: 1,
            time: 0.5,
            ingredients: [
                [5, 'stoneBrick']
            ]
        }
    },
    storageChest: {
        name: 'Storage chest',
        recipe: {
            producedBy: 'assembler',
            units: 1,
            time: 0.5,
            ingredients: [
                [1, 'steelChest'],
                [3, 'electronicCircuit'],
                [1, 'advancedCircuit']
            ]
        }
    },
    storageTank: {
        name: 'Storage tank',
        recipe: {
            producedBy: 'assembler',
            units: 1,
            time: 3,
            ingredients: [
                [20, 'ironPlate'],
                [5, 'steelPlate']
            ]
        }
    },
    straightRail: {
        name: 'Straight rail',
        recipe: {
            producedBy: 'assembler',
            units: 2,
            time: 0.5,
            ingredients: [
                [1, 'stone'],
                [1, 'ironStick'],
                [1, 'steelPlate']
            ]
        }
    },
    submachineGun: {
        name: 'Submachine gun',
        recipe: {
            producedBy: 'assembler',
            units: 1,
            time: 10,
            ingredients: [
                [10, 'ironGearWheel'],
                [5, 'copperPlate'],
                [10, 'ironPlate']
            ]
        }
    },
    substation: {
        name: 'Substation',
        recipe: {
            producedBy: 'assembler',
            units: 1,
            time: 0.5,
            ingredients: [
                [10, 'steelPlate'],
                [5, 'advancedCircuit'],
                [5, 'copperPlate']
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
    tank: {
        name: 'Tank',
        recipe: {
            producedBy: 'assembler',
            units: 1,
            time: 0.5,
            ingredients: [
                [32, 'engineUnit'],
                [50, 'steelPlate'],
                [15, 'ironGearWheel'],
                [10, 'advancedCircuit']
            ]
        }
    },
    trainStop: {
        name: 'Train stop',
        recipe: {
            producedBy: 'assembler',
            units: 1,
            time: 0.5,
            ingredients: [
                [5, 'electronicCircuit'],
                [10, 'ironPlate'],
                [3, 'steelPlate']
            ]
        }
    },
    transportBelt: {
        name: 'Transport belt',
        recipe: {
            producedBy: 'assembler',
            units: 2,
            time: 0.5,
            ingredients: [
                [1, 'ironPlate'],
                [1, 'ironGearWheel']
            ]
        }
    },
    undergroundBelt: {
        name: 'Underground belt',
        recipe: {
            producedBy: 'assembler',
            units: 2,
            time: 1,
            ingredients: [
                [10, 'ironPlate'],
                [5, 'transportBelt']
            ]
        }
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
