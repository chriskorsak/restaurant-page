//import functions from other JS modules
import {loadHomeContent} from "./home.js"
import {loadMenuContent} from "./menu.js"
import {loadContactContent} from "./contact.js"

//add event handlers to tab links
function loadEvents() {
  document.getElementById('home').addEventListener('click', loadHomeContent);
  document.getElementById('menu').addEventListener('click', loadMenuContent);
  document.getElementById('contact').addEventListener('click', loadContactContent);
}

//run loadEvents function when DOM loaded
document.addEventListener('DOMContentLoaded', loadEvents);

class UI {
  textElement(tag, text, parentElement) {
    const element = document.createElement(`${tag}`);
    element.appendChild(document.createTextNode(text));
    parentElement.appendChild(element);
  }
  
}

export { UI }

