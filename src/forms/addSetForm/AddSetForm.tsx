
import { useForm } from "react-hook-form";
import { useContext } from "react";
import WorkoutModel from "../../models/WorkoutModel";
import { WorkoutContext } from "../../context/WorkoutContext";
import AddSetFormView from "./AddSetFormView";
import { addNewSetService } from "../../UpdateMongoService";
import React from "react";

export interface FormValues {
  reps: number,
  weight: number
}

interface Props {
  workout: WorkoutModel,
  idx: number
}

const AddExerciseForm: React.FC<Props> = ({workout, idx}) => {

  const {setWorkouts} = useContext(WorkoutContext)
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

  const onSubmit = ({reps, weight}: FormValues) => {
    addNewSetService(reps, weight, workout, idx, setWorkouts)
  }

  return (
    <AddSetFormView
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

export default AddExerciseForm;


  