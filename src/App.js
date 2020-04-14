import React, {useState, useEffect} from 'react';
//import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Menu } from 'react-foundation'

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
       <Menu className="position-fixed-top">
           <p>NavBar Title</p>
           <a href="https://reactjs.org">link</a>
           <a href="https://reactjs.org">link</a>
           <a href="https://reactjs.org">link</a>
       </Menu>
        <div className="body margin-top-2">
            <h2>Todos List</h2>
            <div>
                {todos.map(todo => <div className="card"key={todo.id}>
                <p>{todo.title}</p>
                </div>)}
            </div>
        </div>
    </div>
  );
}

export default App;
