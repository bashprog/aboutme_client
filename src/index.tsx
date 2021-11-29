import React from 'react';
import ReactDOM from 'react-dom';

import './main.sass';

import TestComponent from "./components/TestComponent/TestComponent";

const App: React.FC = () => {
    return (
        <>
            <TestComponent/>
        </>
    )
};

ReactDOM.render(<App/>, document.querySelector('#app'));