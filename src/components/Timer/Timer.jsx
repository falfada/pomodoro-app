import TimerModeSwitcher from "./TimerModeSwitcher";
import {TimerDisplay} from "./TimerDisplay";

function Timer() {
    return (
        <div>
            <TimerModeSwitcher />
            <TimerDisplay />
        </div>
    );
}

export default Timer;