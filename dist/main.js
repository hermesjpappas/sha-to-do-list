(()=>{"use strict";var e={d:(t,n)=>{for(var d in n)e.o(n,d)&&!e.o(t,d)&&Object.defineProperty(t,d,{enumerable:!0,get:n[d]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{m:()=>c});class t{static id=0;constructor(e,n,d,o,i=!1){this.title=e,this.description=n,this.dueDate=d,this.priority=o,this.done=i,this.id="T"+t.id++}toggleDone(){this.done=!this.done}}class n{static id=0;constructor(e){this.title=e,this.list=[],this.id="P"+n.id++}addToDo(e){this.list.push(e)}removeToDo(e){let t=this.list.find((t=>t.id===e));this.list.splice(this.list.indexOf(t),1)}}function d(e){const t=document.getElementById("dashboard");t.innerHTML="";for(let n=0;n<e.length;n++){let d=e[n],o=document.createElement("div");o.classList.add("project"),o.id=d.id;let i=document.createElement("h1");i.textContent=d.title,o.appendChild(i);let l=document.createElement("div");l.classList.add("remove-proj"),l.textContent="-",o.appendChild(l);for(let e=0;e<d.list.length;e++){let t=d.list[e],n=document.createElement("div");n.id=t.id,n.classList.add("to-do");let i=document.createElement("h1");i.textContent=t.title;let l=document.createElement("p");l.textContent=t.description;let s=document.createElement("div");s.classList.add("rem-to-do"),s.textContent="-";let a=document.createElement("div");a.classList.add("check-to-do"),!0===t.done?(a.innerHTML="&#10004;",a.style.backgroundColor="green"):(a.innerHTML="&times;",a.style.backgroundColor="#777"),n.appendChild(i),n.appendChild(l),n.appendChild(s),n.appendChild(a),o.appendChild(n)}t.appendChild(o)}}const o=document.getElementById("add-project"),i=document.getElementById("form-cancel"),l=document.getElementById("form-add-proj"),s=document.getElementById("projTitle"),a=document.getElementById("pop-up"),r=document.getElementById("dashboard");let c=[],p=new t("Make this project","Try not to have bugs you stupid idiot","2/12/2021",3),m=new t("Make more shit","Render everything","3/01/2022",1),h=new n("Default","#fff");h.addToDo(p),h.addToDo(m),c.push(h);let u=new t("Make other project","Try not to blah","5/12/2021",3),g=new t("Make other other project","Something here","5/12/2021",3),E=new t("something","something more","12/12/2021",2),f=new n("Important","#ff0000");f.addToDo(u),f.addToDo(g),f.addToDo(E),c.push(f),d(c),o.addEventListener("click",(e=>{a.style.display="flex"})),i.addEventListener("click",(e=>{a.style.display="none"})),l.addEventListener("click",(e=>{if(e.preventDefault(),!s.value)return;let t=new n(s.value);s.value="",c.push(t),a.style.display="none",console.log(c),d(c)})),r.addEventListener("click",(e=>{if(e.target.classList.contains("remove-proj")){let t=e.target.parentElement.id,n=c.find((e=>e.id===t));c.splice(c.indexOf(n),1),console.log(c),d(c)}})),r.addEventListener("click",(e=>{if(e.target.classList.contains("rem-to-do")){let t=e.target.parentElement.id,n=e.target.parentElement.parentElement.id,o=c.find((e=>e.id===n));o.removeToDo(t),console.log(o),d(c)}})),r.addEventListener("click",(e=>{if(e.target.classList.contains("check-to-do")){let t=e.target.parentElement.id,n=e.target.parentElement.parentElement.id,o=c.find((e=>e.id===n)).list.find((e=>e.id===t));o.toggleDone(),console.log(o),d(c)}}))})();