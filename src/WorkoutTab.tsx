import React from "react";
import {ExerciseProps, Exercise} from "./Exercise"
import {WorkoutProps, Workout} from "./Workout"

export interface WorkoutTabProps {
  workouts: WorkoutProps[]
}

export const WorkoutTab: React.FC<WorkoutTabProps> = ({workouts}) => {

  return (
    <div className="workout-tab-box">
      <h1>Workouts</h1>
      <div className="workout-tab-box-inner">
        {workouts.map( workout =>
          <Workout
            time={workout.time}
            date={workout.date}
            duration={workout.duration}
            exercises={workout.exercises}
          />
        )}
      </div>
    </div>
  )
}