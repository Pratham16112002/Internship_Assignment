import React from 'react'
import styled from 'styled-components'
import { Button, TextField } from '@mui/material'
import { useDispatch } from 'react-redux'

function AddNewItem() {
    const [newTask, setNewTask] = React.useState('');
    const dispatch = useDispatch();
    const addTaskHandler = () => {
        dispatch({
            type: 'ADD_TODO',
            payload: {
                id: Math.floor(Math.random() * 1000),
                title: newTask,
            }
        })
    }
    const newTaskHandler = (e) => {
        setNewTask(e.target.value);
    }

  return (
    <NewToDoWrapper>
          <h1>Add a task</h1>
          <NewItemWrapper>
              <TextField id="outlined-basic" label="New Task" variant="outlined" onChange={newTaskHandler}/>
              <Button variant="contained" color="primary" onClick={addTaskHandler}>Add</Button>
          </NewItemWrapper>
    </NewToDoWrapper>
  )
}

const NewToDoWrapper = styled.div`
    color : black;
    text-align: center;
    margin: 0;
`
const NewItemWrapper = styled.div`
    display : flex;
    flex-direction : row;
    justify-content : space-evenly;

`
export default AddNewItem;
