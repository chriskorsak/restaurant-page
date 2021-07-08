import { UI } from "./index.js"

function loadMenuContent(e) {
  e.preventDefault();
  UI.navLinkTab(e.target);

  //content is appended to this element on all pages
  const contentMain = document.getElementById('content');
  //clear out content from contentMain
  contentMain.innerHTML = '';

  //create paragraph with copy
  const ui = new UI();
  ui.textElement('p', 'Menu goes here.', contentMain);
}

export { loadMenuContent }