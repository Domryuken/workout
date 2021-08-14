import React, {Dispatch, SetStateAction} from 'react';
import WorkoutModel from "../models/WorkoutModel"
import AddWorkoutView from "../views/addWorkoutPage/AddWorkoutView"
import {addWorkout} from "../Connector"
import { useForm, UseFormRegisterReturn } from "react-hook-form";

interface Props {
  setWorkouts: Dispatch<SetStateAction<WorkoutModel[]>>
}

export interface FormValues {
  date: Date,
  time: Date,
  duration: Date
}

const AddWorkoutController: React.FC<Props> = ({setWorkouts}) => {

  const {
    control,
    handleSubmit
  } = useForm<FormValues>();

  const constructAndAddWorkout: (model: FormValues) => void = ({date, time, duration}) => {
    
    const justDate = date.toISOString().split("T")[0]
    const justTime = time.toISOString().split("T")[1]
    const justDuration = duration.toISOString().split("T")[1]

    const startDateTime = new Date(`${justDate}T${justTime}`)
    const endDateTime = new Date(`${justDate}T${justDuration}`)

    const workout: WorkoutModel = {
      username: "domryuken",
      startTime: startDateTime,
      endTime: endDateTime,
      exercises: []
    }

    addWorkout(workout, setWorkouts)
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit(constructAndAddWorkout)}>
        <AddWorkoutView control={control}/>
      </form>
    </div>
  );
}

export default AddWorkoutController;
