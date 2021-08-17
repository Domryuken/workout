import React, { useContext } from "react";
import { addWorkout } from "../Connector";
import { WorkoutContext } from "../context/WorkoutContext";
import ExerciseModel from "../models/ExerciseModel";
import SetModel from "../models/SetModel"
import WorkoutModel from "../models/WorkoutModel";
import { deleteSetService} from "../UpdateMongoService";

interface Props {
  exerciseID: number,
  setID: number,
  workout: WorkoutModel
}

export const Set: React.FC<Props> = ({exerciseID, setID, workout}) => {

  const {setWorkouts} = useContext(WorkoutContext)

  const {reps, weight} = workout.exercises[exerciseID].sets[setID]

  return (
    <div className="border">
      <p>Reps: {reps}</p>
      <p>Weight: {weight}</p>
      <button onClick={() => deleteSetService(workout, exerciseID, setID, setWorkouts)}>DELETE SET</button>
    </div>
  )
}

export default Set
