import React, { Dispatch, SetStateAction, useContext } from "react";
import {Exercise} from "./Exercise"
import WorkoutModel from "../models/WorkoutModel"
import AddExerciseForm from "../forms/addExerciseForm/AddExerciseForm";
import { WorkoutContext } from "../context/WorkoutContext";
import { deleteWorkoutService } from "../UpdateMongoService";

interface Props {
  workout: WorkoutModel,
  setWorkouts: Dispatch<SetStateAction<WorkoutModel[]>>
}

export const Workout: React.FC<Props> = ({workout}) => {

  const {setWorkouts} = useContext(WorkoutContext)

  return (<div className="border">
    <p><strong>Date:</strong>{workout.startTime.toDateString()}</p>
    <p><strong>Start time:</strong> {workout.startTime.toLocaleTimeString()}</p>
    <p><strong>Duration: </strong> {workout.duration} minutes</p>

    <button onClick={() => deleteWorkoutService(workout, setWorkouts)}>DELETE WORKOUT</button>

    <AddExerciseForm workout={workout} /> 
  
    <div className="border">
      {workout.exercises.map( (exercise, exerciseID) => //TODO maybe do this differently somehow
        <Exercise workout={workout} exerciseID={exerciseID}/>
      )}
    </div>
  </div>)
}

export default Workout
