import { toDo } from './toDo';
import { project } from './project';
import { render } from './render';
import { buttonListeners } from './formAdd';


//until we make it work with localStorage
let projectArray = [];


let test = new toDo("Make this project", "Try not to have bugs you stupid idiot", "2/12/2021", 3);
let test2 = new toDo("Make more shit", "Render everything", "3/01/2022", 1);

let defaultProject = new project("Default", "#fff");

defaultProject.addToDo(test);
defaultProject.addToDo(test2);

projectArray.push(defaultProject);

let test3 = new toDo("Make other project", "Try not to blah", "5/12/2021", 3);
let test4 = new toDo("Make other other project", "Something here", "5/12/2021", 3);
let test5 = new toDo("something", "something more", "12/12/2021", 2);

let importantProject = new project("Important", "#ff0000");

importantProject.addToDo(test3);
importantProject.addToDo(test4);
importantProject.addToDo(test5);
projectArray.push(importantProject);


render(projectArray);

buttonListeners();