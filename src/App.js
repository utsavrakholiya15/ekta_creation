import logo from "./logo.svg";
import "./App.css";
import "./scss/main.scss";
import { Analytics } from "@vercel/analytics/react";
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
  const [appData, setappData] = useState(null);
  const [collData, setcollData] = useState(null);
  useEffect(() => {
    // console.log("refetching in app js****");

    const fetchAppData = async () => {
      try {
        const response = await fetch(
          "https://gist.githubusercontent.com/utsavrakholiya15/37cffe00dc039d3040a745d31fd43e63/raw/556c71ae9805fd84d085ca8b3797441f5f1aa609/app_data.json"
        );
        const result = await response.json();
        setappData(result);
      } catch (error) {
        console.error(error);
      }
    };
    const fetchCollData = async () => {
      try {
        const response = await fetch(
          "https://gist.githubusercontent.com/utsavrakholiya15/4d4dae2fe9d4cd0dae03bf56853770b3/raw/7f05718f65b24cec7c5b0ebb0c7e29f9b94168b8/ec.json"
        );
        const result = await response.json();
        setcollData(result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAppData();
    fetchCollData();
  }, []);
  // console.log(appData, collData);

  if (!appData || !collData) {
    return <Loader />;
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<Loader />}>
              {/* <Home /> */}
              {appData ? <Home images={appData.home} /> : <Loader />}
            </Suspense>
          ),
        },
        {
          path: "/collection",
          element: (
            <Suspense fallback={null}>
              {/* No fallback needed */}
              <Collection collection={collData} />
            </Suspense>
          ),
        },
        {
          path: "/collection/buy",
          element: (
            <Suspense fallback={<Loader />}>
              <Buy collection={collData} />
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
