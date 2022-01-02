import React, {useEffect} from "react";

import './Skills.sass';

import roadMapFn from "./roadMap";

interface ArrayItem {
    title: string,
    node?: ArrayItem[]
}

interface IProps {
    skills: ArrayItem[]
}

function drawingAnimation() {
    let el = document.querySelectorAll('#skillsRoadMap svg line');
    console.log(el);
}

const Skills: React.FC<IProps> = ({skills}) => {
    useEffect(() => {
        roadMapFn(skills, '#skillsRoadMap');
        drawingAnimation();
    });

    return(
        <section className={'s-skills'}>
            <div className="container">
                <div id={'skillsRoadMap'} />
            </div>
        </section>
    )
};

export default Skills;