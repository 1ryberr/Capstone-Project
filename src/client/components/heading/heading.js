import '../../styles/heading.scss';
import Components from '../components.js'


export default class Heading extends Components {

	constructor(name, headText) {
		super(name);
		this.headText = headText;
	}
	
	render() {
		super.render();

		const h1 = document.createElement('h1');
		h1.innerHTML = this.headText;
		this.div.appendChild(h1)
		this.body.appendChild(this.div);

	}
}