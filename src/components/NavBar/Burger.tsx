import React from "react";

import './Burger.sass';

interface IProps {
    menuState: boolean,
    toggleMenuState: (arg: boolean) => void
}

const Burger: React.FC<IProps> = ({menuState, toggleMenuState}) => {
    return (
        <div className={`burger ${menuState ? 'open' : 'close'}`} onClick={() => {
            toggleMenuState(!menuState)
        }}>
            <div className={'burger-icon'}>
                <span className={'top-line'}/>
                <span className={'middle-line'}/>
                <span className={'bottom-line'}/>
            </div>
            <div className={'burger-ring'}>
                <svg className={'svg-ring'}>
                    <path className="path" fill="none" stroke="#393D3F" strokeMiterlimit="10" strokeWidth="4"
                          d="M 34 2 C 16.3 2 2 16.3 2 34 s 14.3 32 32 32 s 32 -14.3 32 -32 S 51.7 2 34 2"/>
                </svg>
            </div>
            <div>
                <svg className={'mask'}>
                    <path xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#393D3F" strokeMiterlimit="10"
                          strokeWidth="4"
                          d="M 34 2 c 11.6 0 21.8 6.2 27.4 15.5 c 2.9 4.8 5 16.5 -9.4 16.5 h -4"/>
                </svg>
            </div>
        </div>
    )
};

export default Burger;

//!!! Attention !!!
// Анимацию кнопки увидел на https://codepen.io/kylehenwood/pen/Alayb
// Взял оттуда только SVG кольца и маски
// Остальной код самописный

//ring length = 202
//mask length = 62