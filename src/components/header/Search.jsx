/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import './headline.scss';
import { Input } from 'chayns-components/lib';

const Search = (searchString, setSearchString) => {
    return (
        <div className="searching">
            <Input
                className="input"
                type="text"
                id="search"
                style={{ width: '200px', border: 'none' }}
                placeholder="Suche"
                value={searchString}
                onChange={setSearchString}
            />
            <i className="fal fa-search" id="searchIcon" style={{ color: '#858585' }}/>
        </div>
    );
};
export default Search;
