import React, {Dispatch, SetStateAction, useEffect, useState} from 'react';
import {WorkoutsView} from "../views/workoutsPage/WorkoutsView"
import WorkoutModel  from "../models/WorkoutModel"
import { deleteWorkout } from '../Connector';
import {Route} from "react-router-dom"

interface Props {
  workouts: WorkoutModel[],
  setWorkouts: Dispatch<SetStateAction<WorkoutModel[]>>
}

export const WorkoutsController: React.FC<Props> = ({workouts, setWorkouts}) => {

  const [modalIsOpen, setIsOpen] = React.useState<boolean>(true);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const partialDelete = (model: WorkoutModel) => {
    deleteWorkout(model, setWorkouts) 
  }

  return (
    <WorkoutsView workouts={workouts} deleteWorkoutMongo={partialDelete} modalIsOpen={modalIsOpen} openModal={openModal} closeModal={closeModal}/>
  );
}

export default WorkoutsController;
