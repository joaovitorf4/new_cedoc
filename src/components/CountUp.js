// src/components/CountUp.js
import React, { useState, useEffect, useRef } from 'react';
import './CountUp.css';

function CountUp({ endNumber, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const startTime = useRef(null);
  const end = useRef(endNumber);
  const durationMs = useRef(duration);

  useEffect(() => {
    const start = performance.now();
    startTime.current = start;

    const update = (timestamp) => {
      if (!startTime.current) startTime.current = timestamp;
      const progress = timestamp - startTime.current;
      const progressRatio = Math.min(progress / durationMs.current, 1);

      const newCount = Math.floor(progressRatio * end.current);
      setCount(newCount);

      if (progressRatio < 1) {
        requestAnimationFrame(update);
      } else {
        setCount(end.current);
      }
    };

    requestAnimationFrame(update);

    return () => cancelAnimationFrame(update);
  }, [endNumber, duration]);

  return <span className="count-up">{count.toLocaleString()}</span>;
}

export default CountUp;
