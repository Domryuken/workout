import React, { Dispatch, SetStateAction } from "react";
import WorkoutModel from "../models/WorkoutModel"
import {Workout} from "./Workout"
import {Link} from "react-router-dom"
import AddWorkoutForm from "../forms/addWorkoutForm/AddWorkoutForm";
import { setWeekWithOptions } from "date-fns/fp";

interface Props {
  workouts: WorkoutModel[],
  setWorkouts: Dispatch<SetStateAction<WorkoutModel[]>>
  deleteWorkoutMongo: (model: WorkoutModel) => void
}

export const AllWorkouts: React.FC<Props> = ({workouts, setWorkouts, deleteWorkoutMongo}) => {
  return (<div className="border">
    <h1>Workouts</h1>
    <AddWorkoutForm setWorkouts={setWorkouts}/>
    <div className="border">
     {workouts.map( (workout, idx) =>
        <Workout
          workout={workout}
          idx={idx}
          deleteWorkoutMongo={deleteWorkoutMongo}
          setWorkouts={setWorkouts}
        />
      )}
    </div>
  </div>)
}

export default AllWorkouts