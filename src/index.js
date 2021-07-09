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
document.addEventListener('DOMContentLoaded', function(e) {
  loadEvents();
  loadHomeContent(e);
});


class UI {
  textElement(tag, text, parentElement) {
    const element = document.createElement(`${tag}`);
    element.appendChild(document.createTextNode(text));
    parentElement.appendChild(element);
  }
  static navLinkTab(target) {
    const lis = document.querySelectorAll('nav li');
    lis.forEach(li => li.classList.remove('active'));
    target.parentElement.className = 'active';
  }
  item(item, menuSection) {
    const menuItemDiv = document.createElement('div');
    menuItemDiv.className = 'menu-item'
    const rowDiv = document.createElement('div');
    rowDiv.className = 'menu-row';
    const title = document.createElement('h4');
    const price = document.createElement('div');
    const description = document.createElement('div');
  
    title.textContent = item.title;
    description.textContent = item.description;
    price.textContent = item.price;
    
    rowDiv.append(title, price);
    menuItemDiv.append(rowDiv, description);
    menuSection.appendChild(menuItemDiv);
  }
  
}

export { UI }

