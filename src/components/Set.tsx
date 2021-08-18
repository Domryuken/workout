import React, { useContext } from "react";
import { addWorkout } from "../Connector";
import { WorkoutContext } from "../context/WorkoutContext";
import ExerciseModel from "../models/ExerciseModel";
import SetModel from "../models/SetModel"
import WorkoutModel from "../models/WorkoutModel";
import { deleteSetService} from "../UpdateMongoService";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';

interface Props {
  exerciseID: number,
  setID: number,
  workout: WorkoutModel
}

export const Set: React.FC<Props> = ({exerciseID, setID, workout}) => {

  const {setWorkouts} = useContext(WorkoutContext)

  const {reps, weight} = workout.exercises[exerciseID].sets[setID]

  return (
    <div className="flex"> 
      <div>
        <p>Reps: {reps}</p>
        <p>Weight: {weight}</p>
      </div>
    <button onClick={() => deleteSetService(workout, exerciseID, setID, setWorkouts)}>DELETE SET</button>
    </div>
  )
}

export default Set
