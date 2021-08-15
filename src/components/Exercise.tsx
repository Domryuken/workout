import React from "react";
import ExerciseDataModel from "../models/ExerciseModel"
import Set from "./Set"

export const ExerciseMax: React.FC<ExerciseDataModel> = ({name, sets}) => {

  const SetView = () => <div>{
    sets
      ? sets.map( (set) => <Set {...set}/>)
      : <p>No Sets</p>
  }</div>
   

  return (
    <div className={"exercise-box"}>
      <h3>{name}</h3>
      <SetView/>
    </div>
  )
}