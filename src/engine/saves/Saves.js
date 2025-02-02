import cloneDeep from 'lodash.clonedeep'

import V1 from './versions/v1'
import GlobalConfigs from '../../configs/global'
const DEFAULT_SAVE = cloneDeep(V1.DefaultSave)

const version = (json) => {
    let state = json

    // Version 0 to 1
    if (state.version === 0) {
        state = cloneDeep(V1.convertPreviousVersion(state))
    }

    return state
}

const load = () => {
    if (GlobalConfigs.IS_WEB) {
        return new Promise((res) => {
            const json = localStorage.getItem('save')
            if (json) res(cloneDeep(patch(version(JSON.parse(json)), DEFAULT_SAVE)))
            res(cloneDeep(DEFAULT_SAVE))
        })
    }
    return new Promise((res) => {
        window.api.load().then((json) => {
            if (json) res(patch(version(json), DEFAULT_SAVE))
            res(cloneDeep(DEFAULT_SAVE))
        })
    })
}

const save = (state) => {
    if (GlobalConfigs.IS_WEB) {
        console.log(state)
        localStorage.setItem('save', JSON.stringify(state))
        return
    }
    window.api.save(state)
}

const remove = () => {
    if (GlobalConfigs.IS_WEB) {
        localStorage.removeItem('save')
        return
    }
    window.api.remove()
}

const patch = (json, defaultJSON) => {
    function isObject(item) {
        return item && typeof item === 'object' && !Array.isArray(item)
    }

    for (let key in json) {
        if (!defaultJSON.hasOwnProperty(key)) {
            delete json[key]
        } else if (isObject(json[key]) && isObject(defaultJSON[key])) {
            patch(json[key], defaultJSON[key])
        }
    }

    for (let key in defaultJSON) {
        if (!json.hasOwnProperty(key)) {
            json[key] = defaultJSON[key]
        } else if (isObject(json[key]) && isObject(defaultJSON[key])) {
            patch(json[key], defaultJSON[key])
        }
    }
    return json
}

const Saves = {
    version,
    load,
    save,
    remove,
    patch,
}

export default Saves
