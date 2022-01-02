import React from 'react';
import ReactDOM from 'react-dom';

import './main.sass';

//Components
import HashTag from "./components/HashTag/HashTag";

//Containers
import NavBarContainer from "./containers/NavBarContainer";
<<<<<<< HEAD
import SkillsContainer from "./containers/SkillsContainer";
=======
>>>>>>> b7f18d36a3479a41a5e7b5e881afb7eda692a9fd

const App: React.FC = () => {
    return (
        <>
<<<<<<< HEAD
            <HashTag id={'opening-hashtag'}/>
            <NavBarContainer/>
            <SkillsContainer/>
=======
            <HashTag/>
            <NavBarContainer/>
>>>>>>> b7f18d36a3479a41a5e7b5e881afb7eda692a9fd
        </>
    )
};

ReactDOM.render(<App/>, document.querySelector('#app'));