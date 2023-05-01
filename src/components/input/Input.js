import React, { useEffect, useState } from 'react'
import "./Input.css"

//Contexts
import { useTasksData } from '../../contexts/TasksContext'

// Components

const InputField = ({ type, id, name, placeholder, value, onChange }) => {
    return (
        <>
            <input type={type} id={id} name={name} placeholder={placeholder} value={value} onChange={onChange} />
        </>
    )
}

const Button = ({ children, id }) => {
    return (
        <>
            <button id={id}>{children}</button>
        </>
    )
}


// functions
const handleAdd = () => {

}

const Input = () => {

    // using context via custom hook defined in /src/contexts/TasksContext.js
    const [tasks, setTasks] = useTasksData();

    // states
    const [task, setTask] = useState();

    //useeffect

    useEffect(() => {
        console.log(tasks);
    }
        , [])


    // const handleChange = (e) => {setTask(e.target.value)}

    const handleAdd = () => {
        setTasks(tasks.push(task));
        console.log(tasks);
    }

    return (
        <>
            <div className="row task-input">
                {/* <InputField type="text" id="taskInput" name="" placeholder={"Enter task here.."} onChange={handleChange} value={task} /> */}
                <InputField type="text" id="taskInput" name="" placeholder={"Enter task here.."} onChange={(e) => setTask(e.target.value)} value={task} />
                <Button id="addBtn" onClick={handleAdd}>Add</Button>
            </div>
        </>
    )
}


export default Input