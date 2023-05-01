import { createContext, useContext, useState } from "react";

// creating context
const TasksData = createContext();

const TasksDataProvider = (props) => {

    //state to access and set tasks data
    const [tasks, setTasks] = useState([]);

    return (
        <TasksData.Provider value={[tasks, setTasks]}>
            {props.children}
        </TasksData.Provider>
    )
}

// custom hook for using AuthContext
const useTasksData = () => useContext(TasksData)

export { TasksDataProvider, useTasksData }