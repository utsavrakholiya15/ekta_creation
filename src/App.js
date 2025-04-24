import logo from "./logo.svg";
import "./App.css";
import "./scss/main.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React, { Suspense, useEffect, useState } from "react";
import { Loader } from "./routs/common";

// import Home from "./routs/home";
// import Collection from "./routs/collection";
// import Buy from "./routs/collection/buy";
import Layout from "./shared/layout";
// import About from "./routs/about";
const Home = React.lazy(() => import("./routs/home"));
const Collection = React.lazy(() => import("./routs/collection"));
const Buy = React.lazy(() => import("./routs/collection/buy"));
const About = React.lazy(() => import("./routs/about"));

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<Loader />}>
              <Home />
            </Suspense>
          ),
        },
        {
          path: "/collection",
          element: (
            <Suspense fallback={null}>
              {/* No fallback needed */}
              <Collection />
            </Suspense>
          ),
        },
        {
          path: "/collection/buy",
          element: (
            <Suspense fallback={<Loader />}>
              <Buy />
            </Suspense>
          ),
        },
        {
          path: "/about",
          element: (
            <Suspense fallback={<Loader />}>
              <About />
            </Suspense>
          ),
        },
      ],
    },
  ]);
  return (
    // <div className="App">
    //   <Header />
    //   <Home />
    //   <Footer />
    // </div>
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
