import * as React from "react"
import "./ScheduleTable.css"
import { ReactComponent as LeftArrow } from "../../../images/schedule/left-arrow.svg"
import { ReactComponent as RightArrow } from "../../../images/schedule/right-arrow.svg"
import { schedule } from "./ScheduleData"
import { useState } from "react"

function ScheduleTable(){
    var date = new Date()
    var defaultPage = 0

    var day1 = new Date(2022, 0, 15);
    var day2 = new Date(2022, 0, 16);
    var day3 = new Date(2022, 0, 17)

  // +new Date(2022, 0, 15) -> 1642233600000
  // +new Date(2022, 0, 16) -> 1642320000000
  // +new Date(2022, 0, 17) -> 1642406400000
  if (date >= day1 && date < day2) {
    // January 15, 2022
    defaultPage = 1
  } else if (date >= day2 && date < day3) {
    // January 16, 2022
    defaultPage = 2
  }

  const [page, setPage] = useState(defaultPage)

  const prevPage = () => {
    if (page > 0) setPage(page - 1)
  }

  const nextPage = () => {
    if (page < schedule.length - 1) setPage(page + 1)
  }

  const current = schedule[page]
  //const current = ScheduleData[page]

  return (
    <div className='schedule-table'>
      <div className='schedule-table__table'>
        <div className='schedule-table__header'>{current.date}</div>
        <div className='schedule-table__container'>
          {current.events.map(event => (
            <div key={event.name} className='schedule-table__event'>
              <div className='schedule-table__event__time'>{event.time}</div>
              <div className='schedule-table__event__divider' />
              <div className='schedule-table__event__text'>{event.name}</div>
            </div>
          ))}
        </div>
      </div>
      <div className='schedule-table__arrows'>
        <LeftArrow
          className='schedule-table__button schedule-table__button--previous'
          onClick={prevPage}
        />
        <RightArrow
          className='schedule-table__button schedule-table__button--next'
          onClick={nextPage}
        />
      </div>
    </div>
  )
}

export default ScheduleTable;
