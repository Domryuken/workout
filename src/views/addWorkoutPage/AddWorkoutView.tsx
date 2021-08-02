import React from "react";
// import {ExerciseMin, ExerciseMax} from "./Exercise"
import WorkoutModel from "../../models/WorkoutModel"
import { useForm } from "react-hook-form";

interface FormValues {
  date: Date,
  start: string,
  end: string
}

interface Props {
  add: (model: WorkoutModel) => void
}

export const AddWorkoutView: React.FC<Props> = ({add}) => {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>();

  return (
    <div >
      <h1>Add workout</h1>

      <form
        onSubmit={handleSubmit(({date, start, end}) => {
          
          const justDate = date.toISOString().split("T")[0]
          const startTime = new Date(`${justDate}T${start}:00`)
          const endTime = new Date(`${justDate}T${end}:00`)

          const workout: WorkoutModel = {
            username: "domryuken",
            startTime: startTime,
            endTime: endTime,
            exercises: [          
            ]
          }

          console.log(workout)
          add(workout);
        })}
      >
        <div className={"workout-box-inner"}>
          
          <div>
            <h2>Date:</h2>
            <div>
              <label htmlFor="date">date</label>
              <input type="date" {...register("date", {required: true, valueAsDate: true})} id="date"/>
            </div>
          </div>

          <div>
            <h2>Start time:</h2>
            <div>
              <label htmlFor="start">time</label>
              <input type="time" {...register("start", {required: true})} id="start"/>
            </div>
          </div>

          <div>
            <h2>End time:</h2>
            <div>
              <label htmlFor="end">endTime</label>
              <input type="time" {...register("end", {required: true})} id="end"/>
            </div>
          </div>

          <input type="submit"/>
          
        </div>
        {/* {workout.exercises.map( (exercise, idx) =>
          <ExerciseMax key={idx} {...exercise}/>
        )} */}
      </form>
    </div>
  )
}

export default AddWorkoutView
