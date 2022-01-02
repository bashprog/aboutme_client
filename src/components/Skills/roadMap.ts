import {SVG} from '@svgdotjs/svg.js';

interface ArrayItem {
    title: string,
    node?: ArrayItem[]
}

const roadMapFn = (skills: ArrayItem[], elementSelector: string) => {
    let el = (document.querySelector(`${elementSelector}`) as HTMLElement).getBoundingClientRect();

    let draw = SVG().addTo(`${elementSelector}`).size(el.width, el.height);

    let L1 = draw.line(20, 0, 100, 0).move(20, 60)
        .stroke({ color: '#393D3F', width: 2, linecap: 'round' })
        .addClass('L1');

    let supportLineL1 = draw.line(0, 30, 0, 0).move(100, 30)
        .stroke({ color: '#393D3F', width: 2, linecap: 'round' })
        .addClass('SL1')

    let Rect1 = draw.rect(100, 60).move(100, 30).fill('none')
        .stroke({color: '#393D3F', width: 2, linecap: 'round'})
        .addClass('rectHTML')

    let textHTML = draw.text('HTML')
        .move(110,55)
        .font({ fill: '#111111', family: 'Montserrat', size: 26 })
        .addClass('THTML')

    console.log(el);
};

export default roadMapFn;