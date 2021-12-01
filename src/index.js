import { toDo } from './toDo';
import { project } from './project';
import { render } from './render';


//until we make it work with localStorage
let projectArray = [];


let test = new toDo("Make this project", "Try not to have bugs you stupid idiot", "2/12/2021", 3);

console.log(test.id);

let test2 = new toDo("Make more shit", "Render everything", "3/01/2022", 1);

console.log(test2.id);


let defaultProject = new project("Default", "#fff");

defaultProject.addToDo(test);
defaultProject.addToDo(test2);


projectArray.push(defaultProject);
console.log(projectArray);


render(projectArray);

