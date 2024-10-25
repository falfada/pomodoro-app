import { useState, useRef, useEffect } from "react";
import Countdown, { zeroPad } from "react-countdown";
import CircularProgressBar from "./CircularProgressBar";
import TimerControls from "./TimerControls";

function TimerDisplay({ timerCountdown }) {
  const targetTimeRef = useRef(Date.now() + timerCountdown);
  const [remainingTime, setRemainingTime] = useState(timerCountdown);
  const [isPaused, setIsPaused] = useState(true);
  const countdownPointer = useRef(null);

  useEffect(() => {
    setRemainingTime(timerCountdown);
    targetTimeRef.current = Date.now() + timerCountdown;
  }, [timerCountdown]);

  const renderer = ({ minutes, seconds }) => {
    return (
      <span>
        {minutes}:{zeroPad(seconds)}
      </span>
    );
  };

  const handleStart = () => {
    countdownPointer.current?.start();
    setIsPaused(false);
  };

  const handlePause = () => {
    countdownPointer.current?.pause();
    setIsPaused(true);
  };
  const handleTick = (total) => {
    setRemainingTime(total);
  };
  return (
    <section>
      <CircularProgressBar />
      <Countdown
        ref={countdownPointer}
        date={targetTimeRef.current}
        renderer={renderer}
        autoStart={false}
        onTick={handleTick}
      />
      <TimerControls
        isPaused={isPaused}
        onStart={handleStart}
        onPause={handlePause}
      />
    </section>
  );
}

export default TimerDisplay;
