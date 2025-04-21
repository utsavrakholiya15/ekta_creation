import logo from "./logo.svg";
import "./App.css";
import "./scss/main.scss";
import Header from "./shared/layout/header";
import Footer from "./shared/layout/footer";
import Home from "./routs/home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Collection from "./routs/collection";
import Layout from "./shared/layout";
import Buy from "./routs/collection/buy";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path:"/collection",
          element: <Collection />,
        },
        {
          path:"/collection/buy",
          element: <Buy />,
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
