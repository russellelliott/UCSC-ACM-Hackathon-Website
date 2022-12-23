import React from "react";
import "../App.css";

export default function Button(props) {
    
    return (
        <div className="window-card-button">
            <a
				href={props.link}
				target="_blank"
				rel="noopener noreferrer"
				className="join button">
				{props.text}
			</a>
        </div>
    );
}