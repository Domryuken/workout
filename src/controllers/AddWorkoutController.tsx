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
  start: string,
  end: string
}

const AddWorkoutController: React.FC<Props> = ({setWorkouts}) => {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>();

  const dateRegister = {...register("date", {required: true, valueAsDate: true})}
  const constructAndAddWorkout: (model: FormValues) => void = ({date, start, end}) => {
      
    const justDate = date.toISOString().split("T")[0]
    const startTime = new Date(`${justDate}T${start}:00`)
    const endTime = new Date(`${justDate}T${end}:00`)

    const workout: WorkoutModel = {
      username: "domryuken",
      startTime: startTime,
      endTime: endTime,
      exercises: []
    }

    addWorkout(workout, setWorkouts)
  }


  return (
    <div className="App">
      <form onSubmit={handleSubmit(constructAndAddWorkout)}>
        <AddWorkoutView 
          date={register("date", {required: true, valueAsDate: true})}
          start={register("start", {required: true})}
          end={register("end", {required: true})}
        />
      </form>
    </div>
  );
}

export default AddWorkoutController;
