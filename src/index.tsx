import React from 'react';
import ReactDOM from 'react-dom';

import './main.sass';

//Components
import HashTag from "./components/HashTag/HashTag";

const App: React.FC = () => {
    return (
        <>
            <HashTag/>
        </>
    )
};

ReactDOM.render(<App/>, document.querySelector('#app'));