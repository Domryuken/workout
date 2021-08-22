import React, { Dispatch, SetStateAction, useContext } from "react";
import {Exercise} from "./Exercise"
import WorkoutModel from "../models/WorkoutModel"
import AddExerciseForm from "../forms/addExerciseForm/AddExerciseForm";
import { WorkoutContext } from "../context/WorkoutContext";
import { deleteWorkoutService } from "../UpdateMongoService";
import Accordion from '@material-ui/core/Accordion';
import {AccordionSummary, AccordionDetails, AccordionActions, Divider, Paper, Grid, Button } from '@material-ui/core';
import {Delete} from '@material-ui/icons';
import Box from '@material-ui/core/Box';

interface Props {
  workout: WorkoutModel,
  setWorkouts: Dispatch<SetStateAction<WorkoutModel[]>>
}

export const Workout: React.FC<Props> = ({workout}) => {

  const {setWorkouts} = useContext(WorkoutContext)

  return (
    <Accordion >
      <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
        <Grid container spacing={1} wrap="nowrap" direction="column" >
          <Grid item><strong>Date:</strong>{workout.startTime.toDateString()}</Grid>
          <Grid item><strong>Start time:</strong> {workout.startTime.toLocaleTimeString()}</Grid>
          <Grid item><strong>Duration: </strong> {workout.duration} minutes</Grid>
          <Grid item>
            <Button size="small" variant="contained" color="secondary" aria-label="remove" type="submit"
              onClick={() => deleteWorkoutService(workout, setWorkouts)}
            >
              <Delete/>
            </Button> 
          </Grid>
        </Grid>
      </AccordionSummary>
        
      <Divider />

      <AccordionDetails >
        <Grid container spacing={1} wrap="nowrap" direction="column">
          <Grid item>
            <AddExerciseForm workout={workout} /> 
          </Grid>
          {workout.exercises.map( (exercise, exerciseID) => //TODO maybe do this differently somehow
            <Grid item>
              <Exercise workout={workout} exerciseID={exerciseID}/>
            </Grid>
          )}
        </Grid>
      </AccordionDetails>
    </Accordion>
  )
}

export default Workout
