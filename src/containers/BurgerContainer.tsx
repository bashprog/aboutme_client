import React, {useState} from "react";
import Burger from "../components/NavBar/Burger";

const BurgerContainer: React.FC = () => {
    const [menu, toggleMenu] = useState<boolean>(false);

    return(
        <Burger menuState={menu} toggleMenuState={() => toggleMenu(!menu)}/>
    )
}

export default BurgerContainer;