import ExerciseModel from "./ExerciseModel"

export default interface WorkoutModel {
  readonly _id?: string,
  readonly username: string,
  readonly exercises: ExerciseModel[],
  readonly startTime: Date,
  readonly endTime: Date
}