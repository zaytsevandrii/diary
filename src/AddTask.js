import React, { useState } from 'react'

function AddTask({addTask}) {
    const onSubmit= (e)=>{
        e.preventDefault()
        addTask({text,day,reminder})

        setText('')
        setDay('')
        setReminder(false)
    }

    const[text,setText]=useState('')
    const[day,setDay]=useState('')
    const[reminder,setReminder] = useState(false)

  return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
            <label htmlFor="">Задача</label>
            <input type="text" placeholder='Добавить задачу' id="" value={text} onChange={e=>setText(e.target.value)}/>
        </div>
        <div className='form-control'>
            <label htmlFor="">Дата & Время</label>
            <input type="text" placeholder='Добавить дату' id="" value={day} onChange={e=>setDay(e.target.value)}/>
        </div>
        <div className='form-control form-control-check'>
            <label htmlFor="">Важность</label>
            <input type="checkbox" checked={reminder} placeholder='Add Task' id="" onChange={e=>setReminder(e.currentTarget.checked)} />
        </div>
        <input type="submit" value='Сохранить задачу' className='btn btn-block'/>
    </form>
  )
}

export default AddTask