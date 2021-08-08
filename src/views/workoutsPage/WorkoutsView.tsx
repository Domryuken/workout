import React from "react";
import Modal from "react-modal";
import WorkoutModel from "../../models/WorkoutModel"
import AddWorkoutView from "../addWorkoutPage/AddWorkoutView"
import {Workout} from "./Workout"
import {Link} from "react-router-dom"
import {deleteWorkout, addWorkout} from "../../Connector"

interface Props {
  workouts: WorkoutModel[],
  deleteWorkoutMongo: (model: WorkoutModel) => void,
  modalIsOpen: boolean,
  openModal: () => void,
  closeModal: () => void
}

export const WorkoutsView: React.FC<Props> = ({
  workouts,
  deleteWorkoutMongo,
  modalIsOpen,
  openModal,
  closeModal
}) => {
  return (

    <div className="workout-tab-box">
      <h1>Workouts</h1>
      <div className="workout-tab-box-inner">
        <Link to="/add-workout">
          <p>add</p>
        </Link>
        {workouts.map( (workout, index) =>
          <Workout
            key={`workout-${index}`}
            workout={workout}
            deleteWorkout={deleteWorkoutMongo}
          />
        )}
      </div>
    </div>
  )
}

export default WorkoutsView


        {/* <Modal
         isOpen={modalIsOpen}
         onRequestClose={closeModal}
         contentLabel="Example Modal">
          <AddWorkoutView add={addWorkout}/>
        </Modal> */}