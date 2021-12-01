class project {

    static id = 0;

    constructor(title, color) {
        this.title = title;
        this.color = color;
        this.list = [];
        this.id = "P" + project.id++;
    }


    addToDo(toDoObject) {
        this.list.push(toDoObject);
    }

    //find the object based on its id 
    //and then splice-remove it using its index
    removeToDo(id) {
        let obj = this.list.find(obj => obj.id === id);
        this.list.splice(this.list.indexOf(obj), 1);
    }
}

export { project };