import React from "react";
import "./PrizeTracks.css";
import Circle from "./Circle"

import { ReactComponent as Newcomer } from "../../images/tracks/newcomer.svg"
import { ReactComponent as Distinction } from "../../images/tracks/distinction.svg"
import { ReactComponent as Community } from "../../images/tracks/community.svg"
import { ReactComponent as GlobalImpact } from "../../images/tracks/global_impact.svg"

const Tracks = [
    [
      <Newcomer className='prizeTracks--svg-shadow prizeTracks--track-img-dimensions' />,
      "Newcomer Award",
      0,
      "Prize for first-time hackers",
    ],
    [
      <Distinction className='prizeTracks--svg-shadow prizeTracks--track-img-dimensions-justice' />,
      "Distinction Award",
      2,
      "Prize for most innovative, useful solution",
    ],
    [
      <Community className='prizeTracks--svg-shadow prizeTracks--track-img-dimensions-education' />,
      "Best Community Solution",
      1,
      "Prize for best project developed through Community Care Track",
    ],
    [
      <GlobalImpact className='prizeTracks--svg-shadow prizeTracks--track-img-dimensions' />,
      "Best Global Impact Solution",
      3,
      "Prize for best project developed through World Vision Track",
    ],
  ]


export default function PrizeTracks() {
    return(
        <div className='prizeTracks'>
            <div className='prizeTracks__title'>
            <div className='prizeTracks__title__container'>
                <div className='prizeTracks__title__container--header'>
                Prize Tracks
                </div>
            </div>
            </div>
            <div className='prizeTracks__images'>
            {Tracks.map(image => (
                <Circle
                image={image[0]}
                hoverText={image[1]}
                key={image[2]}
                info={image[3]}
                />
            ))}
            </div>
        </div>
    )
}