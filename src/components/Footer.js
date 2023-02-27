import React from "react";
import "../style.css";
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {
    return (
        <>
            <div class="footer-content">
                <a href="https://github.com/Amitpawar88">
                    <FaGithub />      
                </a> 
                <a href="https://twitter.com/_amitpawar">
                <FaTwitter />      
                </a> 
                <a href="https://linkedin.com/in/amitpawar88">
                <FaLinkedin />      
                </a> 
                <a href="https://www.instagram.com/amit_pawar_88/">
                <FaInstagram />      
                </a> 
            </div>
        </>
    )
}

export default Footer;