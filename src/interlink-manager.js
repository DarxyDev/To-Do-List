import taskManager from './task-manager.js';

const interlinkManager = (() => {
    const getTaskArray = (categoryIndex) => {
        return taskManager.getTasks(categoryIndex);
    }
    const getCategoryArray = () => {
        return taskManager.getCategories();
    }
    const newCategory = (name) => {
        return taskManager.newCategory();
    }
    const removeCategory = (index) =>{
        taskManager.removeCategory(index);
    }
    return { getTaskArray, getCategoryArray, newCategory, removeCategory };
})()

export default interlinkManager;