import React from "react";

import './NavBar.sass';

interface IProps {
    menuOpened: boolean;
}

const NavBar: React.FC<IProps> = ({menuOpened}) => {
    return(
        <section className={`s-navbar ${menuOpened ? 'opened' : ''}`}>
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