// src/components/MainContent.jsx
import React from 'react';

function MainContent() {
  return (
    <main style={{
      padding: '20px',
      margin: '20px auto',
      maxWidth: '800px',
      borderRadius: '10px',
      backgroundColor: '#fff',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      textAlign: 'left'
    }}>
      <h2 style={{ color: '#282c34', marginBottom: '10px' }}>Main Content</h2>
      <p style={{ fontSize: '16px', color: '#555', lineHeight: '1.6' }}>
        This is the main content section of the application. You can add more components and sections here.
      </p>
    </main>
  );
}

export default MainContent;
