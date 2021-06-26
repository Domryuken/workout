import React from "react";
import {ExerciseMin, ExerciseMax} from "./Exercise"
import WorkoutModel from "../../models/WorkoutModel"


export const Workout: React.FC<WorkoutModel> = ({
  date,
  time,
  duration,
  exercises
}) => {
  return (
    <div className={"workout-box"}>
      <div className={"workout-box-inner"}>
        <h2>{date}</h2>
        <p><strong>Time:</strong> {time}</p>
        <p><strong>Duration:</strong> {duration}</p>
      </div>
      {exercises.map( (exercise, idx) =>
        <ExerciseMax key={idx} {...exercise}/>
      )}
    </div>
  )
}

export default Workout
