import React from "react";
import SetModel from "../models/SetModel"

export const Set: React.FC<SetModel> = ({weight, reps}) => {
  return (
    <div className="border">
      <p>Reps: {reps}</p>
      <p>Weight: {weight}</p>
    </div>
  )
}

export default Set
