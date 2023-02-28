import errorManager from "./error-manager";
const THIS_SCRIPT = 'task-manager.js';

class Task {
    constructor(name, description, index) {
        this.name = name;
        this.description = description;
        this.index = index;
    }
    priority = 0;
}
class Category {
    constructor(name) {
        this.name = name;
    }
    tasks = [];

    newTask = (name, description) => {
        let newTask = new Task(name, description, this.tasks.length);
        this.tasks.push(newTask);
        return newTask;
    }
    getTasks = () => {
        return this.tasks;
    }
    removeTask = (taskIndexOrObject) => {
        let taskIndex = getArrayIndex(taskIndexOrObject, this.tasks);
        if (taskIndex < 0) return;
        this.tasks.splice(taskIndex, 1);
        updateIndexes(this.tasks);
        return;
    }
}

//all public functions to go in here
const taskManager = (() => {
    const _categories = [];

    const newCategory = (name) => {
        const category = new Category(name);
        category.index = _categories.length;
        _categories.push(category);
        return category;
    }
    const newTask = (name, description, categoryIndex = 0) => {
        if (_categories.length <= 0) {
            newCategory('General');
        }
        if ((typeof (categoryIndex) !== 'number') || (categoryIndex >= _categories.length)) {
            const info = `taskManager.newTask(categoryIndex) error\n categoryIndex <${categoryIndex}> out of range in ${_categories}`;
            const additionalInfo = `categoryIndex defaulting to 0`;
            errorManager.new(THIS_SCRIPT, info, additionalInfo);
            categoryIndex = 0;
        }
        const category = _categories[categoryIndex];
        return category.newTask(name, description);
    }
    const getCategories = () => {
        return _categories;
    }
    const getTasks = (category) => {
        if ((typeof (category) !== 'object') && (typeof (category) !== 'number')) {
            const errorMessage = `category <${category}> is not an index or an object.`;
            errorManager.new(THIS_SCRIPT, errorMessage);
            return;
        }
        if (typeof (category) === 'number') {
            if (category >= _categories.length) {
                const errorMessage = `categoryIndex <${category}> is out of bounds in _categories`;
                const errorMessage2 = `_categories.length <${_categories.length}>`;
                errorManager.new(THIS_SCRIPT, errorMessage, errorMessage2);
                return;
            }
            category = _categories[category];
        }
        return category.getTasks();
    }
    const removeCategory = (categoryOrIndex) => {
        let categoryIndex = getArrayIndex(_categories[categoryOrIndex], getCategories());
        if(categoryIndex < 0) return;
        console.log('1');
        _categories.splice(categoryIndex,1);
        console.log('2');
        updateIndexes(_categories);
    }
    return { newCategory, newTask, getCategories, getTasks, removeCategory };
})();
export default taskManager;

function updateIndexes(array) {
    let errorMessage = false;
    if (typeof (array) !== 'object') {
        errorMessage = `array <${array}> is not an object.`;
    }
    if (array.length <= 0) {
        errorMessage = `array<${array}>.length<${array.length}> is invalid.`;
    }
    if (errorMessage) {
        errorManager.new(THIS_SCRIPT, errorMessage, "exiting");
        return 0;
    }
    for (let i = 0; i < array.length; i++) {
        array[i].index = i;
    }
    return array;
}
function getArrayIndex(taskIndexOrObject, array){
    if (typeof (taskIndexOrObject) === 'object') {
        taskIndexOrObject = taskIndexOrObject.index;
    }
    if (typeof ((taskIndexOrObject) === 'number') && (array[taskIndexOrObject] !== undefined)) {
        return taskIndexOrObject;
    }
    else {
        const errorMessage = `Category.removeTask(task) error\n task <${taskIndexOrObject}> is not an index or an object.`;
        const errorMessage2 = `removeTask() failed - returning`;
        errorManager.new(THIS_SCRIPT, errorMessage, errorMessage2);
        return -1;
    }
}



//populate with data:
for (let i = 0; i < 5; i++) {
    let cat = taskManager.newCategory(`cat_${i}`);
    for (let j = 0; j < 5; j++) {
        cat.newTask(`task_${j}`, `This is task number ${j} in category ${cat.name}`);
    }
}

let tcategories = taskManager.getCategories();
console.log(tcategories);
console.log(tcategories[0]);
console.log('Categories populated');
tcategories[1].removeTask(1);
console.log(taskManager.getCategories());



