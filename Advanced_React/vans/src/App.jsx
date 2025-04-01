import React from "react";
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import LayOut from "./components/LayOut.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import VansLayOut from "./components/VansLayOut.jsx";
import Vans from "./components/vans/Vans.jsx";
import LuxuryVans from "./components/vans/LuxuryVans.jsx";
import SimpleVans from "./components/vans/SimpleVans.jsx";
import RuggedVans from "./components/vans/RuggedVans.jsx";
import Host from "./components/Host.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";

// Vans loaders
import SimpleVansLoader from "./components/vansloader/SimpleVansLoader.jsx";
import LuxuryVansLoader from "./components/vansloader/LuxuryVansLoader.jsx";
import RuggedVansLoader from "./components/vansloader/RuggedVansLoader.jsx";
import VansLoader from "./components/vansloader/VansLoader.jsx";

function App() {
  let router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<LayOut />}>
        {/* Home route */}
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />

        {/* Parent route for vans layout */}
        <Route
          path="vanslayout"
          element={<VansLayOut />}
          errorElement={<ErrorBoundary />}
        >
          {/* Default /vanslayout route showing the main vans list */}
          <Route index element={<Vans />} loader={VansLoader} />

          {/* Nested routes for specific van categories */}
          <Route
            path="luxury" // Relative route for luxury vans
            element={<LuxuryVans />}
            loader={LuxuryVansLoader} // Loader for luxury vans data
          />
          <Route
            path="simple" // Relative route for simple vans
            element={<SimpleVans />}
            loader={SimpleVansLoader} // Loader for simple vans data
          />
          <Route
            path="rugged" // Relative route for rugged vans
            element={<RuggedVans />}
            loader={RuggedVansLoader} // Loader for rugged vans data
          />
        </Route>

        {/* Host route */}
        <Route path="host" element={<Host />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
