(()=>{"use strict";var e={d:(t,n)=>{for(var i in n)e.o(n,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:n[i]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{m:()=>c});class t{static id=0;constructor(e,n,i,d,o=!1){this.title=e,this.description=n,this.dueDate=i,this.priority=d,this.done=o,this.id="T"+t.id++}toggleDone(){this.done=!this.done}}class n{static id=0;constructor(e){this.title=e,this.list=[],this.id="P"+n.id++}addToDo(e){this.list.push(e)}removeToDo(e){let t=this.list.find((t=>t.id===e));this.list.splice(this.list.indexOf(t),1)}}function i(e){const t=document.getElementById("dashboard");t.innerHTML="";for(let n=0;n<e.length;n++){let i=e[n],d=document.createElement("div");d.classList.add("project"),d.id=i.id;let o=document.createElement("h1");o.setAttribute("contenteditable","true"),o.textContent=i.title,d.appendChild(o);let l=document.createElement("div");l.classList.add("remove-proj"),l.textContent="-",d.appendChild(l);for(let e=0;e<i.list.length;e++){let t=i.list[e],n=document.createElement("div");n.id=t.id,n.classList.add("to-do");let o=document.createElement("h1");o.textContent=t.title;let l=document.createElement("h2");l.textContent="Due: "+t.dueDate,l.style.fontStyle="italic";let a=document.createElement("h2");a.textContent="Priority: "+t.priority;let r=document.createElement("p");r.textContent=t.description;let s=document.createElement("div");s.classList.add("rem-to-do"),s.textContent="-";let c=document.createElement("div");c.classList.add("check-to-do"),!0===t.done?(c.innerHTML="&#10004;",c.style.backgroundColor="green",l.style.textDecoration="line-through",a.style.textDecoration="line-through",o.style.textDecoration="line-through",r.style.textDecoration="line-through",n.style.backgroundColor="rgba(var(--to-do-color), 0.6)"):(c.innerHTML="&times;",c.style.backgroundColor="#777"),n.appendChild(o),n.appendChild(l),n.appendChild(a),n.appendChild(r),n.appendChild(s),n.appendChild(c),d.appendChild(n)}let a=document.createElement("div");a.id=`to-do-cont-${i.id}`,a.classList.add("form-container"),a.innerHTML=`\n    <h1>Add To-Do</h1>\n    <form id="test-form-${i.id}">\n        <div>\n            <label class="l" for="toDoTitle-${i.id}">Title: </label>\n            <input class="r" type="text" id="toDoTitle-${i.id}">\n        </div>\n        <div>\n            <label class="l" for="toDoDetails-${i.id}">Details: </label>\n            <textarea class="r details" type="text-area"  id="toDoDetails-${i.id}"></textarea>\n        </div>\n        <div>\n            <label class="l" for="toDoDate-${i.id}">Date: </label>\n            <input class="r" type="date" id="toDoDate-${i.id}">\n        </div>\n        <div>\n            <label class="l">Priority: </label>\n            <div class="r">\n                <input type="radio" id="low-${i.id}" name="priority-${i.id}" value="low">\n                <label for="low-${i.id}">Low</label>\n                <input type="radio" id="medium-${i.id}" name="priority-${i.id}" value="medium">\n                <label for="medium-${i.id}">Medium</label>\n                <input type="radio" id="high-${i.id}" name="priority-${i.id}" value="high">\n                <label for="high-${i.id}">High</label>\n            </div>\n        </div>\n\n    </form>\n    <div class="to-do-button-cont">\n        <button class="td-cancel" id="to-do-cancel-${i.id}" type="button">Cancel</button>\n        <button class="td-add" id="to-do-add-${i.id}">Add To-Do</button>\n    </div>\n        `,d.appendChild(a);let r=document.createElement("div");r.classList.add("proj-to-do"),r.textContent="+",d.appendChild(r),t.appendChild(d)}}const d=document.getElementById("add-project"),o=document.getElementById("form-cancel"),l=document.getElementById("form-add-proj"),a=document.getElementById("projTitle"),r=document.getElementById("pop-up"),s=document.getElementById("dashboard");let c=[],m=new t("Make this project","Try not to have bugs you stupid idiot","2/12/2021","high"),p=new t("Make more shit","Render everything","3/01/2022","low"),u=new n("Default","#fff");u.addToDo(m),u.addToDo(p),c.push(u);let h=new t("Make other project","Try not to blah","5/12/2021","high"),g=new t("Make other other project","Something here","5/12/2021","high"),y=new t("something","something more","12/12/2021","medium"),v=new n("Important","#ff0000");v.addToDo(h),v.addToDo(g),v.addToDo(y),c.push(v),i(c),d.addEventListener("click",(e=>{r.style.display="flex"})),o.addEventListener("click",(e=>{document.getElementById("projTitle").value="",r.style.display="none"})),l.addEventListener("click",(e=>{if(e.preventDefault(),!a.value)return;let t=new n(a.value);a.value="",c.push(t),r.style.display="none",i(c)})),s.addEventListener("click",(e=>{if(e.target.classList.contains("remove-proj")){let t=e.target.parentElement.id,n=c.find((e=>e.id===t));c.splice(c.indexOf(n),1),i(c)}})),s.addEventListener("click",(e=>{if(e.target.classList.contains("rem-to-do")){let t=e.target.parentElement.id,n=e.target.parentElement.parentElement.id;c.find((e=>e.id===n)).removeToDo(t),i(c)}})),s.addEventListener("click",(e=>{if(e.target.classList.contains("check-to-do")){let t=e.target.parentElement.id,n=e.target.parentElement.parentElement.id;c.find((e=>e.id===n)).list.find((e=>e.id===t)).toggleDone(),i(c)}})),s.addEventListener("click",(e=>{if(e.target.classList.contains("proj-to-do")){let t="to-do-cont-"+e.target.parentElement.id;document.getElementById(t).style.display="flex"}})),s.addEventListener("click",(e=>{if(e.target.classList.contains("td-add")){let n,d=e.target.parentElement.parentElement.parentElement.id,o=document.getElementById("toDoTitle-"+d).value,l=document.getElementById("toDoDetails-"+d).value,a=document.getElementById("toDoDate-"+d).value,r=document.querySelectorAll('input[name="priority-'+d+'"]');for(let e of r)if(e.checked){n=e.value;break}if(!(o&&l&&a&&n))return;let s=new t(o,l,a,n);c.find((e=>e.id===d)).list.push(s),i(c)}})),s.addEventListener("click",(e=>{if(e.target.classList.contains("td-cancel")){let t="to-do-cont-"+e.target.parentElement.parentElement.parentElement.id;document.getElementById(t).style.display="none"}}))})();