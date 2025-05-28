import React from 'react';

export const healthData = [
  {
    title: 'Heart Rate',
    value: '72 bpm',
    change: '3%',
    trend: 'down',
    iconBg: '#FFE2E5',
    icon: <span role="img" aria-label="heart">❤️</span>
  },
  {
    title: 'Blood Pressure',
    value: '120/80',
    change: '5%',
    trend: 'down',
    iconBg: '#E2F5FF',
    icon: <span role="img" aria-label="pressure">🩸</span>
  },
  {
    title: 'Blood Glucose',
    value: '95 mg/dL',
    change: '2%',
    trend: 'up',
    iconBg: '#FFF4E2',
    icon: <span role="img" aria-label="glucose">📊</span>
  },
  {
    title: 'Weight',
    value: '165 lbs',
    change: '1%',
    trend: 'down',
    iconBg: '#E2FFE9',
    icon: <span role="img" aria-label="weight">⚖️</span>
  }
];
