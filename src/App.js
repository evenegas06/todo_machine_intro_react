import React, { useState } from 'react';
import TodoCounter from './components/TodoCounter';
import TodoSearch from './components/TodoSearch';
import CreateTodoButton from './components/CreateTodoButton';
import TodoItem from './components/TodoItem';
import TodoList from './components/TodoList';
import { Grid } from '@mui/material';

/* ----- Variables -----*/
const defaultTodos = [
    { text: 'Terminar TODO App', completed: false },
    { text: 'Trabajar', completed: true },
    { text: 'Comer', completed: true },
    { text: 'Ser la pistola...', completed: true },
];

function App() {

    /* ----- States -----*/
    //const [completed, setCompleted] = useState(false);
    const [todos, setTodos]             = useState(defaultTodos);
    const [searchValue, setSearchValue] = useState('');

    /* ----- Variables -----*/
    const completedTodos    = todos.filter(todo => todo.completed).length;
    const totalTodos        = todos.length;

    let searchedTodos = [];

    /* ----- Functions -----*/
    const completeTodo = (text) => {
        const todoIndex = todos.findIndex((todo) => todo.text === text);
        const newTodos  = [...todos];
        
        newTodos[todoIndex].completed = !todos[todoIndex].completed;
        setTodos(newTodos); 
    }
    
    const deleteTodo = (text) => {
        const todoIndex = todos.findIndex((todo) => todo.text === text);
        const newTodos  = [...todos];
        
        newTodos.splice(todoIndex, 1);
        setTodos(newTodos); 
    }

    /* ----- Logic -----*/
    if (!searchValue.length >= 1) {
        searchedTodos = todos;
    } else {
        searchedTodos = todos.filter((todo) => {
            const todoText      = todo.text.toLocaleLowerCase();
            const searchText    = searchValue.toLocaleLowerCase();
            
            return todoText.includes(searchText);
        });
    }

    return (
        <Grid container justifyContent='center' alignItems='center'>
            <Grid item xs={8}>
                <TodoCounter
                    total={totalTodos}
                    completed={completedTodos}
                />
                <TodoSearch
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                />
                <TodoList>
                    {searchedTodos.map((todo, index) => {
                        return (
                            <TodoItem
                                key={index}
                                text={todo.text}
                                completed={todo.completed}
                                handleCompleted={() => completeTodo(todo.text)}
                                onDelete={() => deleteTodo(todo.text)}
                            />
                        )
                    })}
                </TodoList>
            </Grid>
            <Grid item xs={8}>
                <Grid container justifyContent='flex-end' alignItems='flex-end'>
                    <CreateTodoButton />
                </Grid>
            </Grid>
        </Grid>
    );
}

export default App;
