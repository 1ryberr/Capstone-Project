
import '../../styles/section1.scss';
import Components from '../components.js';


export default class AddImage extends Components {
	constructor(name, path, count) {
		super(name);
		this.path = path;
	}

	render() {
		super.render();
		const sec = document.createElement('section');
		const a = document.createElement('a');
        a.setAttribute('id','ankor');
		sec.setAttribute('id', 'sec');
		const myImage = new Image(350, 350);
		myImage.setAttribute('id', 'image');
		myImage.src = this.path;
		const p = document.createElement('p');
        p.setAttribute('id','status')
		sec.appendChild(p);
		sec.appendChild(myImage);
		sec.appendChild(a);
		this.body.appendChild(sec)
	}
}