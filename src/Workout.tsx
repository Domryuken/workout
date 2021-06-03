import React from "react";
import {ExerciseProps, Exercise} from "./Exercise"

export interface WorkoutProps {
  exercises: ExerciseProps[],
  date: string,
  time: string,
  duration: number
}

export const Workout: React.FC<WorkoutProps> = (workout) => {

  return (
    <div className={"workout-box"}>
      <div className={"workout-box-inner"}>
        <h2>{workout.date}</h2>
        <p><strong>Time:</strong> {workout.time}</p>
        <p><strong>Duration:</strong> {workout.duration}</p>
      </div>
      {workout.exercises.map( exercise =>
        <Exercise
          name={exercise.name}
          reps={exercise.reps}
          weight={exercise.weight}
        />
      )}
    </div>
  )
} 
