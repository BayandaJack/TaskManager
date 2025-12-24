import { useState } from 'react'
import './App.css'
import TaskCard from './components/TaskCard';

function App() {

  return (
    <div className='flex flex-col min-h-screen justify-center items-center gap-3'>
      <TaskCard />
    </div>
  );
}

export default App
