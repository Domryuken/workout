import { request } from 'http';
import {Dispatch, SetStateAction} from 'react';
import WorkoutModel from './models/WorkoutModel';

export const getWorkouts = (save: Dispatch<SetStateAction<WorkoutModel[]>>) => {

  fetch("http://localhost:5000/workouts/domryuken")
    .then(res => {return res.json()})
    .then((data: WorkoutModel[]) => {
      const dataWithDates = data.map( workout => {
        return {
          _id: workout._id,
          exercises: workout.exercises,
          startTime: new Date(workout.startTime),
          endTime:  new Date(workout.endTime)
        }
      })
      save(dataWithDates)
    })
}

export const addWorkout = (model: WorkoutModel) => {

  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      workout: { ...model }
    })
  };

  fetch("http://localhost:5000/workouts/domryuken", requestOptions)
    .then(res => res.json())
}

export const deleteWorkout = (workoutId: string) => {

  const requestOptions = {
    method: 'DELETE'
  };

  fetch(`http://localhost:5000/workouts/${workoutId}`, requestOptions)
    .then(res => res.json())
}
