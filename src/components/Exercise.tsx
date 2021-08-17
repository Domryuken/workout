import React, { useContext } from "react";
import { addWorkout } from "../Connector";
import { WorkoutContext } from "../context/WorkoutContext";
import AddSetForm from "../forms/addSetForm/AddSetForm";
import ExerciseModel from "../models/ExerciseModel";
import ExerciseDataModel from "../models/ExerciseModel"
import WorkoutModel from "../models/WorkoutModel";
import Set from "./Set"

interface Props {
  workout: WorkoutModel,
  exerciseID: number
}

export const Exercise: React.FC<Props> = ({workout, exerciseID}) => {

  const {setWorkouts} = useContext(WorkoutContext)

  return (<div className="border">
    <h3>{workout.exercises[exerciseID].name}</h3>

    <button onClick={() => deleteExerciseService(workout)}>DELETE EXERCISE</button>

    <AddSetForm workout={workout} idx={exerciseID}/>

    <div className="border">
      {workout.exercises[exerciseID].sets.map( (set, setID) =>
        <Set exerciseID={exerciseID} setID={setID} workout={workout}/>
      )}
    </div>
  </div>)
}

function deleteExerciseService(workout: WorkoutModel): void {
  throw new Error("Function not implemented.");
}
