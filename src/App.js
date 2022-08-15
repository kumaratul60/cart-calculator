import axios from "axios";
import { useEffect, useReducer } from "react";
import Cart from "./components/Cart";
import Products from "./components/Products";
import { cartReducer } from "./reducer/cartReducer";

/*
  Why use useReducer hook instead of useState => useReducer is more efficient and scalable than useState, it basically add the logic 
  at one single place called reducer function, so we use that logic in further components and manage the state
  */

function App() {
  // dispatch to manipulate the state
  const [state, dispatch] = useReducer(cartReducer, {
    products: [],
    cart: [],
  });

  console.log("state", state);

  const fetchAxios = async () => {
    // extracting data from API, then from that data extracting products using data.products
    const { data } = await axios.get("https://dummyjson.com/products");

    dispatch({
      type: "ADD_PRODUCTS",
      payload: data.products,
    });

    console.log("data1", data.products);
  };

  const fetchData = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const result = await data.json();
    // console.log("result", result);
  };

  const fetchThen = async () => {
    await fetch("https://api.storerestapi.com/products")
      .then((response) => response.json())
      .then((jsonData) => console.log("fetchThen", jsonData.data))
      .catch((error) => console.error("error", error));
    // we use async a because api return promise as a response so to handle this we use it.
  };
  //  now above three method give that only data in json form as a res of three API call

  useEffect(() => {
    fetchAxios();
    // fetchData();
    // fetchThen();
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <Products state={state} dispatch={dispatch} />
      <Cart state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
