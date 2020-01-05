import Form from './components/form/form.mjs';
import Heading from './components/heading/heading.js';
import Footer from './components/footer/footer.js'
import {performAction} from '../client/js/app.js'; 


const heading = new Heading('Heading', 'NLP');
heading.render();

 const form = new Form('Form');
 form.render();


const footer = new Footer('Footer');
footer.render();


document.getElementById('gen').addEventListener("click", performAction);


// if ('serviceWorker' in navigator) {
//     window.addEventListener('load', function() {
//       navigator.serviceWorker.register('/service-worker.js');
//     }).then( console.log('service worker registered'));
//   }