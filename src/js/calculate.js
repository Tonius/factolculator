import ITEMS from 'src/items';


const getItemTree = function(item, perMinute, assemblerSpeed, furnaceSpeed, totals) {
    let itemData = ITEMS[item];

    let crafting = null;

    if (itemData.recipe !== undefined) {
        let craftingSpeed = 1;

        switch (itemData.recipe.producedBy) {
        case 'assembler':
            craftingSpeed = assemblerSpeed;
            break;
        case 'furnace':
            craftingSpeed = furnaceSpeed;
            break;
        default:
            // no-op
        }

        crafting = {
            producedBy: itemData.recipe.producedBy,
            producerAmount: ((itemData.recipe.time / itemData.recipe.units) / craftingSpeed) / (60 / perMinute),
            ingredients: itemData.recipe.ingredients.map(({item: ingrItem, amount}) => {
                return getItemTree(
                    ingrItem,
                    perMinute / itemData.recipe.units * amount,
                    assemblerSpeed,
                    furnaceSpeed,
                    totals
                );
            })
        };
    }

    let totalItem = totals[item];

    if (totalItem !== undefined) {
        totals[item] = {
            ...totalItem,
            perMinute: totalItem.perMinute + perMinute
        };

        if (crafting !== null) {
            totals[item].crafting.producerAmount += crafting.producerAmount;
        }
    } else {
        totals[item] = {
            itemName: itemData.name,
            perMinute,
            crafting: crafting !== null ? {
                producedBy: crafting.producedBy,
                producerAmount: crafting.producerAmount
            } : null
        };
    }

    return {
        item,
        itemName: itemData.name,
        perMinute,
        crafting
    };
};

export default function calculate(item, perMinute, assemblerSpeed, furnaceSpeed) {
    let totals = {};
    let tree = getItemTree(item, perMinute, assemblerSpeed, furnaceSpeed, totals);

    return {tree, totals};
}
