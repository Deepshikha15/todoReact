import React,{useState} from 'react'
import './App.css';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import { useDispatch, useSelector } from 'react-redux';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  const products= useSelector(state => state.products)
  const users = useSelector(state => state.users)
  const user = useSelector(state => state.user)
  const [todo, setTodo]= useState("");
  const [todos,setTodos]= useState([]);
  const dispatch = useDispatch();
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
      {
        products.map( prod =>
          <div key={prod.id}>
            {prod.name} - {prod.price}
          </div>
          
        )
      }
      {
        users.map( user =>
          <div key={user.id}>
            {user.username}
          </div>
          
        )
      }
      <Register/>
      <br/>
      {
        user ? <input type='button' value='Logout' onClick={()=>{
          dispatch({
            type:'LOGOUT',
          })
        }}/> : <Login/>
      }
      
      <AddTodo todo={todo} setTodo={setTodo} addTodo={addTodo}/>
      <TodoList list={todos} remove={remove}/>
    </div>
  );
}

export default App;
