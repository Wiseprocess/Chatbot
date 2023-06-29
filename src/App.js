import React from 'react';
import './App.css';
import ChatInterface from './components/ChatInterface';
import UserInputFields from './components/UserInputFields';
import StartButton from './components/StartButton';
import SubmitButton from './components/SubmitButton';
import logo from './logo.png';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>Welcome to our AI-powered audit session! This interactive platform enables us to work together in answering a series of targeted questions, helping us understand your needs and align our services with your business objectives.</p>
        <StartButton />
      </header>
      <ChatInterface />
      <UserInputFields />
      <SubmitButton />
    </div>
  );
}

export default App;