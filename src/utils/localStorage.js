/*global localStorage*/

export const loadState = (key = 'state', def = undefined) => {
    const data = localStorage.getItem(key);

    return data ? JSON.parse(data) : def
}

export const saveState = (state, key = 'state') => {
    const data = JSON.stringify(state);
    localStorage.setItem(key, data);
}