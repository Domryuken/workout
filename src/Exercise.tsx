import React from "react";

export interface ExerciseProps {
  name: string,
  weight: number,
  reps: number
}

export const Exercise: React.FC<ExerciseProps> = (props) => {

  return (
    <div className={"exercise-box"}>
      <h3>{props.name}</h3>
      <div className="exercise-box-inner">
        <p>Weight: {props.weight}</p>
        <p>Reps: {props.reps}</p>
      </div>
    </div>
  )
}