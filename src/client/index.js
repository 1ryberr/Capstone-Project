import Form from './components/section/section.js';
import Heading from './components/heading/heading.js';
import Footer from './components/footer/footer.js'
import {geoFindMe, performAction} from '../client/js/app.js'; 
import AddImage from './components/section1/section1.js'

const heading = new Heading('Heading', 'Travel Planner');
heading.render();

 const form = new Form('Form');
 form.render();


const footer = new Footer('Footer');
footer.render();


const image = new AddImage('image');
image.render();

window.addEventListener('load', geoFindMe);



document.getElementById('gen').addEventListener("click",  performAction);

// if ('serviceWorker' in navigator) {
//     window.addEventListener('load', function() {
//       navigator.serviceWorker.register('/service-worker.js');
//     }).then( console.log('service worker registered'));
//   }new Picker(document.querySelector('.js-date-picker'), {
 