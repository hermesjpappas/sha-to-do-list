import { toDo } from './toDo';
import { project } from './project';
import { render } from './render';
import { buttonListeners } from './listeners';


//until we make it work with localStorage
let projectArray = [];


let test = new toDo("Make this project", "Try not to have bugs and to implement more features.", "2021-12-02", "high");
let test2 = new toDo("Happy birthday!", "Must celebrate.", "2022-09-22", "high");

let defaultProject = new project("Default");

defaultProject.addToDo(test);
defaultProject.addToDo(test2);

projectArray.push(defaultProject);

let test3 = new toDo("Make other project", "Try not to blah", "2023-03-11", "low");
let test4 = new toDo("Make other other project", "Something here", "2021-12-05", "high");
let test5 = new toDo("something", "something more", "2021-12-07", "medium");

let importantProject = new project("Important");

importantProject.addToDo(test3);
importantProject.addToDo(test4);
importantProject.addToDo(test5);
projectArray.push(importantProject);


render(projectArray);

buttonListeners();


export { projectArray };