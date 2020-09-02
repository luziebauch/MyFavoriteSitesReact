import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Input } from 'chayns-components/lib';
import './headline.scss';

// Use PureComponent instead of Component because it handles the shouldComponentUpdate method for u.
// If u want to define ur own shouldComponentUpdate logic use Component instead of PureComponent.
class Headline extends PureComponent {
    render() {
        const { headline } = this.props;

        return (
            <div className="headline">
                <div>
                    <h1>{headline}</h1>
                </div>
                <div className="searching">
                    <Input
                        className="input"
                        type="text"
                        id="search"
                        style={{ width: '200px', border: 'none' }}
                        placeholder="Suche"
                    />
                    <i className="fal fa-search" id="searchIcon" style={{ color: '#858585' }}/>
                </div>
            </div>
        );
    }
}

Headline.propTypes = {
    headline: PropTypes.string.isRequired,
};

export default Headline;
