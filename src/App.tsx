import DayModal from "./components/DayModal";
import Login from "./components/Login";
import MainPage from "./components/MainPage";

import { useUserStore } from "./store/store";
const App = () => {
  const { user } = useUserStore();
  return (
    <>
      {user[0] ? (
        <>
          <MainPage /> <DayModal />
        </>
      ) : (
        <Login />
      )}
    </>
  );
};

export default App;
