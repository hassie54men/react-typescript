import Button from "../Button.tsx";
import {useState} from "react";
import * as React from "react";

export default function ToDo() {

  const [value, setValue] = useState<string>('')
  const [todo, setTodo] = useState<string[]>([])

  function addTodo() {
    if (value.trim() !== '') {
      setTodo([...todo, value])
      setValue('')
    }
  }
  function addTodoEnter(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      addTodo()
    }
  }

  function clearTodos() {
    setTodo([])
  }

  function deleteTodo(index: number){
    setTodo(todo.filter((_, item) => item !== index))
  }



  return (
     <div>
       <label>
         <Button onClick={clearTodos}>Очистить</Button>
         <input
            type="text"
            placeholder='введите задачу'
            value={value}
            onChange={event => setValue(event.target.value)}
            onKeyDown={addTodoEnter}
         />
         <Button onClick={addTodo}>Добавить</Button>
       </label>
       <ul>
         {todo.map((item,index) => (
            <>
              <input type="checkbox" onChange={() => console.log(`выбрано дело под номером ${index + 1}`)}/>
              <li key={index}>{item}</li>
              <Button onClick={() => deleteTodo(index)}>Удалить</Button>
            </>
         ))
         }
       </ul>
     </div>
  )
}