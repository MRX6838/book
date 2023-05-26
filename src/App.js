import Log from "./Login/log"
import Reg from "./Reg/Reg";
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { Vermail } from "./Verakagnum/Vermail";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/login' element={<Log />} />
        <Route path='/ver' element={<Vermail/>}/>
        <Route path='/registration' element={<Reg />} />
        <Route path="*" element={<Navigate to={"/login"} />} />
      </Routes>
    </div>
  );
}

export default App;
