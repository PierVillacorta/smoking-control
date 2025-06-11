import DayModal from "./components/DayModal";
import Login from "./components/Login";
import MainPage from "./components/MainPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        theme="dark"
        closeOnClick
        rtl={false}
      />
    </>
  );
};

export default App;
