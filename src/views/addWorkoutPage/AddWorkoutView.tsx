import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface Props {
  date: UseFormRegisterReturn,
  start: UseFormRegisterReturn,
  end: UseFormRegisterReturn
}

export const AddWorkoutView: React.FC<Props> = (registers) => {

  return (
    <div >
      <h1>Add workout</h1>

        <div className={"workout-box-inner"}>
          
          <div>
            <h2>Date:</h2>
            <div>
              <label htmlFor="date">date</label>
              <input type="date" {...registers.date} id="date"/>
            </div>
          </div>

          <div>
            <h2>Start time:</h2>
            <div>
              <label htmlFor="start">time</label>
              <input type="time" {...registers.start} id="start"/>
            </div>
          </div>

          <div>
            <h2>End time:</h2>
            <div>
              <label htmlFor="end">endTime</label>
              <input type="time" {...registers.end} id="end"/>
            </div>
          </div>

          <input type="submit"/>
          
        </div>
    </div>
  )
}

export default AddWorkoutView
