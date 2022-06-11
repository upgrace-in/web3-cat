
import Header from "./components/Header/Header.jsx";
// import "aos/dist/aos.css";
import { useEffect, useState } from "react";
// import Aos from "aos";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { CatMint } from "./components/CatMint/index.jsx";
import { LandingPage } from "./components/LandingPage.jsx";
import { Stalking } from "./components/Stalking/index.jsx";


const App = () => {

  // useEffect(() => {

  //   Aos.init({ duration: 2000 });

  // }, [])

  const [toggleSidebar, setToggleSidebar] = useState(true)


  return <>
    <Router>
      <div className="heroSection">
        <Header toggleSidebar={toggleSidebar} setToggleSidebar={setToggleSidebar} />
        <Sidebar toggleSidebar={toggleSidebar} setToggleSidebar={setToggleSidebar} />
      </div>

      <Routes>
        {/* <Route path="/cat-mint">
          <CatMint />
        </Route> */}
        {/* <Route path="/">
          <LandingPage />
        </Route> */}
        <Route exact path="/" element={<LandingPage />}/>
        <Route exact path="/cat-mint" element={<CatMint />}/>
        <Route exact path="/stalking" element={<Stalking />}/>
      </Routes>
    </Router>
  </>;
}

export default App;