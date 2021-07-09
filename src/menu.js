import { UI } from "./index.js"

const menu = [];

class menuItem {
  constructor(title, description, category, price) {
    this.title = title;
    this.description = description;
    this.category = category;
    this.price = price;
  }
}

// menu item objects
const freshRolls = new menuItem('Fresh Rolls', 'Cabbage, green onion, cucumber, carrot & tofu served with peanut sauce', 'appetizer', 4.95);
menu.push(freshRolls);

const chickenStay = new menuItem('Chicken S\'tay', 'Marinated chicken on skewer served with peanut sauce & cucumber sauce', 'appetizer', 5.95);
menu.push(chickenStay);

const sivalaiCashew = new menuItem('Sivalai Cashew', 'Cashew nut, carrot, broccoli, green onion, onion and dry chili pepper', 'entree');
menu.push(sivalaiCashew);

const padThai = new menuItem('Pad Thai', 'Rice noodle, green onion, egg, bean sprout and ground peanut', 'entree');
menu.push(padThai);

const drunkenNoodle = new menuItem('Drunken Noodle', 'Rice noodle, tomato, basil, jalapeno pepper and chili pepper', 'entree');
menu.push(drunkenNoodle);

const spicyFriedRice = new menuItem('Spicy Fried Rice', 'Choice of meat, bell pepper, jalapeno, onion, basil and chili pepper', 'entree');
menu.push(spicyFriedRice);

const sweetRice = new menuItem('Sweet Rice with Mango', 'Sticky rice, coconut milk, sesame seed and mango', 'dessert', 4.95);
menu.push(sweetRice);


function loadMenuContent(e) {

  e.preventDefault();
  //event delegation for nav link style
  UI.navLinkTab(e.target);

  //content is appended to this element on all pages
  const contentMain = document.getElementById('content');
  //clear out content from contentMain
  contentMain.innerHTML = '';

  //Menu heading
  const uiMenuHeading = new UI();
  uiMenuHeading.textElement('h2', 'Menu', contentMain);

  //appetizer section
  const appetizerSection = document.createElement('section');
  appetizerSection.className = 'menu-section';
  const uiMenuAppetizerHeading = new UI();
  uiMenuAppetizerHeading.textElement('h3', 'Appetizers', appetizerSection);

  menu.forEach(item => {
    if (item.category === 'appetizer') {
      const ui = new UI();
      ui.item(item, appetizerSection);
    }
  })
  contentMain.appendChild(appetizerSection);

  //entree section
  const entreeSection = document.createElement('section');
  entreeSection.className = 'menu-section';
  const uiMenuEntreeHeading = new UI();
  uiMenuEntreeHeading.textElement('h3', 'Entrees', contentMain);
  const detailsP = new UI();
  detailsP.textElement('p', 'Choice of chicken, beef, pork or tofu $7.95 shrimp $8.95 seafood $10.95. All entrees served with steamed rice.', entreeSection);

  menu.forEach(item => {
    if (item.category === 'entree') {
      const ui = new UI();
      ui.item(item, entreeSection);
    }
  })
  contentMain.appendChild(entreeSection);

  //dessert section
  const dessertSection = document.createElement('section');
  dessertSection.className = 'menu-section';
  const uiMenuDessertHeading = new UI();
  uiMenuDessertHeading.textElement('h3', 'Desserts', contentMain);
  menu.forEach(item => {
    if (item.category === 'dessert') {
      const ui = new UI();
      ui.item(item, dessertSection);
    }
  })
  contentMain.appendChild(dessertSection);
}

export { loadMenuContent }