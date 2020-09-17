import { LOCAL_STORAGE_KEY } from '../../constants/localstorage';

export const getTodosFromLocalStorage = async () => new Promise((resolve) => {
    const todos = localStorage.getItem(LOCAL_STORAGE_KEY);

    if (todos) {
        resolve({ status: 200, data: JSON.parse(todos) });
    } else {
        resolve({ status: 200, data: JSON.parse('[]') });
    }
});

export const getChaynsSites = async (skip, searchString = 'Ahaus', search, setArrayStart) => {
    chayns.showWaitCursor();
    let data;
    if (searchString !== '') {
        data = await fetch(`https://chayns2.tobit.com/SiteSearchApi/location/search/${searchString}/?skip=${skip}&take=25`);
    } else {
        data = await fetch(`https://chayns2.tobit.com/SiteSearchApi/location/search/${search}/?skip=${skip}&take=25`);
    }
    const arrayData = await data.json();
    if (arrayData !== null) {
        setArrayStart((lastArray) => lastArray.concat(arrayData));
    }
    chayns.hideWaitCursor();
};
