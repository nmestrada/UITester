import React, {useState, useEffect} from 'react';
//import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Container, Menu, Item} from 'semantic-ui-react'

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
       <Menu fixed="top">
           <Menu.Item
            name="Navbar Title"
           />
           <Menu.Item
            name="Link"
           />
           <Menu.Item><a href="https://reactjs.org">link</a></Menu.Item>
           <Menu.Item><a href="https://reactjs.org">link</a></Menu.Item>
       </Menu>
        <Container className="body">
            <h2>Todos List</h2>
            <Item.Group divided>
                {todos.map(todo => <Item key={todo.id}>
                <Item.Content>{todo.title}</Item.Content>
                </Item>)}
            </Item.Group>
        </Container>
    </div>
  );
}

export default App;
