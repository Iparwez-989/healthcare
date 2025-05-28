import React from 'react';
import '../styles/components.css';
import AnatomySection from './AnatomySection';
import HealthStatusCards from './HealthStatusCards';
import CalendarView from './CalendarView';
import UpcomingSchedule from './UpcomingSchedule';
import ActivityFeed from './ActivityFeed';

const DashboardMainContent = () => {
  return (
    <main className="dashboard-content">
      <div className="dashboard-header">
        <h2>Health Overview</h2>
        <p className="date">Wednesday, May 23, 2025</p>
      </div>
      
      <div className="dashboard-grid">
        <div className="grid-item anatomy-section">
          <AnatomySection />
        </div>
        
        <div className="grid-item health-status">
          <HealthStatusCards />
        </div>
        
        <div className="grid-item calendar-section">
          <CalendarView />
        </div>
        
        <div className="grid-item schedule-section">
          <UpcomingSchedule />
        </div>
        
        <div className="grid-item activity-section">
          <ActivityFeed />
        </div>
      </div>
    </main>
  );
};

export default DashboardMainContent;
