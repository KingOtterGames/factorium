import Inventory from './actions'

describe('Inventory Module Actions - change', () => {
    let state = {}

    beforeEach(() => {
        state = {
            inventory: [],
        }
    })

    test('Adds a new item when one does not exist', () => {
        const payload = { item: 'wood', amount: 1 }
        const newState = Inventory.change(state, payload)
        expect(newState).toStrictEqual({ inventory: [{ id: 'wood', amount: 1 }] })
    })

    test('Adds a item to an existing item in inventory', () => {
        const payload = { item: 'wood', amount: 1 }
        let newState = Inventory.change(state, payload)
        newState = Inventory.change(newState, payload)
        expect(newState).toStrictEqual({ inventory: [{ id: 'wood', amount: 2 }] })
    })

    test('Trys to add invalid item so returns unchanged inventory', () => {
        const payload = { item: 'testItemThatsBad', amount: 1 }
        const newState = Inventory.change(state, payload)
        expect(newState).toStrictEqual({ inventory: [] })
    })

    test('Trys to remove an item that does not exist, so changes nothing', () => {
        const payload = { item: 'wood', amount: -1 }
        const newState = Inventory.change(state, payload)
        expect(newState).toStrictEqual({ inventory: [] })
    })

    test('Removes an item fully from inventory', () => {
        // Add 2 to an Item
        let payload = { item: 'wood', amount: 2 }
        let newState = Inventory.change(state, payload)
        // Remove 1 from an Item
        payload = { item: 'wood', amount: -1 }
        newState = Inventory.change(newState, payload)
        expect(newState).toStrictEqual({ inventory: [{ id: 'wood', amount: 1 }] })
        // Fully Remove the Item
        payload = { item: 'wood', amount: -1 }
        newState = Inventory.change(newState, payload)
        expect(newState).toStrictEqual({ inventory: [] })
    })
})
