import { FaLinkedin, FaInstagramSquare, FaGithubSquare, FaTwitter } from "react-icons/fa";
export const NavBar = () =>{
    return(
        <nav>
            <a href="https://www.linkedin.com/in/hector-rivera-651b04255/">
            <FaLinkedin />
            <span>
                Linkedin
            </span>
            </a>|
            <a href="https://www.instagram.com/hector_.21/">
                <FaInstagramSquare />
                <span>
                    Instagram
                </span>
            </a>|
            <a href="https://github.com/HectorRivera21">
                <FaGithubSquare />
                <span>
                    GitHub
                </span>
            </a>|
            <a href="https://twitter.com/hrivera_21">
                <FaTwitter />
                <span>
                    Twitter
                </span>
            </a>
        </nav>
    );
}