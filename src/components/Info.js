import * as React from "react"
import "./Info.css";
import "../App.css";

import PrizeTracks from "./PrizeTracks/PrizeTracks"
import Criteria from "./Criteria/Criteria"

export default function Info(){
    return(
      <div>
        <h2 className = "unity">Theme: Unity</h2>
        <p className="subtitle">The theme for ACMHacks 2023 is unity. Unity not only represents harmony but also embraces diversity in bringing together various aspects into a cohesive piece.</p>
        <p className="subtitle">Thus, we challenge hackers to incorporate different aspects of computer science and different technologies in their projects.</p>
        <p className="subtitle">We encourage hackers to look beyond the hackathon for solutions that can be implemented in the real world.</p>
        <p className="subtitle">As the Association for Computer Machinery, ACM delves into different fields from Artificial Intelligence to Web Development.</p>
        <p className="subtitle">Our hackathon will host workshops on these topics and more, thus no experience is required!</p>

        <Criteria/>
        <PrizeTracks/>
        
      </div>
    );
}