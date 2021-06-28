import ExerciseModel from "./ExerciseModel"
import {exampleExercise1, exampleExercise2, exampleExercise3, exampleExercise4} from "./ExerciseModel"

export default interface WorkoutModel {
  readonly exercises: ExerciseModel[],
  readonly startTime: Date,
  readonly endTime: Date
}

export const workoutExample: WorkoutModel = {
  exercises: [
    exampleExercise1,
    exampleExercise2,
    exampleExercise3,
    exampleExercise4,
  ],
  startTime: new Date(),
  endTime: new Date()
}