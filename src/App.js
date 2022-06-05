import './App.css';
import styled from 'styled-components'
import Home from './components/Home';
import { MealProvider } from './components/MealContext';

const Container = styled.div`
  background-color: #f9fdff;
`

function App() {
  return (
    <Container>
      <MealProvider>
        <Home />
      </MealProvider>
    </Container>
  );
}

export default App;
