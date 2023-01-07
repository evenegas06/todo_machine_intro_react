import React from 'react';
import TodoCounter from './components/TodoCounter';
import TodoSearch from './components/TodoSearch';
import CreateTodoButton from './components/CreateTodoButton';
import TodoItem from './components/TodoItem';
import TodoList from './components/TodoList';
import { Grid } from '@mui/material';


function App() {
    return (
        <Grid container justifyContent='center' alignItems='center'>
            <Grid item xs={8}>
                <TodoCounter />
                <TodoSearch />
                <TodoList>
                    <TodoItem text={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo doloribus error magnam.'} />
                    <TodoItem text={'Terminar todo machine...'} />
                    <TodoItem text={'Terminar todo machine...'} />
                    <TodoItem text={'Terminar todo machine...'} />
                    <TodoItem text={'Terminar todo machine...'} />
                    <TodoItem text={'Terminar todo machine...'} />
                    <TodoItem text={'Terminar todo machine...'} />
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
