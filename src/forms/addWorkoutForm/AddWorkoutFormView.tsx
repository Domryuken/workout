import React, { FormEventHandler } from "react";
import { Control, Controller } from "react-hook-form";
import TextField from '@material-ui/core/TextField';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers';
import { FormValues } from "./AddWorkoutForm";
import { Popover, Button, Box } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { Grid } from '@material-ui/core';

interface Props {
  control: Control<FormValues>,
  id: string | undefined,
  open: boolean,
  anchorEl: HTMLButtonElement | null,
  handleSubmit: FormEventHandler<HTMLFormElement>,
  handleClose: () => void,
  handleOpen: (event: React.MouseEvent<HTMLButtonElement>) => void,
}

export const AddWorkoutFormView: React.FC<Props> = (props) => {

  return (<>

    <Button aria-describedby={props.id} variant="contained" size="medium" color="primary" aria-label="add" onClick={props.handleOpen}>
      Add Workout
      <AddIcon />
    </Button> 

    <Popover
        id={props.id}
        open={props.open}
        anchorEl={props.anchorEl}
        onClose={props.handleClose}
        PaperProps={{
          style: { height: 'auto' },
        }}
    >
      <Box margin={2}>
        <form onSubmit={props.handleSubmit}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container spacing={1} >
              <Grid item>
                <Controller
                  name="date"
                  control={props.control}
                  defaultValue={new Date()}
                  render={({ field }) => 
                    <KeyboardDatePicker
                      {...field}
                      label="Date"
                      variant="inline"
                    />
                  }
                />
              </Grid>

              <Grid item>
                <Controller
                  name="time"
                  control={props.control}
                  defaultValue={new Date()}
                  render={({ field }) =>
                    <KeyboardTimePicker
                      {...field}
                      label="Start time"
                      variant="inline"
                    />
                  }
                />
              </Grid>
                
              <Grid item>
                <Controller
                  name="duration"
                  control={props.control}
                  defaultValue={1}
                  render={({ field }) =>
                    <TextField
                      {...field}
                      label="Duration"
                      type="number"
                    />
                  }
                />
              </Grid>

              <Grid item>
                <Button size="small" variant="contained" color="primary" aria-label="add" type="submit" onClick={props.handleClose}>
                  <AddIcon />
                </Button> 
              </Grid>

            </Grid>        
          </MuiPickersUtilsProvider> 
        </form>
      </Box>
    </Popover>
  </>)
}

export default AddWorkoutFormView
