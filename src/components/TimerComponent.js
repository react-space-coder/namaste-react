import React from 'react'

import { useState } from 'react';
import { useEffect } from 'react';
export default function TimerComponent() {

    const [count, setCount] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    useEffect(() => {
      let interval;
      if (isRunning) {
        interval = setInterval(() => {
          setCount((prev) => prev + 1);
        }, 1000);
      }
      return () => clearInterval(interval);
    }, [isRunning]);
  
    return (
      <div>
        <h1>Timer : {count}</h1>
        <button onClick={() => setIsRunning(true)}>Start</button>
        <button onClick={() => setIsRunning(false)}>Pause</button>
        <button
          onClick={() => {
            setIsRunning(false);
            setCount(0);
          }}
        >
          Reset
        </button>
      </div>
    );
}
