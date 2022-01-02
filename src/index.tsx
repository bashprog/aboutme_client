import React from 'react';
import ReactDOM from 'react-dom';

import './main.sass';

//Components
import HashTag from "./components/HashTag/HashTag";

//Containers
import NavBarContainer from "./containers/NavBarContainer";
import SkillsContainer from "./containers/SkillsContainer";

const App: React.FC = () => {
    return (
        <>
            <HashTag id={'opening-hashtag'}/>
            <NavBarContainer/>
            <SkillsContainer/>
        </>
    )
};

ReactDOM.render(<App/>, document.querySelector('#app'));