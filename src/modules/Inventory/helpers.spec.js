import Helpers from './helpers'
import Actions from './actions'
import Items from '../../content/items'

describe('Inventory Module Helpers - hasItem', () => {
    let state = {}

    beforeEach(() => {
        state = {
            inventory: [],
        }
    })

    test('Check that an item exists that is not in inventory', () => {
        const hasItem = Helpers.hasItem(state, 'wood', 1)
        expect(hasItem).toBe(false)
    })

    test('Add and Item and finds that it exists', () => {
        state.inventory.push({ id: 'wood', amount: 1 })
        const hasItem = Helpers.hasItem(state, 'wood', 1)
        expect(hasItem).toBe(true)
    })
})

describe('Inventory Module Helpers - findItem', () => {
    let state = {}

    beforeEach(() => {
        state = {
            inventory: [],
        }
    })

    test('Find an item that does not exist', () => {
        const item = Helpers.findItem(state, 'wood')
        expect(item).toBe(undefined)
    })

    test('Find an item that does exist', () => {
        state.inventory.push({ id: 'wood', amount: 1 })
        const item = Helpers.findItem(state, 'wood')
        expect(item).toStrictEqual({ id: 'wood', amount: 1 })
    })
})

describe('Inventory Module Helpers - getItemsByCategory', () => {
    let state = {}

    beforeEach(() => {
        state = {
            inventory: [],
        }
    })

    test('Get Items by Category that do not exist', () => {
        const items = Helpers.getItemsByCategory(state, 'Test Category')
        expect(items).toStrictEqual([])
    })

    test('Get Items by Category that do exist', () => {
        state = Actions.change(state, { item: 'wood', amount: 1 })
        const items = Helpers.getItemsByCategory(state, Items.ItemCategories.RAW_RESOURCES)
        expect(items).toStrictEqual([{ id: 'wood', amount: 1 }])
    })
})

describe('Inventory Module Helpers - getItemMeta', () => {
    test('Get Item Meta that does not exist', () => {
        const itemMeta = Helpers.getItemMeta('Test Item')
        expect(itemMeta).toBe(undefined)
    })

    test('Get Item Meta that does exist', () => {
        const itemMeta = Helpers.getItemMeta('wood')
        expect(itemMeta).toStrictEqual(Items.Data[0])
    })
})
