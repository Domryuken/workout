import React from "react";
import WorkoutModel from "../../models/WorkoutModel"
import {Workout} from "../../components/Workout"
import {Link} from "react-router-dom"
import AddWorkoutFormLogic from "../../forms/addWorkoutForm/AddWorkoutFormLogic";

interface Props {
  workouts: WorkoutModel[],
  deleteWorkoutMongo: (model: WorkoutModel) => void
}

export const WorkoutsView: React.FC<Props> = ({workouts, deleteWorkoutMongo}) => {
  return (
    <div className="workout-tab-box">
      <h1>Workouts</h1>
      <div className="workout-tab-box-inner">
        {workouts.map( (workout) =>
          <Workout
            workout={workout}
            deleteWorkoutMongo={deleteWorkoutMongo}
          />
        )}
      </div>
    </div>
  )
}

export default WorkoutsView