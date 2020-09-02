import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './headline.scss';
import Search from './Search';

// Use PureComponent instead of Component because it handles the shouldComponentUpdate method for u.
// If u want to define ur own shouldComponentUpdate logic use Component instead of PureComponent.
class Headline extends PureComponent {
    constructor(searchString, setSearchString) {
        super();
        this.searchString = searchString;
        this.setSearchString = setSearchString;
        this.state = {
        };
    }

    render() {
        const { headline } = this.props;
        return (
            <div className="headline">
                <div>
                    <h1>{headline}</h1>
                </div>
                <Search searchString={this.searchString} setSearchString={this.setSearchString}/>
            </div>
        );
    }
}

Headline.propTypes = {
    headline: PropTypes.string.isRequired,
};

export default Headline;
