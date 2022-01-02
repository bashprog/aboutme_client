//Work by Onton (bashprog@gmail.com)
//GNU kk?

import React from "react";

import './HashTag.sass';

interface IProps {
    id?: string
}

const HashTag: React.FC<IProps> = ({id}) => {
    const fixLinks = () => {
        let t: NodeListOf<HTMLElement> = document.querySelectorAll('.triangle');

        setTimeout(function(){
            for (let i of t){
                i.setAttribute('style', 'pointer-events: auto');
            }
        }, 300);

        document.onclick = function(){
            for (let i of t){
                i.setAttribute('style', '');
            }
        }
        //fix hover over the hashtag on mobile
    };

    return(
        <React.Fragment>
            <div className="social-container" id={id} onClick={() => {fixLinks()}}>
                <div className="social-container__hashtag" >
                    <span /><span /><span /><span />
                    <div className="triangle triangle-top"><a href="tg://resolve?domain=@OntonBash"><i className="fab fa-telegram-plane" /></a></div>
                    <div className="triangle triangle-right"><a href="https://wa.me/79136201778" target="_blank"><i className="fab fa-whatsapp" /></a></div>
                    <div className="triangle triangle-bottom"><a href="mailto:bashprog@gmail.com"><i className="fab fa-google" /></a></div>
                    <div className="triangle triangle-left"><a href="https://github.com/bashprog" target="_blank"><i className="fab fa-github" /></a></div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default HashTag;