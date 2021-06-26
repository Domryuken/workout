import React from "react";
// import {ExerciseMin, ExerciseMax} from "./Exercise"
import WorkoutModel from "../../models/WorkoutModel"
import { useForm } from "react-hook-form";

interface FormValues {
  day: number,
  month: number,
  year: number,
  timeHour: number,
  timeMinute: number,
  duration: number
}

export const AddWorkoutView: React.FC<{add: {(model: WorkoutModel): void}}> = ({add}) => {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>();

  return (
    <div >
      <h1>Add workout</h1>

      <form
        onSubmit={handleSubmit(({day, month, year, timeHour, timeMinute, duration}) => {
          const workout: WorkoutModel = {
            date: `${day} ${month} ${year}`,
            time: `${timeHour}:${timeMinute}`,
            duration: duration,
            exercises: []
          }
          add(workout);
          
        })}
      >
        <div className={"workout-box-inner"}>
          
          <div>
            <h2>Date:</h2>
            <div>
              <label htmlFor="day">day</label>
              <input {...register("day", {required: true, valueAsNumber: true})} id="day"/>
            </div>
            <div>
              <label htmlFor="month">month</label>
              <input {...register("month", {required: true, valueAsNumber: true})} id="month"/>
            </div>
            <div>
              <label htmlFor="year">year</label>
              <input {...register("year", {required: true, valueAsNumber: true})} id="year"/>
            </div>
          </div>

          <div>
            <h2>Time:</h2>
            <div>
              <label htmlFor="timeHour">timeHour</label>
              <input {...register("timeHour", {required: true, valueAsNumber: true})} id="timeHour"/>
            </div>
            <div>
              <label htmlFor="timeMinute">timeMinute</label>
              <input {...register("timeMinute", {required: true, valueAsNumber: true})} id="timeMinute"/>
            </div>
          </div>

          <div>
            <h2>Duration:</h2>
            <div>
              <label htmlFor="duration">durationHour</label>
              <input {...register("duration", {required: true, valueAsNumber: true})} id="duration"/>
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
