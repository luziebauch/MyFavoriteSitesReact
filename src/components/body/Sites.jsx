/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import './list.scss';

function Sites(props) {
    const [source, setSource] = useState('152342');
    const image = async () => {
        try {
            const img = await fetch(`https://sub60.tobit.com/l/${props.siteInfo.locationId}?size=70`);
            if (img.status === 200) {
                setSource(props.siteInfo.locationId);
            }
        } catch {
            console.log('Image not found');
        }
    };
    useEffect(() => {
        image();
    }, []);

    return (
        <div className="element">
            <img
                className="image"
                onClick={() => { chayns.openUrlInBrowser(`https://chayns.net/${props.siteInfo.siteId}`); }}
                src={`https://sub60.tobit.com/l/${source}?size=70`}
                alt="bla"
            />
            <div>{props.siteInfo.appstoreName}</div>
        </div>
    );
}
export default Sites;
