import React, {useEffect, useState} from 'react';
import {WorkoutsView} from "../views/workoutsPage/WorkoutsView"
import WorkoutModel, {workoutExample} from "../models/WorkoutModel"
import {Dispatch, SetStateAction} from 'react';

export const WorkoutsController: React.FC<{setWorkouts: Dispatch<SetStateAction<WorkoutModel[]>>, workouts: WorkoutModel[]}> = ({
  setWorkouts,
  workouts
}) => {

  const [modalIsOpen, setIsOpen] = React.useState<boolean>(true);

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  return (
    <WorkoutsView
      workouts={workouts}
      modalIsOpen={modalIsOpen}
      openModal={openModal}
      closeModal={closeModal}
    />
  );
}

export default WorkoutsController;
