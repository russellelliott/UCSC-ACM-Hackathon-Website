import React from "react";
import "../PrizeTracks/PrizeTracks.css";
import Circle from "./Circle"

//import { ReactComponent as Newcomer } from "../../images/tracks/newcomer.svg"
//import { ReactComponent as Distinction } from "../../images/tracks/distinction.svg"
//import { ReactComponent as Community } from "../../images/tracks/community.svg"
//import { ReactComponent as GlobalImpact } from "../../images/tracks/global_impact.svg"

const Tracks = [
    [
      "",
      "Community Care",
      0,
      "In this track, hackers will focus on issues pertinent to UC Santa Cruz and the Santa Cruz Area. ",
    ],
    [
      "https://www.un.org/en/global-issues",
      "World Vision",
      2,
      "In this track, hackers will focus on global issues. Feel free to gain inspiration from:",
    ],
  ]


export default function PrizeTracks() {
    return(
        <div className='prizeTracks'>
            <div className='prizeTracks__title'>
            <div className='prizeTracks__title__container'>
                <div className='prizeTracks__title__container--header'>
                Criteria
                </div>
            </div>
            </div>
            <div className='prizeTracks__images'>
            
            {Tracks.map(image => (
                <Circle
                link={image[0]}
                hoverText={image[1]}
                key={image[2]}
                info={image[3]}
                />
            ))}
            </div>
        </div>
    )
}