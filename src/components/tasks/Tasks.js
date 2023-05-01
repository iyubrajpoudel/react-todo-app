import React, { useState } from 'react'
import { ImCheckboxChecked, ImCheckboxUnchecked, ImCross } from "react-icons/im"
import "./Tasks.css"
import { useTasksData } from '../../contexts/TasksContext'


const Task = ({ content, index }) => {
  const [checked, setChecked] = useState(false);

  const [tasks, setTasks] = useTasksData();


  const deleteItem = (index) => {
    // tasks.splice(index, 1);
    // let newTasks = tasks.splice(index, 1);
    // setTasks(...tasks.splice(index, 1))
    const temp = tasks.filter((item, i) => i !== index);
    setTasks(temp);
  }

  return (
    <>
      <div className="row task task-item">
        {checked ? <div className="icon checked-icon"><ImCheckboxChecked /></div> : <div className="icon unchecked-icon" onClick={() => setChecked(!checked)}><ImCheckboxUnchecked /></div>}
        <div className="content" onClick={() => setChecked(!checked)} style={checked ? { textDecoration: "line-through", color: "#555" } : {}}><p>{content}</p></div>
        <div className="icon cross-icon" onClick={() => deleteItem(index)}><ImCross /></div>
      </div >
    </>
  )
}

const Tasks = () => {
  const [tasks] = useTasksData();

  return (
    <>
      <div className="tasks-container">
        <ul className="tasks-list">
          {tasks.map((item, index) => <Task key={index} index={index} content={item} />)}
        </ul>
      </div>
    </>
  )
}

export default Tasks