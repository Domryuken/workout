import { useContext } from "react";
import {Workout} from "./Workout"
import AddWorkoutForm from "../forms/addWorkoutForm/AddWorkoutForm";
import { WorkoutContext } from "../context/WorkoutContext";
import { Container } from '@material-ui/core';
import Box from '@material-ui/core/Box';

export const AllWorkouts = () => {

  const {workouts, setWorkouts} = useContext(WorkoutContext)

  return (
      <Container >
        <h1>Workouts</h1>
        <AddWorkoutForm setWorkouts={setWorkouts}/>
        {workouts.map( (workout) =>
          <Workout
            workout={workout}
            setWorkouts={setWorkouts}
          />
        )}
      </Container>

  )
}

export default AllWorkouts