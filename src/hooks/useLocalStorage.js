import React, { useState } from 'react';

const useLocalStorage = (itemName) => {
    const localStorageItem = localStorage.getItem(itemName);
    let arrayItem;

    if (!localStorageItem) {
        localStorage.setItem(itemName, "");
        arrayItem = [];
    } else {
        arrayItem = JSON.parse(localStorageItem);
    }

    /* ----- State -----*/
    const [item, setItem] = useState(arrayItem);

    /* ----- Functions -----*/
    const saveItem = (newItem) => {
        const ItemToString = JSON.stringify(newItem);

        localStorage.setItem(itemName, ItemToString);
        setItem(newItem);
    }

    return [item, saveItem];
}

export default useLocalStorage;