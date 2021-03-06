import React, {useState, useEffect} from 'react';
//import logo from './logo.svg';
import './App.css';
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
       <nav>
           <p>NavBar Title</p>
           <a href="https://reactjs.org">link</a>
           <a href="https://reactjs.org">link</a>
           <a href="https://reactjs.org">link</a>
       </nav>
        <div className="body">
            <h2>Todos List</h2>
            <div>
                {todos.map(todo => <div key={todo.id}>
                <p>{todo.title}</p>
                </div>)}
            </div>
        </div>
    </div>
  );
}

export default App;
