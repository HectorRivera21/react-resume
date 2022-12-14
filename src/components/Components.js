import 'bootstrap/dist/css/bootstrap.min.css';
export const ContactInfo=()=>{
	return(
		<div className='pr-0 ContactInfo'>
			<li className = 'list-group-item'>PhoneNumber: (956) 422 - 0933</li>
			<li className = 'list-group-item'>Email:<a href="mailto:redmagix2000@gmail.com">redmagix2000@gmail.com</a></li>
			<li className = 'list-group-item'>Address: 427 Eagle Mountain Dr, Rio Grande City, Tx</li>
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
				<li className = 'list-group-item'>JavaScript</li>
				<li className = 'list-group-item'>Python</li>
				<li className = 'list-group-item'>C++</li>
				<li className = 'list-group-item'>SQL</li>
      </div>
    );
};