import React from 'react';

const MapSection = () => {
  return (
    <div className="map-container" style={{ width: '80%', height: '70%', borderRadius: '0.5rem', overflow: 'hidden' }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5553.171625972556!2d-64.3735634!3d45.8995963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b5f50e9f9c349c5%3A0x581845ca823798bc!2sChapel!5e0!3m2!1sen!2sca!4v1738130450650!5m2!1sen!2sca"
        width="100%"
        height="100%"
        style={{ border: '0' }}
        allowFullScreen=""
        loading="lazy"
        title="Mount Allison University"
      ></iframe>
    </div>
  );
};

export default MapSection;