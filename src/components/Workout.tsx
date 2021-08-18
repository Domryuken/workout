import React, { Dispatch, SetStateAction, useContext } from "react";
import {Exercise} from "./Exercise"
import WorkoutModel from "../models/WorkoutModel"
import AddExerciseForm from "../forms/addExerciseForm/AddExerciseForm";
import { WorkoutContext } from "../context/WorkoutContext";
import { deleteWorkoutService } from "../UpdateMongoService";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionActions from '@material-ui/core/AccordionActions';
import Divider from '@material-ui/core/Divider';

interface Props {
  workout: WorkoutModel,
  setWorkouts: Dispatch<SetStateAction<WorkoutModel[]>>
}

export const Workout: React.FC<Props> = ({workout}) => {

  const {setWorkouts} = useContext(WorkoutContext)

  return (
    <Accordion>

      <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
        <div className="flex">
          <p><strong>Date:</strong>{workout.startTime.toDateString()}</p>
          <p><strong>Start time:</strong> {workout.startTime.toLocaleTimeString()}</p>
          <p><strong>Duration: </strong> {workout.duration} minutes</p>
        </div>
      </AccordionSummary>
      
      <Divider />

      <AccordionDetails className="flex-col">
        <AddExerciseForm workout={workout} /> 
        <div className="flex-col">
          {workout.exercises.map( (exercise, exerciseID) => //TODO maybe do this differently somehow
            <Exercise workout={workout} exerciseID={exerciseID}/>
          )}
        </div>
      </AccordionDetails>

      <Divider />

      <AccordionActions>
        <button onClick={() => deleteWorkoutService(workout, setWorkouts)}>DELETE WORKOUT</button>
      </AccordionActions>

    </Accordion>
  )
}

export default Workout
