import SetModel from "./SetModel"

export default interface ExerciseDataModel {
  readonly name: string,
  readonly sets?: SetModel[]
}
