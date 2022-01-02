import React from "react";
import Skills from "../components/Skills/Skills";

const SkillsContainer: React.FC = () => {

    const skillsArray = [
        {
            title: 'HTML',
        },
        {
            title: 'CSS',
            node: [
                {
                    title: 'SASS'
                }
            ]
        },
        {
            title: 'JavaScript',
            node: [{title: 'JQuery'}, {title: 'TypeScript'}, {title: 'ReactJS'}]
        }
    ];

    return (
        <>
            <Skills skills={skillsArray}/>
        </>
    )
};

export default SkillsContainer;