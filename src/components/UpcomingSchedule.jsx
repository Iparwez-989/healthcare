import React from 'react';
import '../styles/components.css';
import SimpleAppointmentCard from './SimpleAppointmentCard';
import { appointments } from '../data/appointments';
import addIcon from '../images/add-icon.svg';

const UpcomingSchedule = () => {
  return (
    <div className="schedule-container">
      <div className="schedule-header">
        <h3>Upcoming Appointments</h3>
        <button className="add-appointment">
          <img src={addIcon} alt="Add" />
          New
        </button>
      </div>
      
      <div className="appointments-list">
        {appointments.map((appointment, index) => (
          <SimpleAppointmentCard key={index} appointment={appointment} />
        ))}
      </div>
    </div>
  );
};

export default UpcomingSchedule;
