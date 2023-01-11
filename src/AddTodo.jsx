import React from 'react';
function AddTodo({todo,setTodo,addTodo}){
    return (
        <div>
           <input type="text" placeholder='Enter your task' value={todo} onChange={(event)=>setTodo(event.target.value)}/>
            <button onClick={addTodo}>Add</button>
        </div>
    )
}
export default AddTodo;