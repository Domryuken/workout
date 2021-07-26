import React, {useEffect, useState} from 'react';
import WorkoutsController from "./controllers/WorkoutsController"
import AddWorkoutController from "./controllers/AddWorkoutController"
import {Route} from "react-router-dom"
import WorkoutModel from './models/WorkoutModel';
import { getWorkouts } from "./Connector"

function App() {

  const [workouts, setWorkouts] = useState<WorkoutModel[]>([]);

  useEffect(() => {
    getWorkouts(setWorkouts)
  }, [])
  
  return (
    <div className="App">
      <Route exact path="/"><WorkoutsController setWorkouts={setWorkouts} workouts={workouts} /></Route>
      <Route exact path="/add-workout"><AddWorkoutController /></Route>
    </div>
  );
}

export default App;
