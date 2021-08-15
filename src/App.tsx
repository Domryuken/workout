import {useEffect, useState} from 'react';
import WorkoutsController from "./pages/WorkoutsController"
import WorkoutModel from './models/WorkoutModel';
import { getWorkouts } from "./Connector"


function App() {

  const [workouts, setWorkouts] = useState<WorkoutModel[]>([]);

  const refreshWorkouts = () => {
    getWorkouts(setWorkouts)
  }
  
  useEffect(refreshWorkouts, [])

  return (
    <WorkoutsController workouts={workouts} setWorkouts={setWorkouts}/>
  );
}

export default App;
