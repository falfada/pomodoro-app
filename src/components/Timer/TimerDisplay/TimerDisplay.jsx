import Countdown from "react-countdown";
import CircularProgressBar from "./CircularProgressBar";
import TimerControls from "./TimerControls";

function TimerDisplay({ timerCountdown }) {
    const renderer = ({minutes, seconds}) => {
        return <span>{minutes}:{seconds}</span>;
    }

  return (
    <section>
      <CircularProgressBar />
      <Countdown date={Date.now() + timerCountdown} renderer={renderer} onStart={handleUpdate} autoStart={false}/>
      <TimerControls />
    </section>
  );
}

export default TimerDisplay;
