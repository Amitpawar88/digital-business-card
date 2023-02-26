import React from "react";
import amitProfile from "../images/amit-profile.png";
import "../style.css";

function Info() {
    return (
        <>
            <img src={amitProfile} />
            <h1>Amit Pawar</h1>
            <h3>Web Developer</h3>
            <button class="btn"><i class="fa-solid fa-envelope"></i> Email</button>
            <button class="btn"><i class="fa-brands fa-linkedin"></i> Linkedin</button>
        </>
    )
}

export default Info;