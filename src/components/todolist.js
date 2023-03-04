import React, {useState} from 'react';


export default ()=>{

    const [todo, setTodo] = useState([]);

    const [input, setInput] = useState('')

    const submitHandler=(e)=>{
        e.preventDefault();
        setTodo([...todo, input]);
        setInput('')
    }

    const deletehandler=(index)=>{
        setTodo(todo.filter((_,i)=> i == index))
    }

    return(
        <div>
            <input type='text' value={input} onChange={(e)=>setInput(e.target.value)} />
            <button onClick={submitHandler} >ADD</button>
            {
                todo.map((res, i)=>(
                    <h3>{res}
                    <button onClick={()=>deletehandler(i)} >Delete</button>
                    </h3>
                ))
            }

        </div>
    )
}