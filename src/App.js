
import './App.css';
import {
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import Mainpage from './Page/mainpage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Mainpage />} path='/' />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
