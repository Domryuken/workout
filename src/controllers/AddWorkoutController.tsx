import React, {useEffect, useState} from 'react';
import WorkoutModel from "../models/WorkoutModel"
import AddWorkoutView from "../views/addWorkoutPage/AddWorkoutView"
import {addWorkout} from "../Connector"

const AddWorkoutController = () => {

  return (
    <div className="App">
      <AddWorkoutView add={addWorkout} />
    </div>
  );
}

export default AddWorkoutController;
