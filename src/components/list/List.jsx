/* eslint-disable react/destructuring-assignment */
import React, { PureComponent } from 'react';
// Styles
import './list.scss';
// chayns components
import { Button } from 'chayns-components/lib';
import chaynsSites from '../sites/chaynsSites';
import Sites from '../sites/Sites';

class List extends PureComponent {
    constructor() {
        super();
        this.state = {
            siteCounter: 0,
            searchString: 'Ahaus',
            arrayData: chaynsSites,
        };
        this.getData = this.getData.bind(this);
    }

    getData() {
        chayns.showWaitCursor();
        fetch(`https://chayns1.tobit.com/TappApi/Site/SlitteApp?SearchString=${this.state.searchString}&Skip=${this.state.siteCounter}&Take=25`)
            .then((response) => response.json()).then((json) => {
                this.setState((prevState) => ({
                    arrayData: prevState.arrayData.concat(json.Data),
                    siteCounter: prevState.siteCounter + 25,
                }));
            }).catch(() => {});
    }

    render() {
        chayns.hideWaitCursor();
        const data = this.state.arrayData;
        return (
            <div className="mainBody">
                <div className="list">
                    {data.map((site) => <Sites key={site.locationId} siteInfo={site}/>)}
                </div>
                <div className="moreSites">
                    <Button className="button" onClick={() => { this.getData(); }}>Mehr anzeigen</Button>
                </div>
            </div>
        );
    }
}
export default List;
