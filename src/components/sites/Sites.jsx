/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import '../list/list.scss';

function Sites(props) {
    return (
        <div className="element">
            <div className="image" onClick={() => { chayns.openUrlInBrowser(`https://chayns.net/${props.siteInfo.siteId}`); }} style={{ backgroundImage: `url(https://sub60.tobit.com/l/${props.siteInfo.locationId}?size=70)` }}/>
            <div>{props.siteInfo.appstoreName}</div>
        </div>
    );
}
export default Sites;
