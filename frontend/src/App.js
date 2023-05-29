import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Page/Home/HomePage";


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route index element={<HomePage/>}/>
     </Routes>
     </BrowserRouter>
    
    </div>
  );
}

export default App;
