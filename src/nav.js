import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSmile } from "@fortawesome/free-regular-svg-icons";

const Nav = () => {
    return (
        <div className="navbar">
        <span className="smile"><FontAwesomeIcon icon={faFaceSmile} /></span><h1>Meme Generator</h1>
        </div>
    )
}

export default Nav