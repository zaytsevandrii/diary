import React, { useState } from 'react'
import Task from './Task'

function Tasks({setTasks,tasks,deleteTask,changeReminder,reminder}) {
    
  return (
    <>
        {tasks.map((task,index)=>(
            
            <Task key={index} task={task} deleteTask={deleteTask} reminder={reminder} changeReminder={changeReminder}/>
        
        ))}
    </>
  )
}

export default Tasks