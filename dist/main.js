(()=>{"use strict";var t={d:(e,n)=>{for(var i in n)t.o(n,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:n[i]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)};t.d({},{m:()=>c});class e{static id=0;constructor(t,n,i,d,l=!1){this.title=t,this.description=n,this.dueDate=i,this.priority=d,this.done=l,this.id="T"+e.id++}toggleDone(){this.done=!this.done}}class n{static id=0;constructor(t){this.title=t,this.list=[],this.id="P"+n.id++}addToDo(t){this.list.push(t)}removeToDo(t){let e=this.list.find((e=>e.id===t));this.list.splice(this.list.indexOf(e),1)}}function i(t){const e=document.getElementById("dashboard");e.innerHTML="";for(let n=0;n<t.length;n++){let i=t[n],d=document.createElement("div");d.classList.add("project"),d.id=i.id;let l=document.createElement("h1");l.setAttribute("contenteditable","true"),l.classList.add("proj-title-h1"),l.textContent=i.title,d.appendChild(l);let o=document.createElement("div");o.classList.add("remove-proj"),o.textContent="-",d.appendChild(o);for(let t=0;t<i.list.length;t++){let e=i.list[t],n=document.createElement("div");n.id=e.id,n.classList.add("to-do");let l=document.createElement("h1");l.setAttribute("contenteditable","true"),l.classList.add("to-do-title-h1"),l.textContent=e.title;let o=document.createElement("h2");o.textContent="Due: "+e.dueDate,o.style.fontStyle="italic";let a=document.createElement("div"),r=document.createElement("p");r.textContent="Priority: ",r.style.display="inline";let s=document.createElement("select");s.id="prioritySelect-"+e.id,s.classList.add("prioritySelect");let c=document.createElement("option");c.textContent="low",c.value="low","low"===e.priority&&c.setAttribute("selected","selected");let p=document.createElement("option");p.textContent="medium",p.value="medium","medium"===e.priority&&p.setAttribute("selected","selected");let m=document.createElement("option");m.textContent="high",m.value="high","high"===e.priority&&m.setAttribute("selected","selected"),s.appendChild(c),s.appendChild(p),s.appendChild(m),a.appendChild(r),a.appendChild(s);let u=document.createElement("p");u.setAttribute("contenteditable","true"),u.classList.add("to-do-details-p"),u.textContent=e.description;let h=document.createElement("div");h.classList.add("rem-to-do"),h.textContent="-";let g=document.createElement("div");g.classList.add("check-to-do"),!0===e.done?(g.innerHTML="&#10004;",g.style.paddingBottom="0",g.style.backgroundColor="green",o.style.textDecoration="line-through",r.style.textDecoration="line-through",s.style.textDecoration="line-through",s.setAttribute("disabled","disabled"),l.style.textDecoration="line-through",l.setAttribute("contenteditable","false"),u.style.textDecoration="line-through",u.setAttribute("contenteditable","false"),n.style.color="rgba(0,0,0,0.5)",n.style.backgroundColor="rgba(var(--to-do-color), 0.6)"):(g.innerHTML="&#9711;",g.style.backgroundColor="#777"),n.appendChild(l),n.appendChild(o),n.appendChild(a),n.appendChild(u),n.appendChild(h),n.appendChild(g),d.appendChild(n)}let a=document.createElement("div");a.id=`to-do-cont-${i.id}`,a.classList.add("form-container"),a.innerHTML=`\n    <h1>Add To-Do</h1>\n    <form id="test-form-${i.id}">\n        <div>\n            <label class="l" for="toDoTitle-${i.id}">Title: </label>\n            <input class="r" type="text" id="toDoTitle-${i.id}">\n        </div>\n        <div>\n            <label class="l" for="toDoDetails-${i.id}">Details: </label>\n            <textarea class="r details" type="text-area"  id="toDoDetails-${i.id}"></textarea>\n        </div>\n        <div>\n            <label class="l" for="toDoDate-${i.id}">Date: </label>\n            <input class="r" type="date" id="toDoDate-${i.id}">\n        </div>\n        <div>\n            <label class="l">Priority: </label>\n            <div class="r">\n                <input type="radio" id="low-${i.id}" name="priority-${i.id}" value="low">\n                <label for="low-${i.id}">Low</label>\n                <input type="radio" id="medium-${i.id}" name="priority-${i.id}" value="medium">\n                <label for="medium-${i.id}">Medium</label>\n                <input type="radio" id="high-${i.id}" name="priority-${i.id}" value="high">\n                <label for="high-${i.id}">High</label>\n            </div>\n        </div>\n\n    </form>\n    <div class="to-do-button-cont">\n        <button class="td-cancel" id="to-do-cancel-${i.id}" type="button">Cancel</button>\n        <button class="td-add" id="to-do-add-${i.id}">Add To-Do</button>\n    </div>\n        `,d.appendChild(a);let r=document.createElement("div");r.classList.add("proj-to-do"),r.textContent="+",d.appendChild(r),e.appendChild(d)}}const d=document.getElementById("add-project"),l=document.getElementById("form-cancel"),o=document.getElementById("form-add-proj"),a=document.getElementById("projTitle"),r=document.getElementById("pop-up"),s=document.getElementById("dashboard");let c=[],p=new e("Make this project","Try not to have bugs and to implement more features.","2021-12-02","high"),m=new e("Happy birthday!","Must celebrate.","2022-09-22","high"),u=new n("Default","#fff");u.addToDo(p),u.addToDo(m),c.push(u);let h=new e("Make other project","Try not to blah","2023-03-11","low"),g=new e("Make other other project","Something here","2021-12-05","high"),E=new e("something","something more","2021-12-07","medium"),y=new n("Important","#ff0000");y.addToDo(h),y.addToDo(g),y.addToDo(E),c.push(y),i(c),d.addEventListener("click",(t=>{r.style.display="flex"})),l.addEventListener("click",(t=>{document.getElementById("projTitle").value="",r.style.display="none"})),o.addEventListener("click",(t=>{if(t.preventDefault(),!a.value)return;let e=new n(a.value);a.value="",c.push(e),r.style.display="none",i(c)})),s.addEventListener("click",(t=>{if(t.target.classList.contains("remove-proj")){let e=t.target.parentElement.id,n=c.find((t=>t.id===e));c.splice(c.indexOf(n),1),i(c)}})),s.addEventListener("click",(t=>{if(t.target.classList.contains("rem-to-do")){let e=t.target.parentElement.id,n=t.target.parentElement.parentElement.id;c.find((t=>t.id===n)).removeToDo(e),i(c)}})),s.addEventListener("click",(t=>{if(t.target.classList.contains("check-to-do")){let e=t.target.parentElement.id,n=t.target.parentElement.parentElement.id;c.find((t=>t.id===n)).list.find((t=>t.id===e)).toggleDone(),i(c)}})),s.addEventListener("click",(t=>{if(t.target.classList.contains("proj-to-do")){let e="to-do-cont-"+t.target.parentElement.id;document.getElementById(e).style.display="flex"}})),s.addEventListener("click",(t=>{if(t.target.classList.contains("td-add")){let n,d=t.target.parentElement.parentElement.parentElement.id,l=document.getElementById("toDoTitle-"+d).value,o=document.getElementById("toDoDetails-"+d).value,a=document.getElementById("toDoDate-"+d).value,r=document.querySelectorAll('input[name="priority-'+d+'"]');for(let t of r)if(t.checked){n=t.value;break}if(!l||!a||!n)return;let s=new e(l,o,a,n);c.find((t=>t.id===d)).list.push(s),i(c)}})),s.addEventListener("click",(t=>{if(t.target.classList.contains("td-cancel")){let e="to-do-cont-"+t.target.parentElement.parentElement.parentElement.id;document.getElementById(e).style.display="none"}})),s.addEventListener("input",(t=>{if(t.target.classList.contains("proj-title-h1")){let e=t.target.parentElement.id;c.find((t=>t.id===e)).title=t.target.textContent}})),s.addEventListener("input",(t=>{if(t.target.classList.contains("to-do-title-h1")){let e=t.target.parentElement.parentElement.id,n=t.target.parentElement.id;c.find((t=>t.id===e)).list.find((t=>t.id===n)).title=t.target.textContent}})),s.addEventListener("input",(t=>{if(t.target.classList.contains("to-do-details-p")){let e=t.target.parentElement.parentElement.id,n=t.target.parentElement.id;c.find((t=>t.id===e)).list.find((t=>t.id===n)).description=t.target.textContent}})),s.addEventListener("click",(t=>{if(t.target.classList.contains("prioritySelect")){let e=t.target.parentElement.parentElement.id,n=t.target.parentElement.parentElement.parentElement.id;c.find((t=>t.id===n)).list.find((t=>t.id===e)).priority=t.target.value,i(c)}}))})();