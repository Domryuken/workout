import React, { Dispatch, SetStateAction, useContext } from "react";
import {Exercise} from "./Exercise"
import WorkoutModel from "../models/WorkoutModel"
import AddExerciseForm from "../forms/addExerciseForm/AddExerciseForm";
import { deleteWorkout } from "../Connector";
import { WorkoutContext } from "../context/WorkoutContext";

interface Props {
  workout: WorkoutModel,
  setWorkouts: Dispatch<SetStateAction<WorkoutModel[]>>
}

export const Workout: React.FC<Props> = ({workout}) => {

  const {setWorkouts} = useContext(WorkoutContext)
  const deleteWorkoutMongo = (model: WorkoutModel) => {
    deleteWorkout(model, setWorkouts) 
  }

  return (<div className="border">
    <p><strong>Date:</strong>{workout.startTime.toDateString()}</p>
    <p><strong>Start time:</strong> {workout.startTime.toLocaleTimeString()}</p>
    <p><strong>Duration: </strong> {workout.duration} minutes</p>

    <button onClick={() => deleteWorkoutMongo(workout)}>DELETE</button>

    <AddExerciseForm workout={workout} /> 
  
    <div className="border">
      {workout.exercises.map( (exercise, exerciseID) => //TODO maybe do this differently somehow
        <Exercise workout={workout} exerciseID={exerciseID}/>
      )}
    </div>
  </div>)
}

export default Workout
