import { Component } from "react";
import { FaLinkedin, FaInstagramSquare, FaGithubSquare, FaTwitter ,FaFire } from "react-icons/fa";
import "./Components.css";
class NavBar extends Component{
    state = {clicked: false};
    handleClick=()=>
    {
        this.setState({clicked:!this.state.clicked});
    }
    render(){
        return(
            <nav>
                <div>
                    <div >
                        
                    </div>
                    <ul 
                        id="navbar" 
                        className={this.state.clicked ? 
                        "#navbar active":"navbar"}
                    >
                        <li id = "resumetitle"><h1 >Hector's Resume</h1></li>
                        <li>
                            <a  href="https://www.linkedin.com/in/hector-rivera-651b04255/">
                                <FaLinkedin />
                                <span>
                                    Linkedin
                                </span>
                            </a>
                        </li>
                    
                        <li>
                            <a href="https://www.instagram.com/hector_.21/">
                                <FaInstagramSquare />
                                <span>
                                    Instagram
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/HectorRivera21">
                                <FaGithubSquare />
                                <span>
                                    GitHub
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/hrivera_21">
                                <FaTwitter />
                                <span>
                                    Twitter
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="https://console.firebase.google.com/project/hector-react-firebase/overview">
                                <FaFire />
                                <span>
                                    FireBase
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div id="mobile" onClick={this.handleClick}>
                    <i id="bar" className={this.state.clicked ? 'fas fa-times':'fas fa-bars'}></i>
                    
                </div>
            </nav>
        );
    }
}

export default NavBar;