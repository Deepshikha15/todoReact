import React,{useState} from 'react'
import './App.css';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

function App() {
  const [todo, setTodo]= useState("");
  const [todos,setTodos]= useState([]);
  function addTodo(){
    if(todo !== ''){
      setTodos([...todos,todo])
      setTodo('')
    }
  }
  function remove(text){
    let newtodo = todos.filter((todo)=>{
      console.log('enter temo', todo)
      return todo !== text;
    });
    setTodos(newtodo)
  }
  
  return (
    <div className="App">
      <AddTodo todo={todo} setTodo={setTodo} addTodo={addTodo}/>
      <TodoList list={todos} remove={remove}/>
    </div>
  );
}

export default App;
