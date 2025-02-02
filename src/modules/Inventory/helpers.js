import Items from '../../content/items'

const hasItem = (state, item, amount) => {
    if (state.inventory.find((i) => i.id === item && i.amount >= amount)) return true
    return false
}

const findItem = (state, item) => {
    return state.inventory.find((i) => i.id === item)
}

const getItemsByCategory = (state, category) => {
    return state.inventory.filter((i) => {
        const itemMeta = getItemMeta(i.id)
        return itemMeta.category === category
    })
}

const getItemMeta = (item) => {
    return Items.Data.find((i) => i.id === item)
}

/* Untested Code */
const getItemsMetaByCategory = (category) => {
    return Items.Data.filter((i) => i.category === category)
}

const InventoryHelpers = {
    hasItem,
    findItem,
    getItemsByCategory,
    getItemMeta,
    getItemsMetaByCategory,
}

export default InventoryHelpers
