import React from "react";
import {ExerciseMin, ExerciseMax} from "./Exercise"
import WorkoutModel from "../../models/WorkoutModel"


export const Workout: React.FC<WorkoutModel> = ({
  startTime,
  endTime,
  exercises
}) => {

  //TODO dirty work around until until I fix mongo storing dates as string for some reason
  const start = new Date(startTime)
  const end = new Date(endTime)

  return (
    <div className={"workout-box"}>
      <div className={"workout-box-inner"}>
        <h2>{start.toDateString()}</h2>
        <p><strong>Start time:</strong> {start.toTimeString()}</p>
        <p><strong>End time:</strong> {end.toTimeString()}</p>
      </div>
      {exercises.map( (exercise, idx) =>
        <ExerciseMax key={idx} {...exercise}/>
      )}
    </div>
  )
}

export default Workout
