import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart, total } = useContext(CartContext);

  return (
    <div style={{ marginTop: "30px" }}>
      <h2>Cart ({cart.length} items)</h2>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} style={{ marginBottom: "10px" }}>
            <span>{item.title.length > 25 ? item.title.slice(0, 25) + "..." : item.title}</span>{" "}
            - ${item.price}
            <button style={{ marginLeft: "10px" }} onClick={() => removeFromCart(item.id)}>
              Remove
            </button>
          </div>
        ))
      )}
      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
}

export default Cart;
