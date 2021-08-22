import React, { useContext } from "react";
import { WorkoutContext } from "../context/WorkoutContext";
import WorkoutModel from "../models/WorkoutModel";
import { deleteSetService} from "../UpdateMongoService";
import { Button, Grid, Container } from '@material-ui/core';
import {Delete} from '@material-ui/icons';

interface Props {
  exerciseID: number,
  setID: number,
  workout: WorkoutModel
}

export const Set: React.FC<Props> = ({exerciseID, setID, workout}) => {

  const {setWorkouts} = useContext(WorkoutContext)

  const {reps, weight} = workout.exercises[exerciseID].sets[setID]

  return (
    <Container >
      <Grid container spacing={1} wrap="nowrap" >
        <Grid item>Reps: {reps}</Grid>
        <Grid item>Weight: {weight}</Grid>
        <Grid item>
          <Button size="small" variant="contained" color="secondary" aria-label="remove" type="submit"
            onClick={() => deleteSetService(workout, exerciseID, setID, setWorkouts)}>
            <Delete/>
          </Button> 
        </Grid>
      </Grid>
    </Container>

  )
}

export default Set
