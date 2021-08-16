import React from "react";
import AddSetForm from "../forms/addSetForm/AddSetForm";
import ExerciseModel from "../models/ExerciseModel";
import ExerciseDataModel from "../models/ExerciseModel"
import WorkoutModel from "../models/WorkoutModel";
import Set from "./Set"

interface Props {
  workout: WorkoutModel,
  idx: number
}

export const Exercise: React.FC<Props> = ({workout, idx}) => {

  return (<div className="border">
    <h3>{workout.exercises[idx].name}</h3>
    <AddSetForm workout={workout} idx={idx}/>
    <div className="border">
      {workout.exercises[idx].sets.map( (set) =>
        <Set {...set}/>
      )}
    </div>
  </div>)
}