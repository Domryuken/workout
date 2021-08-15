import React from "react";
import ExerciseModel from "../models/ExerciseModel";
import ExerciseDataModel from "../models/ExerciseModel"
import Set from "./Set"

interface Props {
  exercise: ExerciseModel,
  idx: number
}

export const Exercise: React.FC<Props> = ({exercise, idx}) => {

  return (<div className="border">
    <h3>{exercise.name}</h3>

    {exercise.sets
      ? exercise.sets.map( (set) => {<>
        <Set {...set}/>
      </>})
      : <p>No Sets</p>
    }
  </div>)
}