import './App.css'
import ShowsList from './ShowsList';
import Container from './Container'

function App() {
  return (
    <div className='App'>
      <Container header="Shows List">
        <ShowsList/>
      </Container>
    </div>
  );
}

export default App;
