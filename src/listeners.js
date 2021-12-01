import { projectArray } from './index';
import { project } from './project';
import { render } from './render';

const addButton = document.getElementById("add-project");
const cancelButton = document.getElementById("form-cancel");
const formAddButton = document.getElementById("form-add-proj");
const projTitle = document.getElementById("projTitle");
const popUp = document.getElementById("pop-up");
const dash = document.getElementById("dashboard");


function buttonListeners() {
    addButton.addEventListener("click", (e) => {
        popUp.style.display = "flex";
    });

    cancelButton.addEventListener("click", (e) => {
        popUp.style.display = "none";
    });

    formAddButton.addEventListener("click", (e) => {
        e.preventDefault();
        if(!projTitle.value) return;
        let newProj = new project(projTitle.value);
        projTitle.value = "";
        projectArray.push(newProj);
        popUp.style.display = "none";
        console.log(projectArray);
        render(projectArray);
    });

    dash.addEventListener("click", (e) => {
        if(e.target.classList.contains("remove-proj")) {
            let id = e.target.parentElement.id;
            let proj = projectArray.find(obj => obj.id === id);
            projectArray.splice(projectArray.indexOf(proj), 1);
            console.log(projectArray);
            render(projectArray);
        }
    });

    dash.addEventListener("click", (e) => {
        if(e.target.classList.contains("rem-to-do")) {
            let toDoId = e.target.parentElement.id;
            let projId = e.target.parentElement.parentElement.id;
            let proj = projectArray.find(obj => obj.id === projId);
            proj.removeToDo(toDoId);
            console.log(proj)
            render(projectArray);
        }
    });

    dash.addEventListener("click", (e) => {
        if(e.target.classList.contains("check-to-do")) {
            let toDoId = e.target.parentElement.id;
            let projId = e.target.parentElement.parentElement.id;
            let proj = projectArray.find(obj => obj.id === projId);
            let toDo = proj.list.find(obj => obj.id === toDoId);
            toDo.toggleDone();
            console.log(toDo);
            render(projectArray);
        }
    });
}

export { buttonListeners };