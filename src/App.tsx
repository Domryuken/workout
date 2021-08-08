import React, {useEffect, useState} from 'react';
import WorkoutsController from "./controllers/WorkoutsController"
import AddWorkoutController from "./controllers/AddWorkoutController"
import {Route} from "react-router-dom"
import WorkoutModel from './models/WorkoutModel';
import { addWorkout, getWorkouts } from "./Connector"

function App() {

  const [workouts, setWorkouts] = useState<WorkoutModel[]>([]);

  const refreshWorkouts = () => {
    getWorkouts(setWorkouts)
  }
  
  useEffect(refreshWorkouts, [])
  
  return (
    <div className="App">
      <Route exact path="/"><WorkoutsController workouts={workouts} setWorkouts={setWorkouts}/></Route>
      <Route exact path="/add-workout"><AddWorkoutController setWorkouts={setWorkouts}/></Route>
    </div>
  );
}

export default App;
