// src/components/Footer.jsx
import React from 'react';

function Footer() {
  return (
    <footer style={{
      backgroundColor: '#1a1a1a',
      color: '#f0f0f0',
      textAlign: 'center',
      padding: '20px',
      marginTop: '30px',
      fontSize: '14px',
      letterSpacing: '0.5px',
      boxShadow: '0 -4px 8px rgba(0,0,0,0.1)'
    }}>
      <p>&copy; 2025 My App. All rights reserved.</p>
      <p style={{ marginTop: '5px', fontSize: '12px', color: '#aaa' }}>
        Built with React and ❤️
      </p>
    </footer>
  );
}

export default Footer;
