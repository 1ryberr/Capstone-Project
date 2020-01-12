

import Components from '../components.js';
import '../../styles/section.scss';


export default class Form extends Components {

    render() {
        super.render();

        const sec = document.createElement('section');
        sec.setAttribute('id', 'sec1');
        const label1 = document.createElement('p');
        label1.setAttribute('id', 'lbl1');

        const input1 = document.createElement('input');
        input1.setAttribute('id', 'in1');
        input1.type = 'text';
        input1.name = 'value1';
        input1.placeholder = 'What is your destination';

        const input = document.createElement('input');
        input.setAttribute('id', 'in');
        input.type = 'text';

        input.placeholder = ' Enter date format: 2012.08.10';

        const label2 = document.createElement('p');
        label2.setAttribute('id', 'lbl2');

        const label = document.createElement('p');
        label.setAttribute('id', 'lbl');

        const button = document.createElement('button');
        button.type = 'button';
        button.innerHTML = "Destination";
        button.setAttribute('id', 'gen');

        const button1 = document.createElement('button');
        button1.type = 'button';
        button1.innerHTML = "save Destination";
        button1.setAttribute('id', 'bk');

        const button2 = document.createElement('button');
        button2.type = 'button';
        button2.innerHTML = "Retrieve";
        button2.setAttribute('id', 'rt');

        const fmt = document.createElement('p');
        fmt.setAttribute('id', 'fmt');
        fmt.innerHTML = "format: yyyy.mm.dd"

        sec.appendChild(label);
        sec.appendChild(label2);
        sec.append(input1);
        sec.append(input);
        sec.appendChild(label1);
        sec.appendChild(button);
        sec.appendChild(button1);
        sec.appendChild(button2);
        sec.appendChild(fmt);
        this.body.append(sec);


    }
}




