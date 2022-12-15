import './Components.css';
import { ContactInfo ,Education, Experience, Skills} from "./InfoCards"
import Carousel from 'react-bootstrap/Carousel';
export const Slider = () =>{
    return(
        <Carousel fade>
            <Carousel.Item>
                <div className="card mx-auto pr-0 p-3 col-md- m-2 w-40">
                    <h2 className="card-title">Contact Info</h2>
                    <ContactInfo />
                </div>
            </Carousel.Item>
            <Carousel.Item>
            <div className="card mx-auto pr-0 p-3 col-md- m-2 w-40">
                <Education />
            </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="card mx-auto pr-0 p-3 col-md- m-2 w-40">
                    <Experience />
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="card mx-auto pr-0 p-3 col-md- m-2 w-40">
                    <Skills />
                </div>
            </Carousel.Item>
        </Carousel>
    )

}