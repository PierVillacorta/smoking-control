
import { useEffect } from "react";
import { useUserStore } from "../store/store";
import ListDays from "./ListDays";
import RandomQuote from "./RandomQuote";
import SmokingTracker from "./SmokingTracker";
import Statistics from "./Statistics";
import Sucessfull from "./Sucessfull";


const MainPage = () => {
  const { notesDay ,day} = useUserStore();
  useEffect(() => {
      if (day === 3) {
        useUserStore.setState({ sucessfull: true });
      }
    }, [day]);
  return (
    <main className="xl:max-w-4xl mx-auto">
      <h1 className="md:text-4xl text-2xl text-center text-white font-bold mt-10 uppercase">
        Control de consumo
      </h1>
      {
        <Sucessfull/>
      }
      <div className="flex  md:flex-row  items-center flex-col bg-slate-900  rounded-2xl  mx-auto mt-10 py-5 gap-4">
        <Statistics />
        <SmokingTracker />

      </div>
      <div className="mt-5 flex flex-col items-center">
        <RandomQuote />
      </div>
      <div className="mt-5 text-white">
        {notesDay.length == 0 ? (
          <p className="text-center text-2xl font-bold uppercase">
            No hay notas del día
          </p>
        ) : (
          <ListDays />
        )}
      </div>
    </main>
  );
};

export default MainPage;
