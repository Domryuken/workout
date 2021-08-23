import React, { useContext } from "react";
import { WorkoutContext } from "../context/WorkoutContext";
import AddSetForm from "../forms/addSetForm/AddSetForm";
import WorkoutModel from "../models/WorkoutModel";
import { deleteExerciseService } from "../UpdateMongoService";
import Set from "./Set"
import { Card, CardHeader, CardContent, Paper, Button, Grid, Typography } from '@material-ui/core';
import {Delete} from '@material-ui/icons';
import AddExerciseForm from "../forms/addSetForm/AddSetForm";

interface Props {
  workout: WorkoutModel,
  exerciseID: number
}

export const Exercise: React.FC<Props> = ({workout, exerciseID}) => {

  const {setWorkouts} = useContext(WorkoutContext)
  const thisExercise = workout.exercises[exerciseID]

  return (
    <Card>
        
      <CardHeader
        title={workout.exercises[exerciseID].name}
        action={<>
          <Button variant="contained" size="small" color="secondary" aria-label="remove" type="submit"
            onClick={() => deleteExerciseService(workout, exerciseID, setWorkouts)}>
            <Delete/>
          </Button> 
        </>}
      />

      <CardContent>
        <Grid container spacing={1} wrap="nowrap" direction="column">
          {thisExercise.sets.map( (set, setID) =>
            <Grid item>
              <Set exerciseID={exerciseID} setID={setID} workout={workout}/>
            </Grid>
          )}
          <Grid item>
            <AddSetForm workout={workout} idx={exerciseID}/>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}


export const ExerciseMin: React.FC<Props> = ({workout, exerciseID}) => {

  return (
    <Paper elevation={4} >
      <Typography align="center">{workout.exercises[exerciseID].name}</Typography>
    </Paper>
  )
}