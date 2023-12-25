import './App.css';
import l1 from './pics/1.png';
import styled from "styled-components";
const Button = styled.button`
background-color : black;
color : white;
font-size : 20;
padding : 20px;
`
const Container = styled.div`
background-color: 'blue';
min-height: '30vh';
min-width: '30vw';
`
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Love is a familiar way to express emotions
        </p>
        <Button>Click Me</Button>
        <Container>{l1}</Container>
        
          
      </header>
    </div>
  );
}

export default App;
