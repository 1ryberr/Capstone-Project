

import Components from '../components.js';
import '../../styles/form.scss';


export default class Form extends Components {

    render() {
        super.render();

        const form = document.createElement('form');
        const input1 = document.createElement('input');
        input1.setAttribute('id', 'in1');
        input1.type = 'text';
        input1.name = 'value1';
        input1.placeholder = 'Input your text here';

        const label = document.createElement('label');
        label.innerHTML = 'Get Sentiment Analysis.'
        const label1 = document.createElement('label');
        label1.setAttribute('id', 'label');

        const button = document.createElement('button');
        button.type = 'submit';
        button.name = 'submit';
        button.innerHTML = "submit";
        button.setAttribute('id', 'gen');
        form.appendChild(label);
        form.append(input1);
        form.appendChild(label1);
        form.appendChild(button);
        this.body.append(form);

    }
}




