import { BrowserRouter, Route, Routes } from "react-router-dom";
import Start from './Page/start'
import AboutMe from './Page/aboutme'
import Menu from "./Components/Menu";


function AppRoutes() {
  return(
    <BrowserRouter>
      <Menu/>

        <Routes>
          <Route path="/" element={<Start></Start>} />
          <Route path="/aboutme" element={<AboutMe></AboutMe>}/>
          <Route path="*" element={<div>Page not Found</div>}/>
        </Routes>
    </BrowserRouter>


  )
}

export default AppRoutes;
