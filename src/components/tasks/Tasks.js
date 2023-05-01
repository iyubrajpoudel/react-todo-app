import React from 'react'
import {ImCheckboxChecked, ImCheckboxUnchecked, ImCross} from "react-icons/im"
import "./Tasks.css"
 
const Task = ({content})=>{
    return(
        <>
          <div className="row task task-item">
            <div className="icon checked-icon"><ImCheckboxChecked /></div>
            <div className="icon unchecked-icon"><ImCheckboxUnchecked /></div>
            <div className="content"><p>{content}</p></div>
            <div className="icon cross-icon"><ImCross /></div>
          </div>
        </>
    )
}

const Tasks = () => {
  return (
    <>
      <div className="tasks-container">
        <ul className="tasks-list">
          <Task content={"ok"} />
        </ul>
      </div>
    </>
  )
}

export default Tasks