class project {

    static id = 0;

    constructor(title) {
        this.title = title;
        this.list = [];
        this.id = "P" + project.id++;
    }


    addToDo(toDoObject) {
        this.list.push(toDoObject);
    }

    //find the object based on its id 
    //and then splice-remove it using its index
    removeToDo(objectId) {
        let obj = this.list.find(obj => obj.id === objectId);
        this.list.splice(this.list.indexOf(obj), 1);
    }
}

export { project };