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

    const getData = async (skip) => {
        chayns.showWaitCursor();
        const data = await fetch(`https://chayns1.tobit.com/TappApi/Site/SlitteApp?SearchString=${searchString}&Skip=${skip}&Take=25`);
        const formatedData = await data.json();
        const arrayData = await formatedData.Data;
        if (data !== null) {
            setArrayStart((lastArray) => lastArray.concat(arrayData));
        }
        chayns.hideWaitCursor();
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
                } else {
                    setArrayStart([]);
                }
                setTimeOut(0);
            }, 800));
        } else {
            setIsFirstTime(false);
        }
    }, [searchString]);

    return (
        <div className="mainBody">
            <div className="list">
                {arrayChayns.map((site) => <Sites key={site.locationId} siteInfo={site}/>)}
                {arrayStart.map((site) => <Sites key={site.locationId} siteInfo={site}/>)}
            </div>
            <div className="moreSites">
                <Button className="button" onClick={() => { getData(arrayStart.length); }}>Mehr anzeigen</Button>
            </div>
        </div>
    );
};
export default List;
