import React, { useState } from 'react';
import '../styles/components.css';

const CalendarView = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  
  const daysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };
  
  const firstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };
  
  const renderCalendarDays = () => {
    const days = [];
    const totalDays = daysInMonth(currentMonth);
    const firstDay = firstDayOfMonth(currentMonth);
    
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
    }
    for (let day = 1; day <= totalDays; day++) {
      const isToday = day === new Date().getDate() && 
                      currentMonth.getMonth() === new Date().getMonth() &&
                      currentMonth.getFullYear() === new Date().getFullYear();
      
      const hasAppointment = [5, 12, 18, 23].includes(day); // Example days with appointments
      
      days.push(
        <div 
          key={day} 
          className={`calendar-day ${isToday ? 'today' : ''} ${hasAppointment ? 'has-appointment' : ''}`}
        >
          {day}
          {hasAppointment && <span className="appointment-dot"></span>}
        </div>
      );
    }
    
    return days;
  };
  
  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };
  
  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };
  
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
  
  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <h3>Calendar</h3>
        <div className="calendar-controls">
          <button onClick={prevMonth}>&lt;</button>
          <h4>{monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}</h4>
          <button onClick={nextMonth}>&gt;</button>
        </div>
      </div>
      
      <div className="calendar-grid">
        <div className="calendar-weekdays">
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
        </div>
        <div className="calendar-days">
          {renderCalendarDays()}
        </div>
      </div>
    </div>
  );
};

export default CalendarView;
