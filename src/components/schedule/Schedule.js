import * as React from "react"
import ScheduleTable from "./components/ScheduleTable";
import "./Schedule.css"
import { schedule } from "./components/ScheduleData"

export default function Schedule(){
    return(
      <div className='schedule-component'>
        <div className='schedule-component__header'>Schedule</div>
        <div className='schedule-component__container'>
          <ScheduleTable schedule={schedule} />
          <div className='schedule-component__footnote'>
            All times listed are in PST.
          </div>
        </div>
      </div>
    );
}