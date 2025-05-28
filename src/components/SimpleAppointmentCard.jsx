import React from 'react';
import '../styles/components.css';

const SimpleAppointmentCard = ({ appointment }) => {
  return (
    <div className={`appointment-card ${appointment.priority}`}>
      <div className="appointment-time">
        <p className="date">{appointment.date}</p>
        <p className="time">{appointment.time}</p>
      </div>
      
      <div className="appointment-details">
        <h4>{appointment.title}</h4>
        <p className="doctor">Dr. {appointment.doctor}</p>
        <p className="location">{appointment.location}</p>
      </div>
      
      <div className="appointment-actions">
        <button className="reschedule-btn">Reschedule</button>
        <button className="cancel-btn">Cancel</button>
      </div>
    </div>
  );
};

export default SimpleAppointmentCard;
