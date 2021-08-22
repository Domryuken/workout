
import AddExerciseFormView from "./AddExerciseFormView"
import { useForm } from "react-hook-form";
import { useContext } from "react";
import WorkoutModel from "../../models/WorkoutModel";
import { addWorkout } from "../../Connector";
import { WorkoutContext } from "../../context/WorkoutContext";
import { addNewExerciseService } from "../../UpdateMongoService";
import React from "react";

export interface FormValues {
  exerciseName: string
}

interface Props {
  workout: WorkoutModel
}

const AddExerciseForm: React.FC<Props> = ({workout}) => {

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

  const onSubmit = (formValues: FormValues) => {
    addNewExerciseService(formValues.exerciseName, workout, setWorkouts)
  }

  return (
    <AddExerciseFormView
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
