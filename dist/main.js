(()=>{"use strict";var e={d:(t,n)=>{for(var a in n)e.o(n,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:n[a]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};function t(e){"DOMContentLoaded"!=e.type&&(e.preventDefault(),d.navLinkTab(e.target));const t=document.getElementById("content");t.innerHTML="";const n=document.createElement("img");n.setAttribute("src","images/hero.jpg"),n.setAttribute("alt","Plate of Thai food"),n.className="hero",t.appendChild(n),(new d).textElement("p","Welcome to Sivalai Thai Restaurant! We are located in SE Portland, Oregon. We serve traditional fare such as sticky rice & drunken noodles in a simple, family-friendly dining room.",t),(new d).textElement("p","Please take a look at our menu and then give us a call to place an order.",t)}function n(e){e.preventDefault(),d.navLinkTab(e.target);const t=document.getElementById("content");t.innerHTML="",(new d).textElement("h2","Menu",t)}function a(e){e.preventDefault(),d.navLinkTab(e.target);const t=document.getElementById("content");t.innerHTML="";const n=document.createElement("section");(new d).textElement("h2","Phone",n);const a=document.createElement("p");a.innerHTML='<a href="tel:5022302875">Call (503)230-2875</a>',n.appendChild(a);const s=document.createElement("div");s.innerHTML='<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.5505774017506!2d-122.61532198474791!3d45.51912497910156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5495a0efa76fff0f%3A0x4f62d226e956ee07!2sSivalai%20Thai%20Restaurant!5e0!3m2!1sen!2sus!4v1625787966448!5m2!1sen!2sus allowfullscreen="" loading="lazy"></iframe>',n.appendChild(s),t.appendChild(n),(new d).textElement("h2","Hours",t);const r=document.createElement("table");r.innerHTML="\n    <tr>\n      <td class='day'>Monday</td><td class='hours'>11am - 9pm</td>\n    </tr>\n    <tr>\n      <td class='day'>Tuesday</td><td class='hours'>Closed</td>\n    </tr>\n    <tr>\n      <td class='day'>Wednesday</td><td class='hours'>11am - 9pm</td>\n    </tr>\n    <tr>\n      <td class='day'>Thursday</td><td class='hours'>11am - 9pm</td>\n    </tr>\n    <tr>\n      <td class='day'>Friday</td><td class='hours'>11am - 9pm</td>\n    </tr>\n    <tr>\n      <td class='day'>Saturday</td><td class='hours'>11am - 9pm</td>\n    </tr>\n    <tr>\n      <td class='day'>Sunday</td><td class='hours'>11am - 9pm</td>\n    </tr>",t.appendChild(r)}e.d({},{UI:()=>d}),document.addEventListener("DOMContentLoaded",(function(e){document.getElementById("home").addEventListener("click",t),document.getElementById("menu").addEventListener("click",n),document.getElementById("contact").addEventListener("click",a),t(e)}));class d{textElement(e,t,n){const a=document.createElement(`${e}`);a.appendChild(document.createTextNode(t)),n.appendChild(a)}static navLinkTab(e){document.querySelectorAll("nav li").forEach((e=>e.classList.remove("active"))),e.parentElement.className="active"}}})();