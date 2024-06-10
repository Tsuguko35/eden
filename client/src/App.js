import { Route, Routes } from "react-router-dom";
import { routes } from "./config";
import "./styles/styles.css";
import { NavBar } from "./components";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ServicesQuotation } from "./context";
import { useState } from "react";

function App() {
  const [quotedServices, setQuotedServices] = useState([]);
  return (
    <div>
      {/* Nav Bar */}
      <NavBar />

      {/* Pages */}
      <ServicesQuotation.Provider value={{ quotedServices, setQuotedServices }}>
        <div className="pages">
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.component}
              />
            ))}
          </Routes>
        </div>
      </ServicesQuotation.Provider>
    </div>
  );
}

export default App;
