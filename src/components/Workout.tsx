import React from "react";
import {ExerciseMax} from "./Exercise"
import WorkoutModel from "../models/WorkoutModel"

interface Props {
  workout: WorkoutModel,
  deleteWorkoutMongo: (workout: WorkoutModel) => void
}

export const Workout: React.FC<Props> = ({
  workout,
  deleteWorkoutMongo
}) => {

  return (
    <div className={"workout-box"}>
      <div className={"workout-box-inner"}>
        <div><strong>Date:</strong>{workout.startTime.toDateString()}</div>
        <div><strong>Start time:</strong> {workout.startTime.toLocaleTimeString()}</div>
        <div><strong>Duration: </strong> {workout.duration} minutes</div>
      </div>
      <button onClick={() => deleteWorkoutMongo(workout)}>DELETE</button>
      {workout.exercises.map( (exercise, idx) =>
        <ExerciseMax {...exercise}/>
      )}
    </div>
  )
}

export default Workout
