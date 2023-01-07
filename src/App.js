import React, { Fragment } from 'react';
import TodoCounter from './components/TodoCounter';
import TodoSearch from './components/TodoSearch';
import CreateTodoButton from './components/CreateTodoButton';
import TodoItem from './components/TodoItem';
import TodoList from './components/TodoList';

import './App.css';

function App() {
    return (
        <Fragment>
            <TodoCounter />
            <TodoSearch />
            <TodoList>
                <TodoItem text={'Terminar todo machine...'}/>
            </TodoList>
            <CreateTodoButton />
        </Fragment>
    );
}

export default App;
