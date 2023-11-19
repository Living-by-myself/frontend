import ModalView from "./components/common/modalView";
import Router from "./shared/Router";
import { BrowserRouter } from "react-router-dom";
import useUserStore from "./store/useUserStore";
import { useEffect, useCallback } from "react";
import getUserProfile from "./api/user/getUserProfile";

function App() {
  const { isLogged, setProfile } = useUserStore();
  const handleProfile = useCallback(async () => {
    try {
      const res = await getUserProfile();
      setProfile(res.data);
    } catch (e) {
      console.error(e);
    }
  }, [setProfile]);

  useEffect(() => {
    if (isLogged) {
      handleProfile();
    }
  }, [isLogged, handleProfile]);

  return (
    <BrowserRouter>
      <Router></Router>
      <ModalView />
    </BrowserRouter>
  );
}

export default App;
