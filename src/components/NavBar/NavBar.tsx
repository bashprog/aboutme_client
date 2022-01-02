import React from "react";

import './NavBar.sass';

interface IProps {
    menuOpened: boolean;
}

const NavBar: React.FC<IProps> = ({menuOpened}) => {
    return(
<<<<<<< HEAD
        <section className={`s-navbar ${menuOpened ? 'opened' : ''}`}>
=======
        <section className={`s-navbar ${menuOpened ? 'opened' : null}`}>
>>>>>>> b7f18d36a3479a41a5e7b5e881afb7eda692a9fd
            <ul>
                <li>List item</li>
                <li>List item</li>
                <li>List item</li>
                <li>List item</li>
                <li>List item</li>
            </ul>
        </section>
    )
};

export default NavBar;