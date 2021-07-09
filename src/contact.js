import { UI } from "./index.js"

function loadContactContent(e) {
  e.preventDefault();
  //event delegation for nav link style
  UI.navLinkTab(e.target);

  //content is appended to this element on all pages
  const contentMain = document.getElementById('content');
  //clear out content from contentMain
  contentMain.innerHTML = '';

  const section = document.createElement('section');
  //Phone Heading Element
  const uiPhoneHeading = new UI();
  uiPhoneHeading.textElement('h2', 'Phone', section);

  //create phone number active link
  const phoneP = document.createElement('p');
  phoneP.innerHTML = '<a href="tel:5022302875">Call (503)230-2875</a>';
  section.appendChild(phoneP);

  //create map
  const map = document.createElement('div');
  map.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.5505774017506!2d-122.61532198474791!3d45.51912497910156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5495a0efa76fff0f%3A0x4f62d226e956ee07!2sSivalai%20Thai%20Restaurant!5e0!3m2!1sen!2sus!4v1625787966448!5m2!1sen!2sus allowfullscreen="" loading="lazy"></iframe>';
  section.appendChild(map);

  //append section to content main
  contentMain.appendChild(section);
  
  //Hours Heading Element
  const uiHoursHeading = new UI();
  uiHoursHeading.textElement('h2', 'Hours', contentMain);
  
  //hours table
  const hoursTable = document.createElement('table');
  const hours = `
    <tr>
      <td class='day'>Monday</td><td class='hours'>11am - 9pm</td>
    </tr>
    <tr>
      <td class='day'>Tuesday</td><td class='hours'>Closed</td>
    </tr>
    <tr>
      <td class='day'>Wednesday</td><td class='hours'>11am - 9pm</td>
    </tr>
    <tr>
      <td class='day'>Thursday</td><td class='hours'>11am - 9pm</td>
    </tr>
    <tr>
      <td class='day'>Friday</td><td class='hours'>11am - 9pm</td>
    </tr>
    <tr>
      <td class='day'>Saturday</td><td class='hours'>11am - 9pm</td>
    </tr>
    <tr>
      <td class='day'>Sunday</td><td class='hours'>11am - 9pm</td>
    </tr>`
    hoursTable.innerHTML = hours;
    //append hours table to main#content
    contentMain.appendChild(hoursTable);
}

export { loadContactContent }