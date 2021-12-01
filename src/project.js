class project {

    constructor(title, color) {
        this.title = title;
        this.color = color;
        this.list = [];
    }


    addToDo(toDoObject) {
        this.list.push(toDoObject);
    }

    removeToDo(id) {
        let obj = this.list.find(obj => obj.id === id);
        this.list.splice(this.list.indexOf(obj), 1);
    }
}

export { project };