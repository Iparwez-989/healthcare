import React from 'react';
import '../styles/components.css';
import { healthData } from '../data/healthData';

const HealthStatusCards = () => {
  return (
    <div className="health-status-container">
      <h3>Health Metrics</h3>
      
      <div className="health-cards">
        {healthData.map((item, index) => (
          <div key={index} className="health-card">
            <div className="card-icon" style={{ backgroundColor: item.iconBg }}>
              {item.icon}
            </div>
            <div className="card-content">
              <h4>{item.title}</h4>
              <p className="value">{item.value}</p>
              <p className={`trend ${item.trend}`}>
                {item.trend === 'up' ? '↑' : '↓'} {item.change}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthStatusCards;
