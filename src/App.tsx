/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */

// import Footer from "./components/ui/Footer/Footer"
import { onAuthStateChanged } from "firebase/auth";
import MainLayout from "./layout/MainLayout"
import { setLoading, setUser } from "./redux/features/users/userSlice";
import { useAppDispatch } from "./redux/hooks";
import { auth } from "./utils/firebase";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useEffect} from 'react'
function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setLoading(true));
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user.email));
        dispatch(setLoading(false));
      } else {
        dispatch(setLoading(false));
      }
    });
  }, [dispatch]);
  return (
    <div>
         <MainLayout />
         <ToastContainer/>
    </div>
  )
}

export default App