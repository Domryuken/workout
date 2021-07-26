import React from "react";
import Modal from "react-modal";
import WorkoutModel from "../../models/WorkoutModel"
import AddWorkoutView from "../addWorkoutPage/AddWorkoutView"
import {Workout} from "./Workout"
import {Link} from "react-router-dom"
import {addWorkout} from "../../Connector"

interface Props {
  workouts: WorkoutModel[],
  modalIsOpen: boolean, 
  openModal: () => void, 
  closeModal: () => void
}

export const WorkoutsView: React.FC<Props> = ({
  workouts,
  modalIsOpen,
  openModal,
  closeModal
}) => {
  console.log(workouts)
  return (

    
    <div className="workout-tab-box">
      <h1>Workouts</h1>
      <div className="workout-tab-box-inner">
        <Link to="/add-workout">
          <p>add</p>
        </Link>
        {/* <Modal
         isOpen={modalIsOpen}
         onRequestClose={closeModal}
         contentLabel="Example Modal"> */}
          <AddWorkoutView add={addWorkout}/>
        {/* </Modal> */}
        {workouts.map( (workout, index) =>
          <Workout
            key={`workout-${index}`}
            {...workout}
          />
        )}
      </div>
    </div>
  )
}

export default WorkoutsView