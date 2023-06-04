import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Page/Home/HomePage";
import LoginPage from "./Page/Login/LoginPage";
import RegisterPage from "./Page/Login/RegisterPage";
import NavBar from "./Component/Utility/NavBar";
import ContactPage from "./Page/Contact/ContactPage";



function App() {
  return (
    <div className="App">
      
     <BrowserRouter>
     <Routes>
      <Route index element={<HomePage/>}/>
      <Route path="/Login" element={<LoginPage/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
      <Route path="/contact" element={<ContactPage/>}/>
     </Routes>
     </BrowserRouter>
    
    </div>
  );
}

export default App;
