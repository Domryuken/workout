import React, {useEffect, useState} from 'react';
import {WorkoutsView} from "../views/workoutsPage/WorkoutsView"
import WorkoutModel  from "../models/WorkoutModel"
import {Route} from "react-router-dom"

interface Props {
  workouts: WorkoutModel[]
}

export const WorkoutsController: React.FC<Props> = ({workouts}) => {

  const [modalIsOpen, setIsOpen] = React.useState<boolean>(true);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <WorkoutsView workouts={workouts} modalIsOpen={modalIsOpen} openModal={openModal} closeModal={closeModal}/>
  );
}

export default WorkoutsController;
