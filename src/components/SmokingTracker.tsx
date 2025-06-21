import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useUserStore } from "../store/store";

const SmokingTracker = () => {
  const { user, day ,appReset} = useUserStore();
  const { date } = user[0];
  const color =
    day === date / 2 ? "#ff8b00" : day === date - 5 ? "#64ff00" : " #FF0005";
  
  return (
    <div className="flex flex-col items-center justify-center w-1/2 h-full ">
      <div className="md:w-70 w-50 aspect-square ">
        <CircularProgressbar
          maxValue={date}
          value={day}
          text={`${day} / ${date}`}
          styles={buildStyles({
            pathColor: color,
            trailColor: "#F5F5F5",
            textSize: 10,
          })}
        />
      </div>
      <button 
      onClick={() =>appReset() }
      className="bg-red-800 text-white md:px-10 md:py-5 px-5 py-3 rounded-lg mt-5 hover:bg-red-700 uppercase font-bold cursor-pointer">
        Reset app
      </button>
    </div>
  );
};

export default SmokingTracker;
