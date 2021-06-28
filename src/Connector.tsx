import {Dispatch, SetStateAction} from 'react';
import WorkoutModel from './models/WorkoutModel';

export const getWorkouts = (func: Dispatch<SetStateAction<WorkoutModel[]>>) => {

  fetch("http://localhost:5000/workouts")
    .then(res => {return res.json()})
    .then((data: WorkoutModel[]) => {
      const dataWithDates = data.map( workout => {
        return {
          exercises: workout.exercises,
          startTime: new Date(workout.startTime),
          endTime:  new Date(workout.endTime)
        }
      })
      func(dataWithDates)
    })
}

export const addWorkout = (model: WorkoutModel) => {

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
