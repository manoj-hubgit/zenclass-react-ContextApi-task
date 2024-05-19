
import React, { useContext } from "react";
import { myContext } from "../App";
import "./Card.css"

const Card = () => {
  const [data, setData] = useContext(myContext);
  const totalPrice = data.reduce(
    (total, data) => total + data.price * (data.quantity || 1),
    0
  );
  const totalQuantity = data.reduce(
    (total, data) => total + (data.quantity || 1),
    0
  );

  const increment = (id, quantity) => {
    setData((curr) => {
      return curr.map((element) => {
        if (element.id === id) {
          return { ...element, quantity: element.quantity + 1 || quantity + 1 };
        }
        return element;
      });
    });
  };

  const decrement = (id, quantity) => {
    setData((curr) => {
      return curr.map((element) => {
        if (element.id === id && element.quantity > 1) {
          return { ...element, quantity: element.quantity - 1 || quantity - 1 };
        }
        return element;
      });
    });
  };

  const deleteButton = (id) => {
    setData(data.filter((data) => data.id !== id));
  };

  return (
    <div className="container mt-4">
      {data.map((element) => {
        const carouselId = `carouselExample${element.id}`;
        return (
          <div className="row mb-4" key={element.id}>
            <div className="col-md-6">
              <div id={carouselId} className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  {element.images.map((ele, i) => (
                    <div key={i} className={`carousel-item ${i === 0 ? "active" : ""}`}>
                      <img src={ele} className="d-block w-100" alt="..." />
                    </div>
                  ))}
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target={`#${carouselId}`}
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target={`#${carouselId}`}
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{element.title}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{element.brand}</h6>
                  <p className="card-text">{element.description}</p>
                  <p className="card-text"><strong>Price per item:</strong> ${element.price}</p>
                  <div className="d-flex align-items-center mb-2">
                    <button className="btn btn-primary me-2" onClick={() => increment(element.id, element.quantity || 1)}>+</button>
                    <button className="btn btn-secondary me-2" onClick={() => decrement(element.id, element.quantity || 1)}>-</button>
                    <button className="btn btn-danger" onClick={() => deleteButton(element.id)}>Delete</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
       <div className="fixed-bottom d-flex justify-content-end fixed-bottom-right bg-light p-3">
        <div>
          <h2>Total quantity: {totalQuantity}</h2>
          <h2>Total price: ${totalPrice}</h2>
        </div>
      </div>
    </div>
  );
};

export default Card;
