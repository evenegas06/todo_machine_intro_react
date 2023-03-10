import React from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

const CreateTodoButton = () => {
    return (
        <Fab color='primary' aria-label='add'>
            <AddIcon />
        </Fab>
    );
}

export default CreateTodoButton;