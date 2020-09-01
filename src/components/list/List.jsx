import React, { PureComponent } from 'react';
// Styles
import './list.scss';
// chayns components
import { Button } from 'chayns-components/lib';
import chaynsSites from '../chaynsSites';
import Sites from '../Sites';

class List extends PureComponent {
    constructor() {
        super();
        this.state = {
            siteCounter: 0,
            searchString: 'Ahaus',
            arrayData: chaynsSites,
        };
        this.getData = this.getData.bind(this);
        // this.showData = this.showData.bind(this);
    }

    getData() {
        // chayns.showWaitCursor();
        fetch(`https://chayns1.tobit.com/TappApi/Site/SlitteApp?SearchString=${this.state.searchString}&Skip=${this.state.siteCounter}&Take=25`)
            .then((response) => response.json()).then((json) => {
                this.setState((prevState) => ({ 
                    arrayData: prevState.arrayData.concat(json.Data),
                    siteCounter: prevState.siteCounter + 25,
                }));
            }).catch(() => {});
    }

    render() {
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

/* <div className="element">
                        <img id="bamboo" src="https://sub60.tobit.com/l/1?size=70" alt=""/>
                        <p>Bamboo!</p>
                    </div>
                    <div className="element">
                        <img id="offsite" src="https://sub60.tobit.com/l/3?size=70" alt=""/>
                        <p>Offsite</p>
                    </div>
                    <div className="element">
                        <img id="grill" src="https://sub60.tobit.com/l/177564?size=70" alt=""/>
                        <p>Wüllener...</p>
                    </div>
                    <div className="element">
                        <img id="cityAhaus" src="https://sub60.tobit.com/l/125979?size=70" alt=""/>
                        <p>Stadt Ahaus</p>
                    </div>
                    <div className="element">
                        <img id="tkwy" src="https://sub60.tobit.com/l/240?size=70" alt=""/>
                        <p>TKWY</p>
                    </div>
                    <div className="element">
                        <img id="pool" src="https://sub60.tobit.com/l/85733?size=70" alt=""/>
                        <p>AquaAhaus</p>
                    </div>
                    <div className="element">
                        <img id="bookTrade" src="https://sub60.tobit.com/l/183123?size=70" alt=""/>
                        <p>BookTrade</p>
                    </div>
                    <div className="element">
                        <img id="iceCream" src="https://sub60.tobit.com/l/183128?size=70" alt=""/>
                        <p>Eiszeit</p>
                    </div>
                    <div className="element">
                        <img id="pizza" src="https://sub60.tobit.com/l/18968?size=70" alt=""/>
                        <p>Jeckys Pi...</p>
                    </div>
                    <div className="element">
                        <img id="computer" src="https://sub60.tobit.com/l/183124?size=70" alt=""/>
                        <p>Computer...</p>
                    </div> */
