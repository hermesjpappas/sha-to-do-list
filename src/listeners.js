import { projectArray } from './index';
import { project } from './project';
import { render } from './render';
import { toDo } from './toDo';

const addButton = document.getElementById("add-project");
const cancelButton = document.getElementById("form-cancel");
const formAddButton = document.getElementById("form-add-proj");
const projTitle = document.getElementById("projTitle");
const popUp = document.getElementById("pop-up");
const dash = document.getElementById("dashboard");


function buttonListeners() {
    
    //make new project add pop up appear
    addButton.addEventListener("click", (e) => {
        popUp.style.display = "flex";
    });

    //cancel adding a new project
    cancelButton.addEventListener("click", (e) => {
        let newTitle = document.getElementById("projTitle");
        newTitle.value = "";
        popUp.style.display = "none";
    });

    //adding a new project from the form
    formAddButton.addEventListener("click", (e) => {
        e.preventDefault();
        if(!projTitle.value) return;
        let newProj = new project(projTitle.value);
        projTitle.value = "";
        projectArray.push(newProj);
        popUp.style.display = "none";
        render(projectArray);
    });

    //event listener for removing projects
    dash.addEventListener("click", (e) => {
        if(e.target.classList.contains("remove-proj")) {
            let id = e.target.parentElement.id;
            let proj = projectArray.find(obj => obj.id === id);
            projectArray.splice(projectArray.indexOf(proj), 1);
            render(projectArray);
        }
    });

    //event listener for removing individual to-dos
    dash.addEventListener("click", (e) => {
        if(e.target.classList.contains("rem-to-do")) {
            let toDoId = e.target.parentElement.id;
            let projId = e.target.parentElement.parentElement.id;
            let proj = projectArray.find(obj => obj.id === projId);
            proj.removeToDo(toDoId);
            render(projectArray);
        }
    });

    //event listener for each "done" button for to-dos
    dash.addEventListener("click", (e) => {
        if(e.target.classList.contains("check-to-do")) {
            let toDoId = e.target.parentElement.id;
            let projId = e.target.parentElement.parentElement.id;
            let proj = projectArray.find(obj => obj.id === projId);
            let toDo = proj.list.find(obj => obj.id === toDoId);
            toDo.toggleDone();
            render(projectArray);
        }
    });


    //event listener for "add to do" button for each project
    dash.addEventListener("click", (e) => {
        if(e.target.classList.contains("proj-to-do")) {
            let projId = e.target.parentElement.id;
            let formName = "to-do-cont-" + projId;
            let form = document.getElementById(formName);
            form.style.display = "flex";
        }
    });

    //event listener for adding new to-do within project
    dash.addEventListener("click", (e) => {
        if(e.target.classList.contains("td-add")) {
            let projId = e.target.parentElement.parentElement.parentElement.id;
            let title = document.getElementById("toDoTitle-" + projId).value;
            let details = document.getElementById("toDoDetails-" + projId).value;
            let dueDate = document.getElementById("toDoDate-" + projId).value;
            let priority = document.querySelectorAll('input[name="priority-' + projId +'"]');
            let selectedPriority;
            for(let radio of priority) {
                if (radio.checked) {
                    selectedPriority = radio.value;
                    break;
                }
            }

            if(!title || !details || !dueDate || !selectedPriority) return;

            let newToDo = new toDo(title, details, dueDate, selectedPriority);

            let proj = projectArray.find(obj => obj.id === projId);
            proj.list.push(newToDo);
            render(projectArray);

        }
    });

    //event listener for adding new to-do within project
    dash.addEventListener("click", (e) => {
        if(e.target.classList.contains("td-cancel")) {
            let projId = e.target.parentElement.parentElement.parentElement.id;
            let contName = "to-do-cont-" + projId;
            let cont = document.getElementById(contName);

            //TO-DO: Make cancel clear the form

            cont.style.display = "none";
        }
    });

    //event listener for editable project titles
    dash.addEventListener("input", (e) => {
        if(e.target.classList.contains("proj-title-h1")) {
            let projId = e.target.parentElement.id;
            let proj = projectArray.find(obj => obj.id === projId);
            proj.title = e.target.textContent;
        }
    });

    //event listener for editable to-do titles
    dash.addEventListener("input", (e) => {
        if(e.target.classList.contains("to-do-title-h1")) {
            let projId = e.target.parentElement.parentElement.id;
            let toDoId = e.target.parentElement.id;
            let proj = projectArray.find(obj => obj.id === projId);
            let toDo = proj.list.find(obj => obj.id === toDoId); 
            toDo.title = e.target.textContent;    
        }
    });

    //event listener for editable to-do details / description
    dash.addEventListener("input", (e) => {
        if(e.target.classList.contains("to-do-details-p")) {
            let projId = e.target.parentElement.parentElement.id;
            let toDoId = e.target.parentElement.id;
            let proj = projectArray.find(obj => obj.id === projId);
            let toDo = proj.list.find(obj => obj.id === toDoId); 
            toDo.description = e.target.textContent;  
        }
    });
}

export { buttonListeners };