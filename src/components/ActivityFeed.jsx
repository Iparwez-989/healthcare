import React from 'react';
import '../styles/components.css';

const ActivityFeed = () => {
  const activities = [
    {
      id: 1,
      type: 'medication',
      title: 'Medication Reminder',
      description: 'Take Lisinopril 10mg',
      time: '2 hours ago',
      icon: '💊'
    },
    {
      id: 2,
      type: 'appointment',
      title: 'Appointment Confirmed',
      description: 'Cardiology check-up with Dr. Smith',
      time: '1 day ago',
      icon: '📅'
    },
    {
      id: 3,
      type: 'test',
      title: 'Test Results Available',
      description: 'Blood work results are ready to view',
      time: '2 days ago',
      icon: '🔬'
    },
    {
      id: 4,
      type: 'message',
      title: 'New Message',
      description: 'From Dr. Johnson regarding your last visit',
      time: '3 days ago',
      icon: '✉️'
    }
  ];

  return (
    <div className="activity-container">
      <h3>Recent Activity</h3>
      
      <div className="activity-list">
        {activities.map(activity => (
          <div key={activity.id} className={`activity-item ${activity.type}`}>
            <div className="activity-icon">{activity.icon}</div>
            <div className="activity-content">
              <h4>{activity.title}</h4>
              <p>{activity.description}</p>
              <span className="activity-time">{activity.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;
