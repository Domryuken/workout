import {useEffect, useState} from 'react';
import WorkoutModel from './models/WorkoutModel';
import { getWorkouts } from "./Connector"
import { WorkoutContext } from './context/WorkoutContext';
import AllWorkouts from './components/AllWorkouts';


function App() {

  const [workouts, setWorkouts] = useState<WorkoutModel[]>([]);

  useEffect(() => {
    getWorkouts(setWorkouts)
  }, [])

  return (
    <WorkoutContext.Provider value={{workouts, setWorkouts}}>
      <AllWorkouts />
    </WorkoutContext.Provider>
  );
}

export default App;
