import React from "react";
import { useDispatch } from "react-redux";
import { removeItem } from "../features/counter/cartSlice";
const CartItem = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch();
  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-pric">${price}</h4>
        <button
          className="remove-btn"
          onClick={() => {
            dispatch(removeItem(id));
          }}>
          remove
        </button>
      </div>
      <div>
        <button className="amount-btn">+</button>
        <p>{amount}</p>
        <button className="amount-btn">-</button>
      </div>
    </article>
  );
};

export default CartItem;
