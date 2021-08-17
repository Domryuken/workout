import { useContext } from "react";
import {Workout} from "./Workout"
import AddWorkoutForm from "../forms/addWorkoutForm/AddWorkoutForm";
import { WorkoutContext } from "../context/WorkoutContext";

export const AllWorkouts = () => {

  const {workouts, setWorkouts} = useContext(WorkoutContext)

  return (<div className="border">
    <h1>Workouts</h1>
    <AddWorkoutForm setWorkouts={setWorkouts}/>
    <div className="border">
     {workouts.map( (workout) =>
        <Workout
          workout={workout}
          setWorkouts={setWorkouts}
        />
      )}
    </div>
  </div>)
}

export default AllWorkouts