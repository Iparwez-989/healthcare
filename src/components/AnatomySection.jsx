import React, { useState } from 'react';
import '../styles/components.css';
import anatomyBody from '../images/anatomy-body.svg';
import heartIcon from '../images/heart-icon.png';
import lungsIcon from '../images/lungs-icon.svg';
import teethIcon from '../images/teeth-icon.svg';
import boneIcon from '../images/bone-icon.svg';

const AnatomySection = () => {
  const [selectedOrgan, setSelectedOrgan] = useState('heart');
  
  const organs = [
    { id: 'heart', name: 'Heart', icon: heartIcon, status: 'Good' },
    { id: 'lungs', name: 'Lungs', icon: lungsIcon, status: 'Excellent' },
    { id: 'teeth', name: 'Dental', icon: teethIcon, status: 'Needs Attention' },
    { id: 'bones', name: 'Skeletal', icon: boneIcon, status: 'Good' }
  ];
  
  return (
    <div className="anatomy-container">
      <h3>Body Systems</h3>
      
      <div className="anatomy-content">
        <div className="anatomy-image">
          <img src={anatomyBody} alt="Human Anatomy" />
        </div>
        
        <div className="organ-details">
          {organs.map(organ => (
            <div 
              key={organ.id} 
              className={`organ-card ${selectedOrgan === organ.id ? 'active' : ''}`}
              onClick={() => setSelectedOrgan(organ.id)}
            >
              <img src={organ.icon} alt={organ.name} className="organ-icon" />
              <div className="organ-info">
                <h4>{organ.name}</h4>
                <p className={`status ${organ.status.toLowerCase().replace(' ', '-')}`}>
                  {organ.status}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnatomySection;
