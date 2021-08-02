import SetModel from "./SetModel"

export default interface ExerciseModel {
  readonly name: string,
  readonly sets?: SetModel[]
}