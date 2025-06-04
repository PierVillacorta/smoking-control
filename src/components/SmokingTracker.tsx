import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useUserStore } from "../store/store";


const SmokingTracker = () => {
  const { user,day  } = useUserStore();
  const {date } = user[0]

  return (
    <div className="w-80 aspect-square flex items-center ">
      <CircularProgressbar
        maxValue={date}
        value={day}
        text= {`${day} / ${date}`}
        styles={buildStyles({
          backgroundColor: "#3e98c7",
          trailColor: "#F5F5F5",
          textSize: 10,
        })}
      />
    </div>
  );
};

export default SmokingTracker;
