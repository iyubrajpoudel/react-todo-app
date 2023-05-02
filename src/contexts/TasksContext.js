import { createContext, useContext, useState, useEffect } from "react";

// creating context
const TasksData = createContext();

const TasksDataProvider = (props) => {

    //state to access and set tasks data
    const [tasks, setTasks] = useState([]);

    // fetching tasks data from localstorage if exists
    useEffect(() => {

        const data = localStorage.getItem("tasksData");
        if (data) {
            const parsedData = JSON.parse(data);
            setTasks(parsedData);
        }

    }, [])

    return (
        <TasksData.Provider value={[tasks, setTasks]}>
            {props.children}
        </TasksData.Provider>
    )
}

// custom hook for using AuthContext
const useTasksData = () => useContext(TasksData)

export { TasksDataProvider, useTasksData }