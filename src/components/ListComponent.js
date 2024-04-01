
import React , { useEffect, useState } from 'react';
import styled from 'styled-components';
import ListItem from './ListItem';
import { useSelector } from 'react-redux';

const dummyData = [
  {
    id: 1,
    title: 'Buy groceries',
    completed: false,
  },
  {
    id: 2,
    title: 'Finish homework',
    completed: true,
  },
  {
    id: 3,
    title: 'Call mom',
    completed: false,
  },
  {
    id: 4,
    title: 'Go for a run',
    completed: false,
  },
  {
    id: 5,
    title: 'Read a book',
    completed: true,
  },
];

function ListCompoonent() {
    let Todos = [];
    const [todos, setTodos] = useState([]);
     Todos = useSelector((state) => state.todos);
    useEffect( () => {
          setTodos(Todos)
    }, [])
    console.log(Todos)
    if(Todos.length === 0){
        return (
            <EmptyTask>
            <h1>No Task ! 🫡</h1>
            </EmptyTask>
        )
    }
  return (
    <ListComponentWrapper>
          <ListComponentHeading>To do's</ListComponentHeading>
           {Todos.map((item) => (
                   <ListItem item={item} />
            ))}
    </ListComponentWrapper>
  );
}

const EmptyTask = styled.div`
    text-align: center;
    margin-top: 20px;
    font-size: 30px;
    color: #f00;
`

const ListComponentHeading = styled.h1`
    font-size: 30px;
    margin: 3;`
const ListComponentWrapper = styled.div`
    background-color: #66B2FF;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: start;
    margin : 30px;
`

export default ListCompoonent;