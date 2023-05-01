import { createContext, useContext, useState } from "react";

const TasksContext = createContext()

const TasksProvider = (props) =>{
    const [tasks, setTasks] = useState([]);

    return (
        <TasksContext.Provider>
            {props.children}
        </TasksContext.Provider>
    )
}

// custom hook for using TasksContext
const useTasks = () => useContext(TasksContext);

export {useTasks, TasksProvider}