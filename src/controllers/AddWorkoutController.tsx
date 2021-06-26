import React, {useEffect, useState} from 'react';
import WorkoutModel, {workoutExample} from "../models/WorkoutModel"
import AddWorkoutView from "../views/addWorkoutPage/AddWorkoutView"
import {Route} from "react-router-dom"

const AddWorkoutController = () => {

  const add = (model: WorkoutModel) => {

    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: "domryuken",
        workout: model
      })
    };

    fetch("http://localhost:5000/workouts", requestOptions)
      .then(res => res.json())
  }

  return (
    <div className="App">
      {/* <button className={"add-workout-button"} onClick={() => add(workout)}></button> */}
      <AddWorkoutView add={add} />
    </div>
  );
}

export default AddWorkoutController;
