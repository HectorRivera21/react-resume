import { FaLinkedin, FaInstagramSquare, FaGithubSquare, FaTwitter ,FaFire } from "react-icons/fa";
import "./Components.css";
export const NavBar = () =>{
    return(
        <nav>
            <div>
                <ul id="navbar">
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
        </nav>
    );
}