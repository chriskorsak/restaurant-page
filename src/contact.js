import { UI } from "./index.js"

function loadContactContent(e) {
  e.preventDefault();
  UI.navLinkTab(e.target);

  //content is appended to this element on all pages
  const contentMain = document.getElementById('content');
  //clear out content from contentMain
  contentMain.innerHTML = '';

  //create paragraph with copy
  const ui = new UI();
  ui.textElement('p', 'Contact goes here', contentMain);

}

export { loadContactContent }