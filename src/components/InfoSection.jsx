import React from 'react';

const InfoSection = ({ items }) => {
  return (
    <section className="info-section">
    
      {items.map((item, index) => (
        <div key={index} className={`info-item ${item.reverseLayout ? 'reverse-layout' : ''}`}>
          <div className="info-image">
            <img src={item.imageSrc} alt={item.title} />
          </div>
          <div className="info-text">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};
<style>
  
</style>

export default InfoSection;
