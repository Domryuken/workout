import React, { Dispatch, SetStateAction } from "react";
import {Exercise} from "./Exercise"
import WorkoutModel from "../models/WorkoutModel"
import AddExerciseForm from "../forms/addExerciseForm/AddExerciseForm";

interface Props {
  workout: WorkoutModel,
  idx: number,
  deleteWorkoutMongo: (workout: WorkoutModel) => void
  setWorkouts: Dispatch<SetStateAction<WorkoutModel[]>>
}

export const Workout: React.FC<Props> = ({workout, deleteWorkoutMongo, setWorkouts}) => {

  return (<div className="border">
    <p><strong>Date:</strong>{workout.startTime.toDateString()}</p>
    <p><strong>Start time:</strong> {workout.startTime.toLocaleTimeString()}</p>
    <p><strong>Duration: </strong> {workout.duration} minutes</p>
    <button onClick={() => deleteWorkoutMongo(workout)}>DELETE</button>

    <AddExerciseForm workout={workout} setWorkouts={setWorkouts}/>
  
    <div className="border">
      {workout.exercises.map( (exercise, idx) =>
        <Exercise exercise={exercise} idx={idx}/>
      )}
    </div>
  </div>)
}

export default Workout
