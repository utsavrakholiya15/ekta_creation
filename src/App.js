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
import { useEffect, useState } from "react";

function App() {
  // const [products, setProducts] = useState([]);

  // Fetch data on component mount
  // useEffect(() => {
  //   fetch('https://api.jsonbin.io/v3/b/6807652b8561e97a5004ea22/latest')
  //     .then(res => res.json())   // Parse JSON response
  //     .then(data => setProducts(data.record)) // Store it in state
  //     .catch(err => console.error('Error fetching data:', err));
  // }, []);
  // console.log(products);
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/collection",
          element: <Collection />,
        },
        {
          path: "/collection/buy",
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
