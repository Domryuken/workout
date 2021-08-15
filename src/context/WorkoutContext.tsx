import { createContext, Dispatch, SetStateAction } from "react"
import WorkoutModel from "../models/WorkoutModel"

interface WorkoutInterface {
  workouts?: WorkoutModel[],
  setWorkouts?: Dispatch<SetStateAction<WorkoutModel[]>>
}

export const WorkoutContext = createContext<WorkoutInterface>({})