import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Slider } from './components/Slider';
import { NavBar } from './components/Navbar';
const Title = ()=>{
  return <h1 id="ResumeTitle">Hector's Resume</h1>
}

function App() {
  return (
    <div className="App">
      <Title />
      <NavBar />
      <div className="container">
        <Slider />
      </div>
    </div>
  );
}
export default App;

