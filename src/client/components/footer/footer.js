import '../../styles/footer.scss';
import Components from '../components.js';


export default class Footer extends Components {


	render() {
		super.render();

		const footer = document.createElement('footer');
		footer.add
		const dict = [{ key: "1ryber@gmail.com", value: "mailto:1ryber@gmail.com" }, { key: "Twitter", value: "https://twitter.com" }, { key: "FaceBook", value: "https://www.facebook.com" }, { key: "Linkedin", value: "https://www.linkedin.com" }];

		this.p.innerHTML = '\u00A9 Copyright 2019. All Rights Reserved.';
		footer.appendChild(this.p);

		dict.forEach(function (item) {
			const a = document.createElement('a');
			const br = document.createElement('br');

			a.href = item.value;
			a.innerHTML = item.key;

			if (item.key === "1ryber@gmail.com") {
				a.appendChild(br);
			}

			footer.appendChild(a);

		});


		this.body.appendChild(footer);
	}
}


