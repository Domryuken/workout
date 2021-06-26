import React from "react";
import WorkoutModel from "../../models/WorkoutModel"
import {Workout} from "./Workout"
import {Link} from "react-router-dom"


export const WorkoutsView: React.FC<{workouts: WorkoutModel[]}> = ({workouts}) => {
  return (
    <div className="workout-tab-box">
      <h1>Workouts</h1>
      <div className="workout-tab-box-inner">
        <Link to="/add-workout">
          <p>add</p>
        </Link>
        {workouts.map( (workout, index) =>
          <Workout
            key={`workout-${index}`}
            {...workout}
          />
        )}
      </div>
    </div>
  )
}

export default WorkoutsView