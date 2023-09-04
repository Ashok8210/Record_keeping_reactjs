import { Remove } from '@mui/icons-material'
import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';


function Fields({ name, email, index, data}) {

    return (
        <div className='data_val'>
            <h4>{name}</h4>
            <h4>{email}</h4>
            <Button variant="contained" color="error">
               <DeleteIcon/>
            </Button>
        </div>
    )
}

export default Fields