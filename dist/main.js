(()=>{"use strict";var e={d:(t,n)=>{for(var a in n)e.o(n,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:n[a]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};function t(e){e.preventDefault(),o.navLinkTab(e.target);const t=document.getElementById("content");t.innerHTML="";const n=document.createElement("img");n.setAttribute("src","images/hero.jpg"),n.setAttribute("alt","Plate of Thai food"),n.className="hero",t.appendChild(n),(new o).textElement("p","Welcome to Sivalai Thai Restaurant! We are located in SE Portland, Oregon. We serve traditional fare such as sticky rice & drunken noodles in a simple, family-friendly dining room.",t),(new o).textElement("p","Please take a look at our menu and then give us a call to place an order.",t)}function n(e){e.preventDefault(),o.navLinkTab(e.target);const t=document.getElementById("content");t.innerHTML="",(new o).textElement("p","Menu goes here.",t)}function a(e){e.preventDefault(),o.navLinkTab(e.target);const t=document.getElementById("content");t.innerHTML="",(new o).textElement("p","Contact goes here",t)}e.d({},{UI:()=>o}),document.addEventListener("DOMContentLoaded",(function(){document.getElementById("home").addEventListener("click",t),document.getElementById("menu").addEventListener("click",n),document.getElementById("contact").addEventListener("click",a)}));class o{textElement(e,t,n){const a=document.createElement(`${e}`);a.appendChild(document.createTextNode(t)),n.appendChild(a)}static navLinkTab(e){document.querySelectorAll("nav li").forEach((e=>e.classList.remove("active"))),e.parentElement.className="active"}}})();