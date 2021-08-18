import { Dispatch, SetStateAction } from "react"
import { addWorkout, deleteWorkout } from "./Connector"
import ExerciseModel from "./models/ExerciseModel"
import SetModel from "./models/SetModel"
import WorkoutModel from "./models/WorkoutModel"

export function addNewWorkoutService(
  date: Date,
  time: Date,
  duration: number,
  setWorkouts: Dispatch<SetStateAction<WorkoutModel[]>>
){
  
  const justDate = date.toISOString().split("T")[0]
  const justTime = time.toISOString().split("T")[1]
  const startDateTime = new Date(`${justDate}T${justTime}`)

  const workout: WorkoutModel = {
    username: "domryuken",
    startTime: startDateTime,
    duration: duration,
    exercises: []
  }

  addWorkout(workout, setWorkouts)
}

export function deleteWorkoutService(
  model: WorkoutModel,
  setWorkouts: Dispatch<SetStateAction<WorkoutModel[]>>
){
  console.log(JSON.stringify(model))
  deleteWorkout(model, setWorkouts) 
}
  

export function addNewExerciseService(
  exerciseName: string,
  workout: WorkoutModel,
  setWorkouts: Dispatch<SetStateAction<WorkoutModel[]>>
){
  
  const updatedWorkout: WorkoutModel = {
    ...workout,
    exercises: [
      ...workout.exercises,
      {
        name: exerciseName,
        sets: []
      }
    ]
  }

  addWorkout(updatedWorkout, setWorkouts)
}

export function deleteExerciseService(
  workout: WorkoutModel,
  exerciseID: number,
  setWorkouts: Dispatch<SetStateAction<WorkoutModel[]>>
){
  const updatedWorkout: WorkoutModel = {
    ...workout,
    exercises: [
      ...workout.exercises.slice(0, exerciseID),
      ...workout.exercises.slice(exerciseID+1)
    ]
  }

  addWorkout(updatedWorkout, setWorkouts)
}

export function addNewSetService(
  reps: number,
  weight: number,
  workout: WorkoutModel,
  exerciseID: number,
  setWorkouts: Dispatch<SetStateAction<WorkoutModel[]>>
){

  const newSet: SetModel = {
    reps: reps,
    weight: weight
  }

  const updatedExercise: ExerciseModel = {
    ...workout.exercises[exerciseID],
    sets: [
      ...workout.exercises[exerciseID].sets,
      newSet
    ]
  }

  const updatedWorkout: WorkoutModel = {
    ...workout,
    exercises: [
      ...workout.exercises.slice(0, exerciseID),
      updatedExercise,
      ...workout.exercises.slice(exerciseID+1)
    ]
  }

  addWorkout(updatedWorkout, setWorkouts)
}


export function deleteSetService(
  workout: WorkoutModel,
  exerciseID: number,
  setID: number,
  setWorkouts: Dispatch<SetStateAction<WorkoutModel[]>>
){

  const updatedExercise: ExerciseModel = {
    ...workout.exercises[exerciseID],
    sets: [
      ...workout.exercises[exerciseID].sets.slice(0, setID),
      ...workout.exercises[exerciseID].sets.slice(setID+1)
    ]
  }

  const updatedWorkout: WorkoutModel = {
    ...workout,
    exercises: [
      ...workout.exercises.slice(0, exerciseID),
      updatedExercise,
      ...workout.exercises.slice(exerciseID+1)
    ]
  }

  addWorkout(updatedWorkout, setWorkouts)
}
