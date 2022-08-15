import React, { useEffect, useState } from "react";

const Cart = ({ state, dispatch }) => {
  const { cart } = state;
  const [total, setTotal] = useState(0);

  const changeQty = (id, qty) => {
    dispatch({
      type: "CHANGE_CART_QTY",
      payload: { id, qty },
    });
  };

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "10px",
        backgroundColor: "whitesmoke",
        padding: 10,
        width: "20%",
      }}
    >
      <b style={{ fontSize: 30, alignSelf: "center" }}>Hay</b>
      <strong style={{ alignSelf: "center" }}>SubTotal: ₹ {total} </strong>
      {cart.length > 0 ? (
        cart.map((cartItem) => (
          <div
            key={cartItem.title}
            style={{
              display: "flex",
              padding: 10,
              border: "1px solid gray",
              margin: 5,
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", gap: 10 }}>
              <img
                src={cartItem.thumbnail}
                alt={cartItem.title}
                style={{ height: 70, objectFit: "cover" }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                }}
              >
                <span>{cartItem.title} </span>
                <i> ₹{cartItem.price}</i>
              </div>
              <div style={{ display: "flex", alignSelf: "center", gap: 10 }}>
                <button
                  onClick={() => changeQty(cartItem.id, cartItem.qty - 1)}
                >
                  -
                </button>
                <span>{cartItem.qty}</span>
                <button
                  onClick={() => changeQty(cartItem.id, cartItem.qty + 1)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <span style={{ padding: 20, alignSelf: "center" }}>Add something</span>
      )}
    </div>
  );
};

export default Cart;
