import React, {useState, useEffect} from 'react';
//import logo from './logo.svg';
import './App.css';
import axios from 'axios';
//material ui imports
import { Container, AppBar, Toolbar } from '@material-ui/core';

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
       <AppBar>
           <Toolbar display="flex" justifyContent="space-around">
                <p>NavBar Title</p>
                <a href="https://reactjs.org">link</a>
                <a href="https://reactjs.org">link</a>
                <a href="https://reactjs.org">link</a>
           </Toolbar>
       </AppBar>
        <Container className="body" my={2}>
            <h2>Todos List</h2>
            <div>
                {todos.map(todo => <div key={todo.id}>
                <p>{todo.title}</p>
                </div>)}
            </div>
        </Container>
    </div>
  );
}

export default App;
