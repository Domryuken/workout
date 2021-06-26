import React, {useEffect, useState} from 'react';
import WorkoutsController from "./controllers/WorkoutsController"
import AddWorkoutController from "./controllers/AddWorkoutController"
import {Route} from "react-router-dom"

function App() {

  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/workouts")
      .then(res => {return res.json()})
      .then(data => {
        console.log(data);
        setWorkouts(data);
      })
  }, [])

  return (
    <div className="App">
      <Route exact path="/"><WorkoutsController workouts={workouts} /></Route>
      <Route exact path="/add-workout"><AddWorkoutController /></Route>
    </div>
  );
}

export default App;
