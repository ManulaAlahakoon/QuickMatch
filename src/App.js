//import Navbar from "./components/NavigationBar";  // Homepage Navbar with sign in option
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from "./components/Profile";
import Feedback from "./components/Feedback";
import NavigationForServiceProvider from "./components/NavigationForServiceProvider"; // Navbar of service provider panel with options unique to it
import Notification from './components/Notification'; //Notification
import FinancePage from './components/FinancePage';
import NavService from './components/MainNavigationBarForServiceProvider'; // Navbar of service provider panel with log out option

import "./App.css";
import './styles.css';

function App() {
  return (
    <div className="App">
      
      <NavService/>

      <Router>
        <NavigationForServiceProvider />
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/requests" element={<Notification />} />
          <Route path="/finance" element={<FinancePage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

/*      

<Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/services" element={<ServiceListings />} />
      </Routes>
    </Router>*/
/*

*/
