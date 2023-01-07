import React, { useState } from 'react';
import TodoCounter from './components/TodoCounter';
import TodoSearch from './components/TodoSearch';
import CreateTodoButton from './components/CreateTodoButton';
import TodoItem from './components/TodoItem';
import TodoList from './components/TodoList';
import { Grid } from '@mui/material';

function App() {

    /* ----- Variables -----*/
    const defaultTodos = [
        'Terminar TODO App',
        'Trabajar',
        'Comer',
        'Ser la pistola...'
    ];

    //const completedTodos = 


    /* ----- States -----*/
    //const [completed, setCompleted] = useState(false);
    const [todos, setTodos] = useState(defaultTodos);
    const [searchValue, setSearchValue] = useState('');

    return (
        <Grid container justifyContent='center' alignItems='center'>
            <Grid item xs={8}>
                <TodoCounter />
                <TodoSearch
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                />
                <TodoList>
                    {todos.map((todo, index) => {
                        return (
                            <TodoItem
                                key={index}
                                text={todo}
                            //completed={completed}
                            //setCompleted={setCompleted}
                            //onClick={handleCompleted}
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
