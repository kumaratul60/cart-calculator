import React from "react";

const Products = ({ state, dispatch }) => {
  const { cart, products } = state;
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        width: "80%", //80% of screen
      }}
    >
      {products.map((prod) => (
        <div
          key={prod.id}
          style={{
            display: "flex",
            flexDirection: "column",
            padding: 10,
            border: "1px solid gray",
            width: "30%",
            marginTop: 10,
            marginBottom: 10,
            gap: 10,
          }}
        >
          <img
            src={prod.thumbnail}
            alt={prod.title}
            style={{ height: 200, objectFit: "cover" }}
          />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            {prod.brand === "Apple" ? (
              <span>
                <i>{prod.title}</i>
              </span>
            ) : (
              <span>{prod.title}</span>
            )}
            <b>
              <i>₹{prod.price}</i>
            </b>
          </div>

          {cart.some((p) => p.id === prod.id) ? (
            <button
              style={{
                padding: 5,
                border: 0,
                borderRadius: 5,
                backgroundColor: "#333",
                color: "white",
                cursor: "pointer",
              }}
              onClick={() =>
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: prod,
                })
              }
            >
              {" "}
              Remove from cart
            </button>
          ) : (
            <button
              style={{
                padding: 5,
                border: 0,
                borderRadius: 5,
                backgroundColor: "green",
                color: "white",
                cursor: "pointer",
              }}
              onClick={() =>
                dispatch({
                  type: "ADD_To_CART",
                  payload: {
                    id: prod.id,
                    title: prod.title,
                    thumbnail: prod.thumbnail,
                    price: prod.price,
                    qty: 1,
                  },
                })
              }
            >
              {" "}
              Add to cart
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Products;
