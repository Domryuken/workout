import {Dispatch, SetStateAction} from 'react';
import WorkoutModel from './models/WorkoutModel';

export const getWorkouts = (func: Dispatch<SetStateAction<WorkoutModel[]>>) => {

  fetch("http://localhost:5000/workouts/domryuken")
    .then(res => {return res.json()})
    .then((data: WorkoutModel[]) => {
      const dataWithDates = data.map( workout => {
        return {
          _id: workout._id,
          username: workout.username,
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
    body: JSON.stringify({workout: model})
  };

  fetch("http://localhost:5000/workouts/update", requestOptions)
    .then(res => res.json())
}

export const deleteWorkout = (model: WorkoutModel) => {

  const requestOptions = {
    method: 'DELETE'
  };

  fetch(`http://localhost:5000/workouts/delete/${model._id}`, requestOptions)
    .then(res => res.json())
}
