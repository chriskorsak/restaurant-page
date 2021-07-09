import { UI } from "./index.js"

function loadMenuContent(e) {
  e.preventDefault();
  //event delegation for nav link style
  UI.navLinkTab(e.target);

  //content is appended to this element on all pages
  const contentMain = document.getElementById('content');
  //clear out content from contentMain
  contentMain.innerHTML = '';

  //create paragraph with copy
  const uiMenuHeading = new UI();
  uiMenuHeading.textElement('h2', 'Menu', contentMain);
}

export { loadMenuContent }