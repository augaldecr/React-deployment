import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTask } from "../redux/actions/tasksActions";

const Tasks = () => {

    const tasks = useSelector(state => state.tasks)

    const dispatch = useDispatch()

    const handleClick = id => dispatch(removeTask(id))

    if (!tasks || !tasks.length) {
        return <p>No hay tareas</p>
    }
    return (
        <ul className="list-group">
            {tasks.map(task => <li key={task.id}
                className="list-group-item"
                onClick={() => handleClick(task.id)}>
                {task.task}
            </li>
            )}
        </ul>
    )
}

export default Tasks