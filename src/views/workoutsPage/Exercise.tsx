import React from "react";
import ExerciseModel from "../../models/ExerciseModel"
import Set from "./Set"

export const ExerciseMin: React.FC<ExerciseModel> = ({name}) => {

  return (
    <div className={"exercise-box"}>
      <h3>{name}</h3>
    </div>
  )
}

export const ExerciseMax: React.FC<ExerciseModel> = ({
  name,
  sets
}) => {
  return (
    <div className={"exercise-box"}>
      <h3>{name}</h3>
      {sets ? sets.map( (set) =>
        <Set {...set}/>
      ) : <p>No Sets</p>}
    </div>
  )
}