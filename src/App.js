
import './App.css';
import styled from 'styled-components'
import { Button } from '@mui/material';
import ListCompoonent from './components/ListComponent';
import AddNewItem from './components/addNewItem';


function App() {
  return (
      <Root>
      <StyledHeader>
        <StyledHeading>
            To Do App
        </StyledHeading>
        <Button variant="contained">Reset</Button>
      </StyledHeader>
      <ItemsWrapper>
        <AddNewItem/>
        <ListCompoonent/>
      </ItemsWrapper>
      </Root>
  );
}

const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-evenly;
  justify-content: start;
  margin-top: 0px;
`

const StyledHeader = styled.div`
  background-color: #282c34;  
  width : 100%;
  text-align : center;
  display : flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const StyledHeading = styled.h1`
  color : white;
  padding : 10px;
  margin : 0;

`
const Root = styled.div`
  height: 100%;
  
`

export default App;
