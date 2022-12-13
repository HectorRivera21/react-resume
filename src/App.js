import './App.css';
import { ContactInfo ,Education, Experience, Skills } from './components/Components';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 id="ResumeTitle">My Resume</h1>
        <div className="horizontal-line"></div>
        <div className="row g-2">
          <div className="mx-auto pr-0 p-3 col-md- card m-2 w-25">
            <h2 className="card-title">Contact Info</h2>
            <ContactInfo />
          </div>
        </div>
        <div className="row g-2">
          <div className="col card m-2 w-25">
            <h2 className="card-title">Education</h2>
            <Education />
          </div>
          <div className="col card m-2 w-25">
            <h2 className="card-title">Work Experience</h2>
              <Experience />
          </div>
          <div className="col card m-2 w-25">
            <h2 classN="card-title">Skills</h2>
              <Skills />
          </div>
          
        </div>
      </div>
    </div>
  );
}
export default App;
