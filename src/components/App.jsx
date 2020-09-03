import { hot } from 'react-hot-loader/root';
import React, { useState } from 'react';

// Components
import Headline from './header/Headline';
import Intro from './header/Intro';
import List from './body/List';
import Footer from './footer/footer';

// We use PureComponent instead of Component because it handles the shouldComponentUpdate method for us.
// If we want to define our own shouldComponentUpdate logic we have to use Component instead of PureComponent.
const App = () => {
    const [searchString, setSearchString] = useState();
    return (
        <>
            <Headline searchString={searchString} setSearchString={setSearchString} headline="My favorite sites"/>
            <Intro intro="Auf dieser Seite wirst du auf jeden Fall fündig! Ob es das nächste Restaurant oder der nächste Sportverein ist,
                es ist für jeden etwas dabei.Meine persönlichen Favoriten habe ich sogar für dich herausgesucht.
                Also los geht es und lass dich inspierieren. Viel Spaß beim Stöbern!"
            />
            <List searchString={searchString}/>
            <Footer/>
        </>
    );
};

export default App;
export const HotApp = hot(App);
