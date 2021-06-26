import React, {useEffect, useState} from 'react';
import {WorkoutsView} from "../views/workoutsPage/WorkoutsView"
import WorkoutModel, {workoutExample} from "../models/WorkoutModel"
import {Route} from "react-router-dom"

export const WorkoutsController: React.FC<{workouts: WorkoutModel[]}> = (workouts) => {

  return (
    <div className="App">
      <WorkoutsView {...workouts}/>
    </div>
  );
}

export default WorkoutsController;
