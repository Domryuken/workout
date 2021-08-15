import React, { FormEventHandler } from "react";
import { Control, Controller } from "react-hook-form";
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import { useForm } from "react-hook-form";

interface Props {
  onSubmit: (model: FormValues) => void
}

export interface FormValues {
  exercise: string
}

export const AddExerciseForm: React.FC<Props> = ({ onSubmit }) => {

  const {control, handleSubmit} = useForm<FormValues>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <h1>Add exercise</h1>
        <div className={"exercise-box-inner"}>
          <Controller
            name="exercise"
            control={control}
            render={({ field }) => 
              <FormControl>
                <InputLabel shrink id="demo-simple-select-placeholder-label-label">
                  Exercise
                </InputLabel>
                <Select
                  {...field}
                  onChange={() => {}}
                  displayEmpty
                >
                  <MenuItem value={"Pushup"}>Pushup</MenuItem>
                  <MenuItem value={"Pullup"}>Pullup</MenuItem>
                  <MenuItem value={"Squat"}>Squat</MenuItem>
                </Select>
              </FormControl>
            }
          />
        </div>
      </MuiPickersUtilsProvider> 
    </form>
  )
}

export default AddExerciseForm
