import React from "react";
import SetModel from "../models/SetModel"

export const Set: React.FC<SetModel> = ({
  weight,
  reps
}) => {
  return (
    <div className={"exercise-box"}>
      <p>{weight} x {reps}</p>
    </div>
  )
}

export default Set
