import React from 'react';
import { List } from '@mui/material';


const TodoList = ({ children }) => {
    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {children}
        </List>

    );
}

export default TodoList;