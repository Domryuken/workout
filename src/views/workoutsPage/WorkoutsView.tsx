import React from "react";
import WorkoutModel from "../../models/WorkoutModel"
import {Workout} from "./Workout"
import {Link} from "react-router-dom"

interface Props {
  workouts: WorkoutModel[],
  deleteWorkoutMongo: (model: WorkoutModel) => void
}

export const WorkoutsView: React.FC<Props> = ({
  workouts,
  deleteWorkoutMongo,
}) => {
  return (

    <div className="workout-tab-box">
      <h1>Workouts</h1>
      <div className="workout-tab-box-inner">
        <Link to="/add-workout">
          <p>add</p>
        </Link>
        {workouts.map( (workout) =>
          <Workout
            workout={workout}
            deleteWorkout={deleteWorkoutMongo}
          />
        )}
      </div>
    </div>
  )
}

export default WorkoutsView