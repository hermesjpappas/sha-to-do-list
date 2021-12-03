import { toDo } from './toDo';
import { project } from './project';
import { render } from './render';
import { buttonListeners } from './listeners';


//until we make it work with localStorage
let projectArray = [];


let test = new toDo("Make this project", "Try not to have bugs and to implement more features.", "2021-12-02", "high");
let test2 = new toDo("Happy birthday!", "Must celebrate.", "2022-09-22", "medium");

let defaultProject = new project("Default");

defaultProject.addToDo(test);
defaultProject.addToDo(test2);

projectArray.push(defaultProject);


render(projectArray);

buttonListeners();


export { projectArray };