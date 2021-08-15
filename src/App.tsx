import {useEffect, useState} from 'react';
import WorkoutsController from "./pages/workoutsPage/WorkoutsController"
import AddWorkoutFormLogic from "./forms/addWorkoutForm/AddWorkoutFormLogic"
import {Route} from "react-router-dom"
import WorkoutModel from './models/WorkoutModel';
import { getWorkouts } from "./Connector"
import AddExerciseFormLogic from './forms/addExerciseForm/AddExerciseFormLogic';


function App() {

  const [workouts, setWorkouts] = useState<WorkoutModel[]>([]);

  const refreshWorkouts = () => {
    getWorkouts(setWorkouts)
  }
  
  useEffect(refreshWorkouts, [])

  return (
    <div className="App">
      <Route exact path="/"><WorkoutsController workouts={workouts} setWorkouts={setWorkouts}/></Route>
    </div>
  );
}

export default App;
