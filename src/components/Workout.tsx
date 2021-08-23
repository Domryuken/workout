import React, { Dispatch, SetStateAction, useContext } from "react";
import {Exercise, ExerciseMin} from "./Exercise"
import WorkoutModel from "../models/WorkoutModel"
import AddExerciseForm from "../forms/addExerciseForm/AddExerciseForm";
import { WorkoutContext } from "../context/WorkoutContext";
import { deleteWorkoutService } from "../UpdateMongoService";
import {CardActionArea, Card, CardHeader, CardContent, Collapse, Grid, Button, Typography } from '@material-ui/core';
import {Delete} from '@material-ui/icons';

interface Props {
  workout: WorkoutModel,
  setWorkouts: Dispatch<SetStateAction<WorkoutModel[]>>
}

export const Workout: React.FC<Props> = ({workout}) => {

  const {setWorkouts} = useContext(WorkoutContext)

  const [expanded, setExpanded] = React.useState(false);
  const dateTime = `${workout.startTime.toLocaleDateString()} ${workout.startTime.toLocaleTimeString()}`
  const duration = `${workout.duration} minutes`

  const deleteWorkout = () => deleteWorkoutService(workout, setWorkouts)

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  
  return (
    <Card elevation={4}>

      <CardActionArea 
        onClick={handleExpandClick}
        aria-expanded={expanded}
      >
        <CardHeader
          title={dateTime}
          subheader={duration}
          action={<>
            <Button size="small" variant="contained" color="secondary" aria-label="remove" type="submit"
              onClick={ event => {
                event.stopPropagation()
                deleteWorkout()
              }}
            >
              <Delete/>
            </Button> 
            <AddExerciseForm workout={workout} /> 
          </>}
        />

        <CardContent>
          <Grid container spacing={1} >
            {workout.exercises.map( (exercise, exerciseID) => //TODO maybe do this differently somehow
              <Grid item xs={1}>
                <ExerciseMin workout={workout} exerciseID={exerciseID}/>
              </Grid>
            )}
          </Grid>
        </CardContent>
      </CardActionArea>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Grid container spacing={1} >
          {workout.exercises.map( (exercise, exerciseID) => //TODO maybe do this differently somehow
            <Grid item xs={4}>
              <Exercise workout={workout} exerciseID={exerciseID}/>
            </Grid>
          )}
        </Grid>
      </Collapse>
    </Card>
  )
}

export default Workout
