import React from "react";
import "../PrizeTracks/PrizeTracks.css";

export default function Circle(props) {
    //const [isHovered, setHover] = React.useState(false)
    return (
        /*<div
            className='prizeTracks__images__container'
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            {isHovered ? (
                <div className='prizeTracks__images__container--hover'>
                    <div className='prizeTracks--unselectable'>{props.hoverText}</div>
                </div>
            ) : null}
            <div className='prizeTracks__images__container--image'>{props.image}</div>
        </div>*/
        <div className='prizeTracks__images__container'>
            <div className='prizeTracks__images__container--image'>{props.hoverText}</div>
            <div className='prizeTracks__images__container--image'>{props.info}</div>
            {props.info!=="" ? (
                <div className='prizeTracks__images__container--image'>
                    <a href = {props.link}
                    target="_blank"
                    rel="noopener noreferrer">{props.link}
                    </a>
                </div>
            ) : null}
            
        </div>
    );
}