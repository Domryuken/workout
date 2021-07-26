import React from "react";
import {ExerciseMin, ExerciseMax} from "./Exercise"
import WorkoutModel from "../../models/WorkoutModel"
import { deleteWorkout } from "../../Connector";

export const Workout: React.FC<WorkoutModel> = ({
  _id,
  startTime,
  endTime,
  exercises
}) => {

  //TODO dirty work around until until I fix mongo storing dates as string for some reason
  const start = new Date(startTime)
  const end = new Date(endTime)

  console.log(_id)
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
      {_id? <a className="delete-button" onClick={() => deleteWorkout(_id)}>delete</a> : <a>not ready</a>}
    </div>
  )
}

export default Workout
