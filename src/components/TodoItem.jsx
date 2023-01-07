import React, { useState } from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';


const TodoItem = ({ text }) => {

    /* ----- State -----*/
    const [completed, setCompleted] = useState(false);
    const [deleted, setDeleted] = useState(false);

    /* ----- Functions -----*/
    const handleCompleted = () => {
        setCompleted(!completed);
        alert(`Completaste el TODO: ${text}`);
    }
    
    const handleDeleted = () => {
        setDeleted(!deleted);
        alert(`Eliminaste el TODO: ${text}`);
    }

    return (
        <ListItem
            secondaryAction={
                <IconButton
                    edge='end'
                    aria-label='comments'
                    onClick={handleDeleted}
                    className='delete-icon'
                >
                    <DeleteIcon />
                </IconButton>
            }
            disablePadding
        >
            <ListItemButton dense onClick={handleCompleted}>
                <ListItemIcon>
                    <Checkbox
                        edge='start'
                        checked={completed}
                        tabIndex={-1}
                        disableRipple
                    />
                </ListItemIcon>
                <ListItemText 
                    primary={text} 
                    sx={{
                        textDecoration: completed && 'line-through'
                    }}
                />
            </ListItemButton>
        </ListItem>
    );
}

export default TodoItem;