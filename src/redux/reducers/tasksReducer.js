import { ADD_TASK, REMOVE_TASK } from "../actions/tasksActions";

const initialState = {
    tasks: [],
}

const todos = (state = initialState, action) => {
    switch (action.type) {
        //case 'ADD_TASK':
        case ADD_TASK:
            return {
                ...state, 
                tasks: [...state.tasks, action.payload ]
            }    
        //case 'REMOVE_TASK':
        case REMOVE_TASK:
                return {
                    ...state, 
                    tasks: state.tasks.filter( task => task.id !== action.payload )
                } 
        default:
            return state;
    }
}

export default todos