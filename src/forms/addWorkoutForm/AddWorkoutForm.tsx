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
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "add-workout" : undefined;

  const onSubmit: (formValues: FormValues) => void = ({date, time, duration}) => {
    addNewWorkoutService(date, time, duration, setWorkouts)
  }

  return (
    <AddWorkoutFormView
      control={control}
      id={id}
      open={open}
      anchorEl={anchorEl}
      handleSubmit={handleSubmit(onSubmit)}
      handleClose={handleClose}
      handleOpen={handleOpen}
    />
  );
}

export default AddWorkoutForm;
