import React from 'react';
import HomeStyle from '../../../public/home.scss';

const CartItem = ({
  _id,
  name,
  description,
  image,
  price,
  onRemoveItem,
  num
}) => (
  <div className={(num%2)?HomeStyle.time_box_right:HomeStyle.time_box_left}>
    <div>
      <img  src={image} alt={name} />
      <h4>{name}</h4>
      <p>{description}</p>
      <p>Cantidad: 1</p>
      <p>Precio: {price} $</p>
      <small>
        <button
          className="btn btn-danger"
          onClick={() => onRemoveItem(_id)}
        >
          &times;
        </button>
      </small>
    </div>
  </div>
);

export default CartItem;
