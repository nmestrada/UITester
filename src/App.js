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
       <nav className="navbar is-fixed-top">
           <div className="navbar-brand">
               <p className="navbar-item">NavBar Title</p>
           </div>
           <div className="navbar-menu">
            <a className="navbar-item" href="https://reactjs.org">link</a>
            <a className="navbar-item" href="https://reactjs.org">link</a>
            <a className="navbar-item" href="https://reactjs.org">link</a>
           </div>
       </nav>
        <div className="container">
            <h2>Todos List</h2>
            <div>
                {todos.map(todo => <div className="box" key={todo.id}>
                <p>{todo.title}</p>
                </div>)}
            </div>
        </div>
    </div>
  );
}

export default App;
