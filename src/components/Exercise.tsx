import React, { useContext } from "react";
import { WorkoutContext } from "../context/WorkoutContext";
import AddSetForm from "../forms/addSetForm/AddSetForm";
import WorkoutModel from "../models/WorkoutModel";
import { deleteExerciseService } from "../UpdateMongoService";
import Set from "./Set"
import Accordion from '@material-ui/core/Accordion';
import { Button, AccordionSummary, AccordionDetails, Divider, Grid } from '@material-ui/core';
import {Delete} from '@material-ui/icons';

interface Props {
  workout: WorkoutModel,
  exerciseID: number
}

export const Exercise: React.FC<Props> = ({workout, exerciseID}) => {

  const {setWorkouts} = useContext(WorkoutContext)
  const thisExercise = workout.exercises[exerciseID]

  return (
    <Accordion >

      <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
        <Grid container spacing={1} wrap="nowrap" >
          <Grid item>
            <h3>{workout.exercises[exerciseID].name}</h3>
          </Grid>
          <Grid>
            <Button variant="contained" size="small" color="secondary" aria-label="remove" type="submit"
              onClick={() => deleteExerciseService(workout, exerciseID, setWorkouts)}>
              <Delete/>
            </Button> 
          </Grid>
        </Grid>
      </AccordionSummary>
      
      <Divider />
      
      <AccordionDetails >
        
        <Grid container spacing={1} wrap="nowrap" direction="column">
          <Grid item>
            <AddSetForm workout={workout} idx={exerciseID}/>
          </Grid>
          {thisExercise.sets.map( (set, setID) =>
            <Grid item>
              <Set exerciseID={exerciseID} setID={setID} workout={workout}/>
            </Grid>
          )}
        </Grid>
      </AccordionDetails>

      <Divider />

    </Accordion>
  )
}
