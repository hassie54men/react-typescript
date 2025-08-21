import Button from "../Button";
import {useState} from "react";
import * as React from "react";

export default function ToDo() {

  type TodoItem = {
    id: number;
    text: string;
    completed: boolean;
  };

  const [value, setValue] = useState<string>('')
  const [todos, setTodos] = useState<TodoItem[]>([]);

  function toggleTodo(id: number) {
    setTodos((todos) => todos.map(todo =>
       todo.id === id ? { ...todo, completed: !todo.completed} : todo
    ));

  }


  function addTodo(e: React.FormEvent) {
    e.preventDefault()
    if (value.trim() !== '') {
      setTodos((todos) => [
        ...todos,
        {
          id: todos.length + 1,
          text: value,
          completed: false,
        },
      ])
      setValue('')
      console.log('hello')
    }
  }
  function addTodoEnter(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      addTodo(event)
    }
  }

  function clearTodos() {
    setTodos([])
  }

  function deleteTodo(id: number){
    setTodos(todos.filter((item) => item.id !== id))
  }


  return (
     <div onKeyDown={addTodoEnter}>
         <Button onClick={clearTodos}>Очистить</Button>
       <form action="" onSubmit={addTodo}>
         <label>
           <input
              type="text"
              placeholder='введите задачу'
              value={value}
              onChange={event => setValue(event.target.value)}
           />
         </label>
         <Button>Добавить</Button>
       </form>
       <ul>
         {todos.map((item) => (
            <div className='todo-item' style={{borderColor: item.completed ? 'red' : 'black' }} key={item.id}>
              <input
                 type="checkbox"
                 checked={item.completed}
                 onChange={() => toggleTodo(item.id)}
              />
              <li>{item.text}</li>
              <Button onClick={() => deleteTodo(item.id)}>Удалить</Button>
            </div>
         ))
         }
       </ul>
     </div>
  )
}