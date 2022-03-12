//Actions
export const ADD_TASK = 'ADD_TASK'
export const REMOVE_TASK = 'REMOVE_TASK'

//Actions creators
export const addTask = (newTask) => {
    return {
        type: ADD_TASK,
        payload : {
            task: newTask,
            id: Math.ceil(Math.random() * 100)
        }
    }
}

export const removeTask = (id) => {
    return {
        type : REMOVE_TASK,
        payload: id
    }
}