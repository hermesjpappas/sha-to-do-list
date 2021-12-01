class toDo {

    static id = 0;

    constructor(title, description, dueDate, priority, done = false) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.done = done;
        this.id = toDo.id++;
    }
}

export { toDo };