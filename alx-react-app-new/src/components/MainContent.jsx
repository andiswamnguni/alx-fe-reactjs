// src/components/MainContent.jsx
import React from 'react';

function MainContent() {
  return (
    <main style={{
      padding: '20px',
      backgroundColor: '#f9f9f9',
      margin: '20px auto',
      maxWidth: '800px',
      borderRadius: '8px',
      textAlign: 'left'
    }}>
      <h2 style={{ color: '#282c34' }}>Main Content</h2>
      <p style={{ fontSize: '16px', color: '#555' }}>
        This is the main content section of the application. You can add more components and sections here.
      </p>
    </main>
  );
}

export default MainContent;
