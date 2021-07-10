import { UI } from './index.js'

function loadHomeContent(e) {
  if (e.type != 'DOMContentLoaded') {
    e.preventDefault();
    //event delegation for nav link style
    UI.navLinkTab(e.target);
  }

  //content is appended to this element on all pages
  const contentMain = document.getElementById('content');
  //clear out content from contentMain
  contentMain.innerHTML = '';

  //create hero img for page
  const heroImg = document.createElement('img');
  heroImg.setAttribute('src', 'images/hero-1.jpg');
  heroImg.setAttribute('alt', 'Plate of Thai food');
  heroImg.className = 'hero';
  contentMain.appendChild(heroImg);

  //create paragraph with copy
  const ui = new UI();
  ui.textElement('p', 'Welcome to Sivalai Thai Restaurant! We are located in SE Portland, Oregon. We serve traditional fare such as sticky rice & drunken noodles in a simple, family-friendly dining room.', contentMain);

  //create paragraph with copy
  const ui2 = new UI();
  ui2.textElement('p', 'Please take a look at our menu and then give us a call to place an order.', contentMain);

}

export { loadHomeContent }