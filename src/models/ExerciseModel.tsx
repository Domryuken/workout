import SetModel, {exampleSet1, exampleSet2, exampleSet3} from "./SetModel"

export default interface ExerciseModel {
  name: string,
  sets?: SetModel[]
}

export const exampleExercise1: ExerciseModel = {
  name:"pullup",
  sets:[
    exampleSet1,
    exampleSet2,
    exampleSet3
  ]
}

export const exampleExercise2: ExerciseModel = {
  name:"pushup",
  sets:[
    exampleSet1,
    exampleSet2,
    exampleSet3
  ]
}

export const exampleExercise3: ExerciseModel = {
  name:"squat",
  sets:[
    exampleSet1,
    exampleSet2,
    exampleSet3
  ]
}

export const exampleExercise4: ExerciseModel = {
  name:"row",
  sets:[
    exampleSet1,
    exampleSet2,
    exampleSet3
  ]
}