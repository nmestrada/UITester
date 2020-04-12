import React, {useState, useEffect} from 'react';
//import logo from './logo.svg';
//import './App.css';
import axios from 'axios';

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(()=> {
    async function fetchTodos() {
        try {
            const {data} = await axios.get('https://jsonplaceholder.typicode.com/todos');
            setTodos(data);
        }catch(err) {
            console.log(err.message)
        }
    }
    fetchTodos();   
  }, [todos])
  return (
    <div className="app">
       <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
           <p>Simple Nav Bar Title</p>
           <div className="w-full mx-5 block flex-grow lg:flex lg:items-center lg:w-auto">
           <a href="https://reactjs.org">link</a>
           <a href="https://reactjs.org">link</a>
           <a href="https://reactjs.org">link</a>
           </div>
       </nav>
        <div className="flex flex-col container mx-auto my-12 px-6 items-center justify-center">
            <h2 className="text-center">Todos List</h2>
            <div>
                {todos.map(todo => 
                <div key={todo.id} className ="bg-white border rounded-lg p-4 my-5">
                    <p>Title: <strong>{todo.title}</strong></p>
                </div>)}
            </div>
        </div>
    </div>
  );
}

export default App;
