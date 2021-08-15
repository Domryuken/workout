import ExerciseDataModel from "./ExerciseModel"

export default interface WorkoutModel {
  readonly _id?: string,
  readonly username: string,
  readonly exercises: ExerciseDataModel[],
  readonly startTime: Date,
  readonly duration: number
}