import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar';
import { Slider } from './components/Slider';


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

