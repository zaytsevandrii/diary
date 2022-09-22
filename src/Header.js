import React from 'react'
import Button from './Button'

function Header({title,showAddFun,showAdd}) {
  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button color={`${showAdd?'red':'green'}`} text={`${showAdd?'Закрыть':'Добавить'}`} showAddFun={showAddFun}/>
    </header>
  )
}

export default Header