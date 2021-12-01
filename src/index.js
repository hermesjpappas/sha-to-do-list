import { toDo } from './toDo';
import { project } from './project';


//until we make it work with localStorage
let projectArray = [];


let test = new toDo("Make this project", "blah blah", "2/12/2021", 3);

console.log(test.id);

let test2 = new toDo("blah blah", "blah", "3/01/2022", 1);

console.log(test2.id);


let defaultProject = new project("Default", "#fff");
projectArray.push(defaultProject);

defaultProject.addToDo(test);
defaultProject.addToDo(test2);

console.log(defaultProject.list);

defaultProject.removeToDo(1);
defaultProject.removeToDo(0);

console.log(defaultProject.list);