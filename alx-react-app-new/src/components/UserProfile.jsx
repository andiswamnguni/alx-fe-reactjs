// src/components/UserProfile.jsx
import React from 'react';

function UserProfile({ name = "John Doe", age = 30, bio = "A passionate developer." }) {
  return (
    <div style={{
      border: '2px solid blue',
      borderRadius: '10px',
      padding: '20px',
      margin: '20px auto',
      maxWidth: '400px',
      textAlign: 'center',
      backgroundColor: '#f0f8ff',  // light blue background
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ color: 'blue', marginBottom: '10px' }}>{name}</h2>
      <p style={{ margin: '5px 0' }}>Age: <span style={{ fontWeight: 'bold' }}>{age}</span></p>
      <p style={{ margin: '5px 0', color: '#555' }}>Bio: {bio}</p>
    </div>
  );
}

export default UserProfile;
