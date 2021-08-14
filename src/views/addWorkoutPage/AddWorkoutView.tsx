import React from "react";
import { Control, UseFormRegisterReturn } from "react-hook-form";
import { useForm, Controller } from "react-hook-form";
import { FormValues } from "../../controllers/AddWorkoutController"
import Input from "@material-ui/core/Input";
import TextField from '@material-ui/core/TextField';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers';

interface Props {
  control: Control<FormValues>,
}

export const AddWorkoutView: React.FC<Props> = ({control}) => {

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>

      <div >
        <h1>Add workout</h1>
          <div className={"workout-box-inner"}>

            <Controller
              name="date"
              control={control}
              render={({ field }) => 
                <KeyboardDatePicker
                  {...field}
                  label="Date"
                  variant="inline"
                />
              }
            />

            <Controller
              name="time"
              control={control}
              render={({ field }) =>
                <KeyboardTimePicker
                  {...field}
                  label="Start time"
                  variant="inline"
                />
              }
            />

            <Controller
              name="duration"
              control={control}
              render={({ field }) =>
                <TextField
                  {...field}
                  label="Duration"
                  type="number"
                />
              }
            />
            
            <input type="submit"/>
            
          </div>
      </div>
    </MuiPickersUtilsProvider> 

  )
}

export default AddWorkoutView
