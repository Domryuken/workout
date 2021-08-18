import React, { useContext } from "react";
import { WorkoutContext } from "../context/WorkoutContext";
import AddSetForm from "../forms/addSetForm/AddSetForm";
import WorkoutModel from "../models/WorkoutModel";
import { deleteExerciseService } from "../UpdateMongoService";
import Set from "./Set"
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionActions from '@material-ui/core/AccordionActions';
import Divider from '@material-ui/core/Divider';

interface Props {
  workout: WorkoutModel,
  exerciseID: number
}

export const Exercise: React.FC<Props> = ({workout, exerciseID}) => {

  const {setWorkouts} = useContext(WorkoutContext)
  const thisExercise = workout.exercises[exerciseID]

  return (

    <Accordion className="flex-col-reverse">

      <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
        <h3>{workout.exercises[exerciseID].name}</h3>
      </AccordionSummary>

      <Divider />

      <AccordionDetails className="flex-col">
        <AddSetForm workout={workout} idx={exerciseID}/>
        <div className="flex-col">
          {thisExercise.sets.map( (set, setID) =>
            <Set exerciseID={exerciseID} setID={setID} workout={workout}/>
          )}
       </div> 
      </AccordionDetails>

      <Divider />

      <AccordionActions>
        <button onClick={() => deleteExerciseService(workout, exerciseID, setWorkouts)}>DELETE EXERCISE</button>
      </AccordionActions>

    </Accordion>
  )
}
