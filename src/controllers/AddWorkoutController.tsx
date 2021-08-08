import React, {Dispatch, SetStateAction, useEffect, useState} from 'react';
import WorkoutModel from "../models/WorkoutModel"
import AddWorkoutView from "../views/addWorkoutPage/AddWorkoutView"
import {addWorkout} from "../Connector"
import { set } from 'react-hook-form';

interface Props {
  setWorkouts: Dispatch<SetStateAction<WorkoutModel[]>>
}

const AddWorkoutController: React.FC<Props> = ({setWorkouts}) => {

  const addWorkoutPartial = (model: WorkoutModel) => addWorkout(model, setWorkouts)
  return (
    <div className="App">
      <AddWorkoutView addToMongo={addWorkoutPartial} />
    </div>
  );
}

export default AddWorkoutController;
