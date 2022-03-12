import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from "../redux/actions/tasksActions";

// Llamar TaskInput
const Task = () => {

    const dispatch = useDispatch()
    const [newTask, setNewTask] = useState('')

    const handleChange = e => setNewTask(e.target.value)

    const handleClick = () => {
        dispatch(addTask(newTask))
        setNewTask('')
    } 

    return (
        <div className="row">
        <div className="col-9">
          <input className="form-control" onChange={handleChange} type="text" value={newTask} />
        </div>
        <div className="col-1">
          <button className="btn btn-primary" onClick={handleClick}>
            Agregar
          </button>
        </div>
      </div>
  )
}

export default Task