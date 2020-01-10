import Form from './components/section/section.js';
import Heading from './components/heading/heading.js';
import Footer from './components/footer/footer.js'
import { geoFindMe, performAction, getTravelData, postTravelData } from '../client/js/app.js';
import AddImage from './components/section1/section1.js'

const heading = new Heading('Heading', 'Travel Planner');
heading.render();

const form = new Form('Form');
form.render();


const footer = new Footer('Footer');
footer.render();


const image = new AddImage('image');
image.render();

window.addEventListener("load", geoFindMe);
document.getElementById('gen').addEventListener("click", performAction);
document.getElementById('bk').addEventListener("click", postTravelData);
document.getElementById('rt').addEventListener("click", getTravelData);


const input = document.getElementById('in');
input.addEventListener('input', function showFormat() {
    document.getElementById('fmt').style.display = "block";
});