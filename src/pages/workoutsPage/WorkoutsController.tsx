import React, {Dispatch, SetStateAction} from 'react';
import {WorkoutsView} from "./WorkoutsView"
import WorkoutModel  from "../../models/WorkoutModel"
import { deleteWorkout } from '../../Connector';

interface Props {
  workouts: WorkoutModel[],
  setWorkouts: Dispatch<SetStateAction<WorkoutModel[]>>
}

export const WorkoutsController: React.FC<Props> = ({workouts, setWorkouts}) => {

  const partialDelete = (model: WorkoutModel) => {
    deleteWorkout(model, setWorkouts) 
  }

  return (
    <WorkoutsView workouts={workouts} deleteWorkoutMongo={partialDelete} />
  );
}

export default WorkoutsController;
