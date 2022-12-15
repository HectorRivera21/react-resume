import 'bootstrap/dist/css/bootstrap.min.css';
import { FaJsSquare, FaPython, FaDatabase, FaCode, FaEnvelope, FaPhoneSquareAlt, FaAddressBook } from "react-icons/fa";
export const ContactInfo=()=>{
	return(
		<div className='ContactInfo'>
			<li className = 'list-group-item'>
				<FaPhoneSquareAlt />
				<span>
					PhoneNumber: (956)422-0933
				</span>
			</li>
			<li className = 'list-group-item'>
				<FaEnvelope />
				<span>Email: </span>
				<a href="mailto:redmagix2000@gmail.com">
					redmagix2000@gmail.com
				</a>
			</li>
			<span/>
			<li className = 'list-group-item'>
				<FaAddressBook />
				<span>
					Address: 427 Eagle Mountain Dr, Rio Grande City, Tx
				</span>					
			</li>
		</div>
	);
};
export const Education=()=>
{
    return (
        <div className="Education">
        <h3>Degree in Computer Science</h3>
        <p>University of Rio Grande Valley</p>
        <p>Fall 2021 - Present</p>
        </div>
    );
};
export const Experience = () => {
    return (
      <div className="Experience">
        <h3>Lead Coder</h3>
        <p>RocketLaunchers - Payload </p>
        <p>January 2022 - Present</p>
      </div>
    );
};
export const Skills = () => {
    return (
      <div className="Skills">
        <h3>Languages</h3>
				<li className = 'list-group-item'>
					<FaJsSquare />
					<span>JavaScript</span>
				</li>
				<li className = 'list-group-item'>
					<FaPython />
					<span>Python</span>
				</li>
				<li className = 'list-group-item'>
					<FaCode />
					<span>C++</span>
				</li>
				<li className = 'list-group-item'>
					<FaDatabase />
					<span>SQL</span>
				</li>
      </div>
    );
};