import Button from "../Button.tsx";
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
    setTodos(todos.map(todo =>
       todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  }


  function addTodo() {
    if (value.trim() !== '') {
      setTodos([...todos, {
        id: Math.random(),
        text: value,
        completed: false,
      }])
      setValue('')
    }
  }
  function addTodoEnter(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      addTodo()
    }
  }

  function clearTodos() {
    setTodos([])
  }

  function deleteTodo(index: number){
    setTodos(todos.filter((_, item) => item !== index))
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
         {todos.map((item,index) => (
            <div className='todo-item' style={{borderColor: item.completed ? 'red' : 'black' }} key={item.id}>
              <input
                 type="checkbox"
                 checked={item.completed}
                 onChange={() => toggleTodo(item.id)}
              />
              <li>{item.text}</li>
              <Button onClick={() => deleteTodo(index)}>Удалить</Button>
            </div>
         ))
         }
       </ul>
     </div>
  )
}