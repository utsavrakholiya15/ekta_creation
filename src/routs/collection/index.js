import React, { useEffect, useState } from "react";
import { itemsCollection } from "../../utilities/data/items";
import img1 from "../../utilities/data/images/coll1.jpg";
import "./collection.scss";
import { useNavigate } from "react-router-dom";
export default function Collection() {
  const navigate = useNavigate();
  const [items, setitems] = useState(itemsCollection);

  // console.log(items);

  return (
    <div className="collection container">
      <div className="collection-title">
        <h2>Sarees | Collection</h2>
      </div>
      <div className="collection-partition">
        <div className="collection-categories">
          <div className="collection-categories-item">All</div>
          <div
            onClick={() => {
              navigate("/collection/buy?id=1");
            }}
            className="collection-categories-item"
          >
            Women
          </div>
          <div className="collection-categories-item">Kids</div>
        </div>
        <div className="collection-grid">
          {items.length > 0 ? (
            items.map((el, i) => {
              return (
                <div
                  onClick={() => navigate(`/collection/buy?id=${i}`)}
                  key={i}
                  className="collection-item"
                >
                  <div className="collection-item-img">
                    <img className="img-full" src={el.img} />
                  </div>
                  <div className="collection-item-data">
                    <p>{el.name}</p>
                    <span>Rs.{el.price}</span>
                  </div>
                </div>
              );
            })
          ) : (
            <div
              style={{
                fontSize: "21px",
                textTransform: "uppercase",
                textAlign: "center",
              }}
            >
              No items found
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
