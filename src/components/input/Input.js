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

const Button = ({ children, id, onClick }) => {
    return (
        <>
            <button id={id} onClick={onClick}>{children}</button>
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
    const [task, setTask] = useState("");

    //useeffect

    // useEffect(() => {
    //     console.log(tasks);
    // }
    //     , [])


    // const handleChange = (e) => { setTask(e.target.value) }

    //targets
    const taskInput = document.getElementById("taskInput");

    const handleAdd = async (e) => {
        // console.log("clicked!");
        // console.log(tasks);
        if (task === "") {
            alert("Enter task to add..");
            return taskInput.focus();
        }
        // let newtasks = tasks.push(task);
        // setTasks(tasks.push(task));
        setTasks([...tasks, task]);
        // console.log(tasks);

        // saving tasks in localstorage
        const saveData = () => {
            // localStorage.setItem("tasksData", JSON.stringify(tasks));
            localStorage.setItem("tasksData", JSON.stringify([...tasks, task]));
        }
        saveData();
        // await saveData();

        // await localStorage.setItem("tasksData", JSON.stringify(tasks))

        setTask("")
        taskInput.focus();

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