import React, {useState, useEffect} from 'react';
//import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import styled from 'styled-components'
const Navbar = styled.nav `
    display: flex;
    justify-content: space-around;
`;
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

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
       <Navbar>
           <p>NavBar Title</p>
           <a href="https://reactjs.org">link</a>
           <a href="https://reactjs.org">link</a>
           <a href="https://reactjs.org">link</a>
       </Navbar>
        <div className="body">
            <Title>
                <h2>Todos List</h2>
            </Title>
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
