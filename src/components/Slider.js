import { ContactInfo ,Education, Experience, Skills} from "./Components"
import Carousel from 'react-bootstrap/Carousel';
export const Slider = () =>{
    return(
        <Carousel fade>
            <Carousel.Item>
                <div className="mx-auto pr-0 p-3 col-md- card m-2 w-25">
                    <h2 className="card-title">Contact Info</h2>
                    <ContactInfo />
                </div>
            </Carousel.Item>
            <Carousel.Item>
            <div className="mx-auto pr-0 p-3 col-md- card m-2 w-25">
                <Education />
            </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="mx-auto pr-0 p-3 col-md- card m-2 w-25">
                    <Experience />
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="mx-auto pr-0 p-3 col-md- card m-2 w-25">
                    <Skills />
                </div>
            </Carousel.Item>
        </Carousel>
    )

}