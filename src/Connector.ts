import {Dispatch, SetStateAction} from 'react';
import WorkoutModel from './models/WorkoutModel';

export const getWorkouts = async (setWorkouts: Dispatch<SetStateAction<WorkoutModel[]>>) => {

  const data: WorkoutModel[] = await
    fetch("http://localhost:5000/workouts/domryuken")
      .then(response  => response.json())

  const dataWithDates = data.map( workout => {
    return {
      _id: workout._id,
      username: workout.username,
      exercises: workout.exercises,
      startTime: new Date(workout.startTime),
      endTime:  new Date(workout.endTime)
    }
  })
  setWorkouts(dataWithDates)
}

export const addWorkout = async (model: WorkoutModel, setWorkouts: Dispatch<SetStateAction<WorkoutModel[]>>) => {

  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({workout: model})
  };

  const data: WorkoutModel[] = await
    fetch("http://localhost:5000/workouts/", requestOptions)
      .then(res => res.json())
      
  const dataWithDates = data.map( workout => {
    return {
      _id: workout._id,
      username: workout.username,
      exercises: workout.exercises,
      startTime: new Date(workout.startTime),
      endTime:  new Date(workout.endTime)
    }
  })
  setWorkouts(dataWithDates)
}

export const deleteWorkout = async (model: WorkoutModel, setWorkouts: Dispatch<SetStateAction<WorkoutModel[]>>) => {

  const requestOptions = {method: 'DELETE'};

  const data: WorkoutModel[] = await
    fetch(`http://localhost:5000/workouts/${model.username}/${model._id}`, requestOptions)
      .then(res => res.json())

  const dataWithDates = data.map( workout => {
    return {
      _id: workout._id,
      username: workout.username,
      exercises: workout.exercises,
      startTime: new Date(workout.startTime),
      endTime:  new Date(workout.endTime)
    }
  })
  console.log(dataWithDates)
  setWorkouts(dataWithDates)
}
