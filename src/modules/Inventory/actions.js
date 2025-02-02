import Helpers from './helpers'

const change = (state, payload) => {
    const { item, amount } = payload
    const { inventory } = state
    if (!Helpers.getItemMeta(item)) return state
    const itemExists = inventory.find((i) => i.id === item)
    if (!itemExists) {
        if (amount < 0) {
            return state
        }
        inventory.push({ id: item, amount: amount })
    } else {
        if (itemExists.amount + amount < 0) {
            itemExists.amount = 0
        } else {
            itemExists.amount += amount
        }

        // Remove the Item if it's amount is Zero
        if (itemExists.amount === 0) {
            state.inventory = inventory.filter((i) => i.id !== item)
        }
    }
    return state
}

const InventoryActions = {
    change,
}

export default InventoryActions
