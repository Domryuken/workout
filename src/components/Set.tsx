import React, { useContext } from "react";
import { addWorkout } from "../Connector";
import { WorkoutContext } from "../context/WorkoutContext";
import ExerciseModel from "../models/ExerciseModel";
import SetModel from "../models/SetModel"
import WorkoutModel from "../models/WorkoutModel";

interface Props {
  exerciseID: number,
  setID: number,
  workout: WorkoutModel
}

export const Set: React.FC<Props> = ({exerciseID, setID, workout}) => {

  const {setWorkouts} = useContext(WorkoutContext)

  const deleteSetMongo = (workout: WorkoutModel) => {

    const updatedExercise: ExerciseModel = {
      ...workout.exercises[exerciseID],
      sets: [
        ...workout.exercises[exerciseID].sets.slice(0, setID),
        ...workout.exercises[exerciseID].sets.slice(setID+1)
      ]
    }

    const updatedWorkout: WorkoutModel = {
      ...workout,
      exercises: [
        ...workout.exercises.slice(0, exerciseID),
        updatedExercise,
        ...workout.exercises.slice(exerciseID+1)
      ]
    }

    addWorkout(updatedWorkout, setWorkouts)
  }

  const {reps, weight} = workout.exercises[exerciseID].sets[setID]

  return (
    <div className="border">
      <p>Reps: {reps}</p>
      <p>Weight: {weight}</p>
      <button onClick={() => deleteSetMongo(workout)}>DELETE</button>
    </div>
  )
}

export default Set
