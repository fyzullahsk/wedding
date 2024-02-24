import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import LandingPage from "./Pages/LandingPage/LandingPage";
import Registration from "./Pages/Registration/Registration";
import Login from "./Pages/Login/Login";
import Dashboard from "./Pages/Dashboard/Dashboard";
import CategoryDetails from "./Pages/CategoryDetails/CategoryDetails";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Dashboard" element={<Dashboard/>}/>
          <Route path="/CategoryDetails" element={<CategoryDetails/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;