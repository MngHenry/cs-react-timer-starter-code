import { useState, useRef } from "react";
import { formatTime } from "./formatTime";

const useTimer = (ini = 0) => {
  const [time, setTime] = useState(0);

  const isStart = useRef(false);
  const active = useRef();
  const refInterval = useRef(0);
  const [history, setHistory] = useState([]);

  const startTimer = () => {
    isStart.current = false;
    refInterval.current = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);
    active.current.disabled = true;
  };
  const stopTimer = () => {
    setTime(time);
    clearInterval(refInterval.current);
    active.current.disabled = false;
  };
  const resetTimer = () => {
    clearInterval(refInterval.current);
    setTime(0);
    setHistory([]);
    active.current.disabled = false;
  };

  const splitTimer = () => {
    setHistory([...history, formatTime(time)]);
  };

  return {
    time,
    startTimer,
    stopTimer,
    resetTimer,
    splitTimer,
    history,
    active,
  };
};
export default useTimer;
