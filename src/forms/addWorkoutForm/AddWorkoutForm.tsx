import React, {Dispatch, SetStateAction} from 'react';
import WorkoutModel from "../../models/WorkoutModel"
import AddWorkoutFormView from "./AddWorkoutFormView"
import { useForm } from "react-hook-form";
import { addNewWorkoutService } from '../../UpdateMongoService';

export interface FormValues {
  date: Date,
  time: Date,
  duration: number
}

interface Props {
  setWorkouts: Dispatch<SetStateAction<WorkoutModel[]>>
}

const AddWorkoutForm: React.FC<Props> = ({setWorkouts}) => {

  const {control, handleSubmit} = useForm<FormValues>();

  const onSubmit: (formValues: FormValues) => void = ({date, time, duration}) => {
    addNewWorkoutService(date, time, duration, setWorkouts)
  }

  return (
    <AddWorkoutFormView
      handleSubmit={handleSubmit(onSubmit)}
      control={control}
    />
  );
}

export default AddWorkoutForm;
