import React, {useState} from "react";

import NavBar from "../components/NavBar/NavBar";
import Burger from "../components/NavBar/Burger";

const NavBarContainer: React.FC = () => {
    const [menu, toggleMenu] = useState<boolean>(true);

    return (
        <>
            <Burger menuState={menu} toggleMenuState={() => toggleMenu(!menu)} />
            <NavBar menuOpened={menu}/>
        </>
    )
};

export default NavBarContainer;