import React from "react";
import amitProfile from "../images/amit-profile.png";
import "../style.css";
import { FaEnvelope } from "react-icons/fa";

function Info() {
    return (
        <>
            <div className="InfoContainer">
                <img className="amitprofile" src={amitProfile} />
                <p className="Amit-Pawar">Amit Pawar</p>
                <p className="web-developer">Web Developer</p>
                <button class="Info-btn"><FaEnvelope /> Email</button>
            </div>
        </>
    )
}

export default Info;