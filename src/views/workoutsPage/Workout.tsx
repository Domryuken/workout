import React from "react";
import {ExerciseMax} from "./Exercise"
import WorkoutModel from "../../models/WorkoutModel"

interface Props {
  workout: WorkoutModel,
  deleteWorkout: (workout: WorkoutModel) => void
}

export const Workout: React.FC<Props> = ({
  workout,
  deleteWorkout
}) => {

  //TODO dirty work around until until I fix mongo storing dates as string for some reason
  const start = new Date(workout.startTime)
  const end = new Date(workout.endTime)
  return (
    <div className={"workout-box"}>
      <div className={"workout-box-inner"}>
        <h2>{start.toDateString()}</h2>
        <p><strong>Start time:</strong> {start.toTimeString()}</p>
        <p><strong>End time:</strong> {end.toTimeString()}</p>
      </div>
      <button onClick={() => deleteWorkout(workout)}>DELETE</button>
      {workout.exercises.map( (exercise, idx) =>
        <ExerciseMax key={idx} {...exercise}/>
      )}
    </div>
  )
}

export default Workout
