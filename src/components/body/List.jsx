/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect } from 'react';
// Styles
import './list.scss';
// chayns components
import { Button } from 'chayns-components/lib';
import chaynsSites from './chaynsSites';
import Sites from './Sites';

// eslint-disable-next-line react/prop-types
const List = ({ searchString = 'Ahaus' }) => {
    const [isFirstTime, setIsFirstTime] = useState(true);
    const [arrayStart, setArrayStart] = useState([]);
    const [arrayChayns] = useState(chaynsSites);
    const [timeout, setTimeOut] = useState(0);
    const [search, setSearch] = useState();
    const [buttonTime, setButtonTime] = useState(0);
    const [disabled, setDisabled] = useState(true);

    const getData = async (skip) => {
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

    const buttonPuffer = () => {
        if (buttonTime > 0) {
            clearTimeout(buttonTime);
        }
        setButtonTime(setTimeout(() => {
            getData(arrayStart.length);
        }, 500));
    };

    useEffect(() => {
        if (!isFirstTime) {
            if (timeout > 0) {
                clearTimeout(timeout);
            }
            setTimeOut(setTimeout(() => {
                if (searchString !== '') {
                    setArrayStart([]);
                    getData(0);
                    setSearch(searchString);
                }
                setTimeOut(0);
            }, 1000));
        } else {
            setIsFirstTime(false);
        }
    }, [searchString]);

    useEffect(() => {
        if (((arrayStart.length % 25) !== 0 || arrayStart.length === 0) && !isFirstTime) {
            setDisabled(true);
        } else {
            setDisabled(false);
        }
    }, [arrayStart]);

    return (
        <div className="mainBody">
            <div className="list">
                {arrayChayns.map((site) => <Sites key={site.locationId} siteInfo={site}/>)}
                {arrayStart.map((site) => <Sites key={site.locationId} siteInfo={site}/>)}
            </div>
            <div className="moreSites">
                {!disabled && (
                    <Button className="button" onClick={() => { buttonPuffer(); }}>Mehr anzeigen</Button>
                )}
            </div>
        </div>
    );
};
export default List;
