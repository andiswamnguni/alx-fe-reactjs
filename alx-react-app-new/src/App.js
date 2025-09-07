// src/App.jsx
import React from 'react';
import Header from './components/Header';
import UserProfile from './components/UserProfile';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Counter from './components/Counter';

function App() {
  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      backgroundColor: '#f0f2f5',
      minHeight: '100vh',
      margin: 0,
      padding: 0
    }}>
      <Header />
      <UserProfile name="Andiswa Mnguni" age={30} bio="Front-end developer passionate about user-friendly apps." />
      <MainContent />
      <Counter />
      <Footer />
    </div>
  );
}

export default App;
