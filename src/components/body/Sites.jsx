/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import './list.scss';

const Sites = (props) => {
    const [source, setSource] = useState('152342');
    const [name] = useState(`${props.siteInfo.locationName}`);
    const image = async () => {
        try {
            /* if (name.length >= 13) {
                setName(props.siteInfo.appstoreName.substring(0, 10));
                // name += '...';
            } */
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
            <div className="appStoreName">{name}</div>
        </div>
    );
};
export default Sites;
