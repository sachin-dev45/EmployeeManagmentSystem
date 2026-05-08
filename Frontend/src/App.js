

import './App.css';
import AddEmployee from './AddEmployee';
import GetEmployee from './GetEmployee';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Services from './Services';
import Home from './Home';
import AdminDashbord from './AdminDashbord';
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import ShowEmployee from './ShowEmployee';
import EmployeeDashbord from './EmployeeDashbord';
import RegisterUser from './RegisterUser';
import AdminNav from './AdminNav';
import EmployeeNav from './EmployeeNav';
import FirstPage from './FirstPage';
import LeaveApplication from './LeaveApplication';
import CommonNavbar from './CommonNavbar';
import ViewLeaveDetails from './ViewLeaveDetails';
import UpdateLeaveStatus from './UpdateLeaveStatus';


function App() {
  return (
    <div className="App">

      <AppContent />
      
        <Routes>
          <Route path='/admindashbord' element={<AdminDashbord />} />
          <Route path='/addemployee' element={<AddEmployee />} />
          <Route path='/getemployee' element={<GetEmployee />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/contactus' element={<ContactUs />} />
          <Route path='/services' element={<Services />} />
          <Route path='/home' element={<Home />} />
          <Route path='/showemployee' element={<ShowEmployee />} />
          <Route path='/employeedashbord' element={<EmployeeDashbord />} />
          <Route path='/registeruser' element={<RegisterUser />} />
         <Route path="/" element={<FirstPage></FirstPage>}></Route>
         <Route path="/leaveapplication" element={<LeaveApplication></LeaveApplication>}></Route>
         <Route path="/viewleavedetails" element={<ViewLeaveDetails></ViewLeaveDetails>}></Route>
         
         <Route path='/updateleavestatus' element={<UpdateLeaveStatus></UpdateLeaveStatus>} />
           
        </Routes>
      
     

      
      
      
      
    </div>
  );
}

export default App;
function AppContent() {
  let location = useLocation();

  let isloggedin = false;
  let user = null;

  try {
    const rawLogin = localStorage.getItem("isloggedin");
    const rawUser = localStorage.getItem("userinfo");

    isloggedin = rawLogin ? JSON.parse(rawLogin) : false;
    user = rawUser ? JSON.parse(rawUser) : null;

  } catch (error) {
    console.log("Invalid JSON detected in localStorage");
    localStorage.clear(); // ✅ auto-fix corrupted data
  }

  let publicpages = ["/", "/home", "/aboutus", "/contactus", "/services"];

  return (
    <div>
      {(isloggedin && user && location.pathname !== "/registeruser") &&
        (user.role?.toLowerCase() === "admin"
          ? <AdminNav />
          : <EmployeeNav />)
      }

      {(!isloggedin && !user && publicpages.includes(location.pathname)) &&
        <CommonNavbar />
      }
    </div>
  );
}







