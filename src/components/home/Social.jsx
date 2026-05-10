import React from "react";
import { FiGithub, FiLinkedin} from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const Social = () => {
    return (
        <div className="home__social">
            <a href="https://www.instagram.com/bong_drifter/" className="home__social-icon" target="_blank" rel="noreferrer">
                <FaInstagram />
            </a>
            <a href="https://github.com/koustav29" className="home__social-icon" target="_blank" rel="noreferrer">
                <FiGithub />
            </a>
            <a href="https://www.linkedin.com/in/koustav2998/" className="home__social-icon" target="_blank" rel="noreferrer">
                <FiLinkedin />
            </a>
        </div> 
    ); 
}

export default Social;