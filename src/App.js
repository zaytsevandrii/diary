import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Tasks from './Tasks';
import { useEffect, useState } from 'react';
import AddTask from './AddTask';

function App() {
const [showAdd,setShowAdd] = useState(false)



  const [tasks,setTasks] = useState(()=>{
   
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });
/*     [
        {
            id:1,
            text:'Learning React',
            day:'Tue 20th all day',
            reminder:true
        },
        {
            id:2,
            text:'Eating dinner',
            day:'Tue 20th at 16',
            reminder:false
        },
        {
            id:3,
            text:'Brushing teath',
            day:'Tue 20th at 21-00',
            reminder:false
        },
    ]
) */


useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(tasks));
}, [tasks]);



const showAddFun = ()=>{
  setShowAdd(!showAdd)
}

const [reminder,setReminder] = useState(false)

const deleteTask = (id) => {
  setTasks(tasks.filter(task=>task.id!==id))
}

const changeReminder = (id)=>{
  console.log(id)
setTasks(tasks.map(task=>task.id===id ? {...task, reminder:!task.reminder} : task
))
}

const addTask = (task)=>{
  const id = Math.floor(Math.random()*10000)
  const newTask = {...task,id}
  setTasks([...tasks,newTask])

}

  return (
    <div className="container">
      <Header title='Ежедневник' showAddFun={showAddFun} showAdd={showAdd}/>
      {showAdd&&<AddTask addTask={addTask}/>}
      {tasks.length>0?    
      <Tasks changeReminder={changeReminder} tasks={tasks} setTasks={setTasks} deleteTask={deleteTask} reminder={reminder} />
    :'Нет задач...'}
    </div>
  );
}

export default App;
