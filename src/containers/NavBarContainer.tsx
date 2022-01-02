import React, {useState} from "react";

import NavBar from "../components/NavBar/NavBar";
import Burger from "../components/NavBar/Burger";

const NavBarContainer: React.FC = () => {
<<<<<<< HEAD
    const [menu, toggleMenu] = useState<boolean>(false);
=======
    const [menu, toggleMenu] = useState<boolean>(true);
>>>>>>> b7f18d36a3479a41a5e7b5e881afb7eda692a9fd

    return (
        <>
            <Burger menuState={menu} toggleMenuState={() => toggleMenu(!menu)} />
            <NavBar menuOpened={menu}/>
        </>
    )
};

export default NavBarContainer;