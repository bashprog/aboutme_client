import React from 'react';
import ReactDOM from 'react-dom';

import './main.sass';

//Components
import HashTag from "./components/HashTag/HashTag";

//Containers
import NavBarContainer from "./containers/NavBarContainer";

const App: React.FC = () => {
    return (
        <>
            <HashTag/>
            <NavBarContainer/>
        </>
    )
};

ReactDOM.render(<App/>, document.querySelector('#app'));