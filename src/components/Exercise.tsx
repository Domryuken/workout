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

  const deleteExerciseMongo = (workout: WorkoutModel) => {

    const updatedWorkout: WorkoutModel = {
      ...workout,
      exercises: [
        ...workout.exercises.slice(0, exerciseID),
        ...workout.exercises.slice(exerciseID+1)
      ]
    }

    addWorkout(updatedWorkout, setWorkouts)
  }

  return (<div className="border">
    <h3>{workout.exercises[exerciseID].name}</h3>

    <button onClick={() => deleteExerciseMongo(workout)}>DELETE EXERCISE</button>

    <AddSetForm workout={workout} idx={exerciseID}/>

    <div className="border">
      {workout.exercises[exerciseID].sets.map( (set, setID) =>
        <Set exerciseID={exerciseID} setID={setID} workout={workout}/>
      )}
    </div>
  </div>)
}