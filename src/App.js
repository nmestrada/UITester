import React, {useState, useEffect} from 'react';
//import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import 'materialize-css';
import { Card, CardTitle } from 'react-materialize';

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
           <div className="nav-wrapper">
                <a href="https://reactjs.org" className="brand-logo">Nav Bar Title</a>
                <ul className="right hide-on-med-and-down">
                    <li><a href="https://reactjs.org">link</a></li>
                    <li><a href="https://reactjs.org">link</a></li>
                    <li><a href="https://reactjs.org">link</a></li>
                </ul>
           </div>
       </nav>
        <div className="body">
            <h2 className="center-align">Todos List</h2>
            <div className="container">
                {todos.map(todo => <Card key={todo.id} className="collapsible">
                <CardTitle className="black-text collapsible-header">{todo.title}</CardTitle>
                </Card>)}
            </div>
        </div>
    </div>
  );
}

export default App;
