/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect } from 'react';
// Styles
import './list.scss';
// chayns components
import { Button } from 'chayns-components/lib';
import chaynsSites from './chaynsSites';
import Sites from './Sites';

const Test = (searchString = 'Ahaus', setSearchString) => {
    let siteCounter = 0;
    const [arrayStart, setArrayStart] = useState(chaynsSites);
    const [timeout, setTimeOut] = useState(0);

    const getData = async () => {
        chayns.showWaitCursor();
        const data = await fetch(`https://chayns1.tobit.com/TappApi/Site/SlitteApp?SearchString=Ahaus&Skip=${siteCounter}&Take=25`);
        const formatedData = await data.json();
        const arrayData = await formatedData.Data;
        if (data !== null) {
            setArrayStart((lastArray) => lastArray.concat(arrayData));
            siteCounter += 25;
        }
        console.log(arrayStart);
        chayns.hideWaitCursor();
    };

    /* useEffect(() => {
        console.log(searchString);
        if (timeout > 0) {
            clearTimeout(timeout);
        }
        setTimeout(() => {
            setArrayStart([]);
            getData();
        }, 800);
    }, [searchString]); */

    return (
        <div className="mainBody">
            <div className="list">
                {arrayStart.map((site) => <Sites key={site.locationId} siteInfo={site}/>)}
            </div>
            <div className="moreSites">
                <Button className="button" onClick={() => { getData(); }}>Mehr anzeigen</Button>
            </div>
        </div>
    );
};
export default Test;
