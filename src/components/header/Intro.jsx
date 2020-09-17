/* eslint-disable react/prop-types */
import React from 'react';

// Use PureComponent instead of Component because it handles the shouldComponentUpdate method for u.
// If u want to define ur own shouldComponentUpdate logic use Component instead of PureComponent.
const Intro = ({ intro }) => (
    <div className="tapp__intro">
        {intro}
    </div>
);

export default Intro;
