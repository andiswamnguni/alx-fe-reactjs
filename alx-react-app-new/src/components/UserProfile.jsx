// src/components/UserProfile.jsx
import React from 'react';

function UserProfile() {
  return (
    <section style={{
      backgroundColor: '#ffffff',
      color: '#333',
      padding: '20px',
      margin: '20px auto',
      borderRadius: '8px',
      maxWidth: '400px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      textAlign: 'center'
    }}>
      <h2 style={{ marginBottom: '10px' }}>User Profile</h2>
      <p>Name: John Doe</p>
      <p>Email: johndoe@example.com</p>
    </section>
  );
}

export default UserProfile;
