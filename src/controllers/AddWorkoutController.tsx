import React, {useEffect, useState} from 'react';
import WorkoutModel, {workoutExample} from "../models/WorkoutModel"
import AddWorkoutView from "../views/addWorkoutPage/AddWorkoutView"
import {addWorkout} from "../Connector"

const AddWorkoutController = () => {

  return (
    <AddWorkoutView add={addWorkout} />
  );
}

export default AddWorkoutController;
