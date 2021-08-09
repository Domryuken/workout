import React, {Dispatch, SetStateAction} from 'react';
import {WorkoutsView} from "../views/workoutsPage/WorkoutsView"
import WorkoutModel  from "../models/WorkoutModel"
import { deleteWorkout } from '../Connector';
import AddWorkoutController from './AddWorkoutController';

interface Props {
  workouts: WorkoutModel[],
  setWorkouts: Dispatch<SetStateAction<WorkoutModel[]>>
}

export const WorkoutsController: React.FC<Props> = ({workouts, setWorkouts}) => {

  const partialDelete = (model: WorkoutModel) => {
    deleteWorkout(model, setWorkouts) 
  }

  return (
    <div>
      <AddWorkoutController setWorkouts={setWorkouts}/>
      <WorkoutsView workouts={workouts} deleteWorkoutMongo={partialDelete} />
    </div>
  );
}

export default WorkoutsController;
