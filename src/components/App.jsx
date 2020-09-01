import { hot } from 'react-hot-loader/root';
import React, { PureComponent } from 'react';

// Components
import Headline from './header/headline/Headline';
import Intro from './header/intro/Intro';
import Todos from './todos/Todos';

// We use PureComponent instead of Component because it handles the shouldComponentUpdate method for us.
// If we want to define our own shouldComponentUpdate logic we have to use Component instead of PureComponent.
class App extends PureComponent {
    render() {
        return (
            <>
                <Headline headline="My favorite sites"/>
                <Intro intro="Auf dieser Seite wirst du auf jeden Fall fündig! Ob es das nächste Restaurant oder der nächste Sportverein ist, es ist für jeden etwas dabei. Meine persönlichen Favoriten habe ich sogar für dich herausgesucht. Also los geht es und lass dich inspierieren. Viel Spaß beim Stöbern!"/>
                <Todos/>
            </>
        );
    }
}

export default App;
export const HotApp = hot(App);
