import React from 'react';
function TodoList({list, remove}){
   
    return (
        <>
        {list?.length > 0 ? (
            <ul>
                {list.map((ele,index)=>(
                    <div>
                        <li key={index}>
                        
                        
                            {ele}
                            <button onClick={()=>remove(ele)}>Delete</button>
                        </li>
                    </div>
                ))}
            </ul>
        ):(
            <div>
                <p>No Data found</p>
            </div>
        )}
       
        </>
    )
}
export default TodoList;