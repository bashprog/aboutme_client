import React from 'react';
import ReactDOM from 'react-dom';

import './main.sass';

//Components
import HashTag from "./components/HashTag/HashTag";

//Containers
import BurgerContainer from "./containers/BurgerContainer";

const App: React.FC = () => {
    return (
        <>
            <HashTag/>
            <BurgerContainer/>
        </>
    )
};

ReactDOM.render(<App/>, document.querySelector('#app'));