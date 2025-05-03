import React, { useEffect, useState } from "react";
// import { itemsCollection } from "../../utilities/data/items";
// import img1 from "../../utilities/data/images/coll1.jpg";
import "./collection.scss";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
export default function Collection({ collection }) {
  const navigate = useNavigate();
  const [queryParams] = useSearchParams();
  const location = useLocation();
  //
  const [hovered, setHovered] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [items, setitems] = useState([]);
  //

  const category = queryParams.get("category");
  useEffect(() => {
    // fetch("https://gist.githubusercontent.com/utsavrakholiya15/4d4dae2fe9d4cd0dae03bf56853770b3/raw/caf3aaf190f624546d65f70bda9fd0bdfd875fc6/ec.json")
    //   .then((res) => res.json()) // Parse JSON response
    //   // .then((data) => setitems(data)) // Store it in state
    //   .then((data) => {
    //     if (category) {
    //       const filtered = data.filter((el) => el.category === category);
    //       setitems(filtered);
    //     } else {
    //       setitems(data);
    //     }
    //   })
    //   .catch((err) => console.error("Error fetching data:", err)); 
    if (category) {
      const filtered = collection.filter((el) => el.category === category);
      setitems(filtered);
    } else {
      setitems(collection);
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.search]);

  // console.log("items***",items);
  // console.log("*****Coll",collection);

  return (
    <div className="collection container">
      <div className="collection-title">
        <h2>Sarees | Collection</h2>
      </div>
      <div className="collection-partition">
        <div className="collection-categories">
          <div
            onClick={() => navigate("/collection")}
            className={
              category == null
                ? "collection-categories-item categories-item-active"
                : "collection-categories-item"
            }
          >
            All
          </div>
          <div
            onClick={() => navigate("/collection?category=lycra")}
            className={
              category == "lycra"
                ? "collection-categories-item categories-item-active"
                : "collection-categories-item"
            }
          >
            Lycra
          </div>
          <div
            onClick={() => navigate("/collection?category=rimzim")}
            className={
              category == "rimzim"
                ? "collection-categories-item categories-item-active"
                : "collection-categories-item"
            }
          >
            Rimzim
          </div>
          <div
            onClick={() => navigate("/collection?category=chinon")}
            className={
              category == "chinon"
                ? "collection-categories-item categories-item-active"
                : "collection-categories-item"
            }
          >
            Chinon
          </div>
          <div
            onClick={() => navigate("/collection?category=satin")}
            className={
              category == "satin"
                ? "collection-categories-item categories-item-active"
                : "collection-categories-item"
            }
          >
            Satin
          </div>
          <div
            onClick={() => navigate("/collection?category=georgette")}
            className={
              category == "georgette"
                ? "collection-categories-item categories-item-active"
                : "collection-categories-item"
            }
          >
            Georgette
          </div>
        </div>
        <div className="collection-grid">
          {items.length > 0 ? (
            items.map((el, i) => {
              return (
                <div
                  onClick={() => navigate(`/collection/buy?id=${el.id}`)}
                  key={i}
                  className="collection-item"
                >
                  <div className="collection-item-img">
                    <img
                      className="img-full collection-image"
                      // src={el.image}
                      src={hoveredIndex === i ? el.image2 : el.image1}
                      onMouseEnter={() => setHoveredIndex(i)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      alt=""
                    />
                  </div>
                  <div className="collection-item-data">
                    <p>{el.name}</p>
                    <span>Rs.{el.price}</span>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="collection-loader">
              <span className="loader"></span>
            </div>
          )}
          {/* -- */}
          {/* <div className="collection-item">
            <div className="collection-item-img">
              <img className="img-full" src={itemsCollection[0].img} />
            </div>
            <div className="collection-item-data">
              <p>{itemsCollection[0].name}</p>
              <span>Rs.{itemsCollection[0].price}</span>
            </div>
          </div> */}
          {/* -- */}
          {/* <div className="collection-item">
            <div className="collection-item-img">
              <img className="img-full" src={itemsCollection[0].img} />
            </div>
            <div className="collection-item-data">
              <p>{itemsCollection[0].name}</p>
              <span>Rs.{itemsCollection[0].price}</span>
            </div>
          </div> */}
          {/* <div className="collection-item">
            <div className="collection-item-img">
              <img className="img-full" src={img1} />
            </div>
            <div className="collection-item-data">
              <p>Special Design Women Saree Zimmy Choo</p>
              <span>Rs.20000</span>
            </div>
          </div>
          <div className="collection-item">
            <div className="collection-item-img">
              <img className="img-full" src={img1} />
            </div>
            <div className="collection-item-data">
              <p>Special Design Women Saree Zimmy Choo</p>
              <span>Rs.20000</span>
            </div>
          </div>
          <div className="collection-item">
            <div className="collection-item-img">
              <img className="img-full" src={img1} />
            </div>
            <div className="collection-item-data">
              <p>Special Design Women Saree Zimmy Choo</p>
              <span>Rs.20000</span>
            </div>
          </div>
          <div className="collection-item">
            <div className="collection-item-img">
              <img className="img-full" src={img1} />
            </div>
            <div className="collection-item-data">
              <p>Special Design Women Saree Zimmy Choo</p>
              <span>Rs.20000</span>
            </div>
          </div>
          <div className="collection-item">
            <div className="collection-item-img">
              <img className="img-full" src={img1} />
            </div>
            <div className="collection-item-data">
              <p>Special Design Women Saree Zimmy Choo</p>
              <span>Rs.20000</span>
            </div>
          </div>
          <div className="collection-item">
            <div className="collection-item-img">
              <img className="img-full" src={img1} />
            </div>
            <div className="collection-item-data">
              <p>Special Design Women Saree Zimmy Choo</p>
              <span>Rs.20000</span>
            </div>
          </div>
          <div className="collection-item">
            <div className="collection-item-img">
              <img className="img-full" src={img1} />
            </div>
            <div className="collection-item-data">
              <p>Special Design Women Saree Zimmy Choo</p>
              <span>Rs.20000</span>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
