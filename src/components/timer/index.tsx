import { useState, useEffect, useRef } from "react";

interface TimerProps {
  initialTime: number;
  isStopped: boolean;
}

const Timer = ({ initialTime, isStopped }: TimerProps) => {
  const [remainingTime, setRemainingTime] = useState(initialTime);
  const timerIdRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isStopped) return;

    if (timerIdRef.current) clearInterval(timerIdRef.current);
    if (remainingTime <= 0) return;
    timerIdRef.current = setInterval(() => {
      setRemainingTime((prevTime) => {
        return prevTime - 1;
      });
    }, 1000);

    return () => {
      if (timerIdRef.current) clearInterval(timerIdRef.current);
    };
  }, [remainingTime, isStopped]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  return <p>{formatTime(remainingTime)}</p>;
};

export default Timer;
