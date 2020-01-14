import Form from './components/section/section.js';
import Heading from './components/heading/heading.js';
import Footer from './components/footer/footer.js'
import { geoFindMe, performAction, postTravelData,
         updateUI } from '../client/js/app.js';

import AddImage from './components/section1/section1.js'
import placeHolder from '../../assets/placeHolder.png'

const heading = new Heading('Heading', 'Travel Planner');
heading.render();

const section = new Form('section');
section.render();

const footer = new Footer('Footer');
footer.render();

const section1 = new AddImage('Section1', placeHolder);
section1.render();

window.addEventListener("load", geoFindMe);
document.getElementById('gen').addEventListener("click", performAction);
document.getElementById('bk').addEventListener("click", postTravelData);
document.getElementById('rt').addEventListener("click", updateUI);
document.getElementById('in').addEventListener('input', () => {
    document.getElementById('fmt').style.display = "block";
});