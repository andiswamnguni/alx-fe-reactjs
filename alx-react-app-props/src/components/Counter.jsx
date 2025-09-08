import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{
      border: '2px solid #282c34',
      borderRadius: '10px',
      padding: '20px',
      margin: '20px auto',
      maxWidth: '300px',
      textAlign: 'center',
      backgroundColor: '#f0f8ff',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ color: '#282c34', marginBottom: '15px' }}>Simple Counter</h2>
      <p style={{ fontSize: '18px', marginBottom: '20px' }}>Current Count: {count}</p>
      <button 
        onClick={() => setCount(count + 1)}
        style={{ margin: '5px', padding: '10px 15px', cursor: 'pointer' }}
      >
        Increment
      </button>
      <button 
        onClick={() => setCount(count - 1)}
        style={{ margin: '5px', padding: '10px 15px', cursor: 'pointer' }}
      >
        Decrement
      </button>
      <button 
        onClick={() => setCount(0)}
        style={{ margin: '5px', padding: '10px 15px', cursor: 'pointer' }}
      >
        Reset
      </button>
    </div>
  );
}

export default Counter;
