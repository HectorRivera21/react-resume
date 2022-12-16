import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Slider } from './components/Slider';
import { NavBar } from './components/Navbar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <Slider />
      </div>
    </div>
  );
}
export default App;

