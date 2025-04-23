import React, { useEffect, useState } from "react";
// import { itemsCollection } from "../../utilities/data/items";
// import img1 from "../../utilities/data/images/coll1.jpg";
import "./collection.scss";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
export default function Collection() {
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
    fetch("https://api.jsonbin.io/v3/b/6807652b8561e97a5004ea22/latest")
      .then((res) => res.json()) // Parse JSON response
      // .then((data) => setitems(data.record)) // Store it in state
      .then((data) => {
        if (category) {
          const filtered = data.record.filter((el) => el.category === category);
          setitems(filtered);
        } else {
          setitems(data.record);
        }
      })
      .catch((err) => console.error("Error fetching data:", err));

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.search]);

  // console.log("items***",items);
  if (category == "women") {
  }

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
            onClick={() => navigate("/collection?category=women")}
            className={
              category == "women"
                ? "collection-categories-item categories-item-active"
                : "collection-categories-item"
            }
          >
            Women
          </div>
          <div
            onClick={() => navigate("/collection?category=kids")}
            className={
              category == "kids"
                ? "collection-categories-item categories-item-active"
                : "collection-categories-item"
            }
          >
            Kids
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
                      src={hoveredIndex === i ? el.image1 : el.image}
                      onMouseEnter={() => setHoveredIndex(i)}
                      onMouseLeave={() => setHoveredIndex(null)}
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
            // <div
            //   style={{
            //     fontSize: "21px",
            //     textTransform: "uppercase",
            //     textAlign: "center",
            //   }}
            // >
            //   No items found
            // </div>
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
