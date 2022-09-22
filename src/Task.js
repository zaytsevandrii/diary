import React, { useState } from 'react'
import {FaTimes} from "react-icons/fa";

function Task({task,deleteTask,reminder, changeReminder}) {

  return (
    <div className={`task ${task.reminder && 'reminder'}`} onDoubleClick={()=>changeReminder(task.id)}>
        <h3>{task.text} <FaTimes onClick={()=>deleteTask(task.id)}  style={{color:'red',cursor:'pointer'}}/></h3>
        <p>{task.day}</p>
    </div>
  )
}

export default Task