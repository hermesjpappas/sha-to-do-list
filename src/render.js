import { project } from "./project";
import { toDo } from "./toDo";

function render(projectList) {
  const dash = document.getElementById("dashboard");
  dash.innerHTML = "";

  for (let i = 0; i < projectList.length; i++) {
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

    for (let j = 0; j < proj.list.length; j++) {
      let toDoItem = proj.list[j];

      let toDoDiv = document.createElement("div");
      toDoDiv.id = toDoItem.id;
      toDoDiv.classList.add("to-do");

      let title = document.createElement("h1");
      title.textContent = toDoItem.title;

      let dueDate = document.createElement("h2");
      dueDate.textContent = "Due: " + toDoItem.dueDate;
      dueDate.style.fontStyle = "italic";

      let priority = document.createElement("h2");
      priority.textContent = "Priority: " + toDoItem.priority;

      let description = document.createElement("p");
      description.textContent = toDoItem.description;

      let remToDoButton = document.createElement("div");
      remToDoButton.classList.add("rem-to-do");
      remToDoButton.textContent = "-";

      let checkButton = document.createElement("div");
      checkButton.classList.add("check-to-do");

      if (toDoItem.done === true) {
        checkButton.innerHTML = "&#10004;";
        checkButton.style.backgroundColor = "green";
        dueDate.style.textDecoration = "line-through";
        priority.style.textDecoration = "line-through";
        title.style.textDecoration = "line-through";
        description.style.textDecoration = "line-through";
        toDoDiv.style.backgroundColor = "rgba(var(--to-do-color), 0.6)";
      } else {
        checkButton.innerHTML = "&times;";
        checkButton.style.backgroundColor = "#777";
      }

      toDoDiv.appendChild(title);
      toDoDiv.appendChild(dueDate);
      toDoDiv.appendChild(priority);
      toDoDiv.appendChild(description);
      toDoDiv.appendChild(remToDoButton);
      toDoDiv.appendChild(checkButton);

      projDiv.appendChild(toDoDiv);
    }

    let toDoCont = document.createElement("div");  
    toDoCont.id = `to-do-cont-${proj.id}`;
    toDoCont.classList.add("form-container");
    toDoCont.innerHTML = `
    <h1>Add To-Do</h1>
    <form id="test-form-${proj.id}">
        <div>
            <label class="l" for="toDoTitle-${proj.id}">Title: </label>
            <input class="r" type="text" id="toDoTitle-${proj.id}">
        </div>
        <div>
            <label class="l" for="toDoDetails-${proj.id}">Details: </label>
            <textarea class="r details" type="text-area"  id="toDoDetails-${proj.id}"></textarea>
        </div>
        <div>
            <label class="l" for="toDoDate-${proj.id}">Date: </label>
            <input class="r" type="date" id="toDoDate-${proj.id}">
        </div>
        <div>
            <label class="l">Priority: </label>
            <div class="r">
                <input type="radio" id="low-${proj.id}" name="priority" value="low">
                <label for="low-${proj.id}">Low</label>
                <input type="radio" id="medium-${proj.id}" name="priority" value="medium">
                <label for="medium-${proj.id}">Medium</label>
                <input type="radio" id="high-${proj.id}" name="priority" value="high">
                <label for="high-${proj.id}">High</label>
            </div>
        </div>

    </form>
    <div class="to-do-button-cont">
        <button class="td-cancel" id="to-do-cancel-${proj.id}" type="button">Cancel</button>
        <button class="td-add" id="to-do-add-${proj.id}">Add To-Do</button>
    </div>
        `;

    projDiv.appendChild(toDoCont);

    let projAddToDoButton = document.createElement("div");
    projAddToDoButton.classList.add("proj-to-do");
    projAddToDoButton.textContent = "+";

    projDiv.appendChild(projAddToDoButton);

    dash.appendChild(projDiv);
  }
}

export { render };
