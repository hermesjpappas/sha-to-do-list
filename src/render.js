import { project } from './project';
import { toDo } from './toDo';



function render(projectList) {
   
   const dash = document.getElementById("dashboard");
   dash.innerHTML = "";

    for(let i=0; i<projectList.length; i++) {
        let proj = projectList[i];

        let projDiv = document.createElement("div");
        projDiv.classList.add("project");
        projDiv.id = proj.id;

        let projTitle = document.createElement("h1");
        projTitle.textContent = proj.title;
        projDiv.appendChild(projTitle);

        let removeButton = document.createElement("div");
        removeButton.classList.add("remove-proj");
        removeButton.textContent = "-";
        projDiv.appendChild(removeButton);

        for(let j=0; j<proj.list.length; j++) {
            
            let toDoItem = proj.list[j];

            let toDoDiv = document.createElement("div");
            toDoDiv.id = toDoItem.id;
            toDoDiv.classList.add("to-do");
            
            let title = document.createElement("h1");
            title.textContent = toDoItem.title;

            let description = document.createElement("p");
            description.textContent = toDoItem.description;

            let remToDoButton = document.createElement("div");
            remToDoButton.classList.add("rem-to-do");
            remToDoButton.textContent = "-";

            let checkButton = document.createElement("div");
            checkButton.classList.add("check-to-do");

            if(toDoItem.done === true) {
                checkButton.innerHTML = "&#10004;";
                checkButton.style.backgroundColor = "green";
                title.style.textDecoration = "line-through";
                description.style.textDecoration = "line-through";
                toDoDiv.style.backgroundColor = "rgba(var(--to-do-color), 0.6)";
            }
            else {
                checkButton.innerHTML = "&times;"; 
                checkButton.style.backgroundColor = "#777";
            }
            

            toDoDiv.appendChild(title);
            toDoDiv.appendChild(description);
            toDoDiv.appendChild(remToDoButton);
            toDoDiv.appendChild(checkButton);

            projDiv.appendChild(toDoDiv);
        
        
        }

        dash.appendChild(projDiv);
    }
}

export { render };