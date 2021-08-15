import React from "react";
import SetModel from "../models/SetModel"

export const Set: React.FC<SetModel> = ({weight, reps}) => {
  return (
    <p>{weight} x {reps}</p>
  )
}

export default Set
