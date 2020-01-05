export default class Components {

	constructor(name) {

		this.name = name;
		this.body = document.querySelector('body');
		this.p = document.createElement('p');
		this.a = document.createElement('a');
		this.div = document.createElement('div');

	}

	render() {

		console.log(`${this.name} is operational`);
	}

}


