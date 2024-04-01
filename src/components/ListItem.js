import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import styled from "styled-components";

function ListItem({ item }) {
    const dispatch = useDispatch();
    console.log(item.id)
    function deleteItemHandler() {
        dispatch({
            type: 'DELETE_TODO',
            payload: item.id
        })
    }
    return (
        <ListItemWrapper>
            <ListItemTitle>{item.title}</ListItemTitle>
            <Button variant="contained" color="primary" onClick={deleteItemHandler}>Done</Button>
        </ListItemWrapper>
    );
}

const ListItemWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid #e0e0e0;
`;

const ListItemTitle = styled.span`
    font-size: 20px;
    margin: 0;
    style: none;
`

export default ListItem;