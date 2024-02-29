import './bootstrap.js';
/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */
import './styles/app.css';
window.onload = function () {

    const acceuil = document.querySelector('#acceuil');
    
    const presentation = document.querySelector('#presentation');
    
    const contact = document.querySelector('#contact');
    
    acceuil.addEventListener('click', () => window.scrollTo({
        top: 400,
        behavior: 'smooth',
      }));

      presentation.addEventListener('click', () => window.scrollTo({
        top: 400,
        behavior: 'smooth',
      }));

      contact.addEventListener('click', () => window.scrollTo({
        top: 400,
        behavior: 'smooth',
      }));
      
}