import ExerciseModel from "./ExerciseModel"
import {exampleExercise1, exampleExercise2, exampleExercise3, exampleExercise4} from "./ExerciseModel"

export default interface WorkoutModel {
  exercises: ExerciseModel[],
  date: string,
  time: string,
  duration: number
}

export const workoutExample: WorkoutModel = {
  exercises: [
    exampleExercise1,
    exampleExercise2,
    exampleExercise3,
    exampleExercise4,
  ],
  date:"10 2 2021",
  time:"8:30",
  duration: 2
}