import * as React from "react"
import "./Info.css";
import "../App.css";

import PrizeTracks from "./PrizeTracks/PrizeTracks"
import Criteria from "./Criteria/Criteria"

export default function Info(){
    return(
      <div>
        <h2 className = "unity">Theme: Unity</h2>
        <p>The theme for ACMHacks 2023 is unity. Unity not only represents harmony but also embraces diversity in bringing together various aspects into a cohesive piece. Thus, we challenge hackers to incorporate different aspects of computer science and different technologies in their projects. We encourage hackers to look beyond the hackathon for solutions that can be implemented in the real world.&nbsp;</p>
        <p>As the Association for Computer Machinery, ACM delves into different fields from Artificial Intelligence to Web Development. Our hackathon will host workshops on these topics and more, thus no experience is required!</p>

        <Criteria/>
        <PrizeTracks/>
        <div align="left">
                <table>
                    <tbody>
                        <tr>
                            <th>
                                <p>Theme: Unity</p>
                            </th>
                        </tr>
                        <tr>
                            <td>
                                <p>The theme for ACMHacks 2023 is unity. Unity not only represents harmony but also embraces diversity in bringing together various aspects into a cohesive piece. Thus, we challenge hackers to incorporate different aspects of computer science and different technologies in their projects. We encourage hackers to look beyond the hackathon for solutions that can be implemented in the real world.&nbsp;</p>
                                <p>As the Association for Computer Machinery, ACM delves into different fields from Artificial Intelligence to Web Development. Our hackathon will host workshops on these topics and more, thus no experience is required!</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div align="left">
                <table>
                    <tbody>
                        <tr>
                            <th colspan="2">
                                <p>Criteria</p>
                            </th>
                        </tr>
                        <tr>
                            <th>
                                <p>Community Care</p>
                            </th>
                            <th>
                                <p>World Vision</p>
                            </th>
                        </tr>
                        <tr>
                            <td>
                                <p>In this track, hackers will focus on issues pertinent to UC Santa Cruz and the Santa Cruz Area.&nbsp;</p>
                            </td>
                            <td>
                                <p>In this track, hackers will focus on global issues. Feel free to gain inspiration from:&nbsp;<a href="https://www.un.org/en/global-issues">https://www.un.org/en/global-issues</a>&nbsp;</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>


            <div align="left">
                <table>
                    <tbody>
                        <tr>
                            <th colspan="4">
                                <p>Prizes</p>
                            </th>
                        </tr>
                        <tr>
                            <th>
                                <p>Newcomer Prize</p>
                            </th>
                            <th>
                                <p>Distinction Award</p>
                            </th>
                            <th>
                                <p>Best Community Solution</p>
                            </th>
                            <th>
                                <p>Best Global Impact Solution</p>
                            </th>
                        </tr>
                        <tr>
                            <td>
                                <p>Prize for first-time hackers</p>
                            </td>
                            <td>
                                <p>Prize for most innovative, useful solution</p>
                            </td>
                            <td>
                                <p>Prize for best project developed through Community Care Track</p>
                            </td>
                            <td>
                                <p>Prize for best project developed through World Vision Track</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        
      </div>
    );
}