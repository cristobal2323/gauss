import React, { PropTypes} from 'react';
import uuid from 'uuid';
import HomeStyle from '../../../public/home.scss';
import CartItem from './CartItem';

const CartItemList = ({ items, onRemoveItem }) => (
  <section className={HomeStyle.time}>
    <div className={HomeStyle.time_item}>
      {
        items.map((item, i) => (
          <CartItem
            key={uuid.v4()}
            onRemoveItem={onRemoveItem}
            {...item}
            num={i}
          />
        )).reverse()
      }
    </div>
  </section>
);

CartItemList.defaultProps = {
  items: []
};

CartItemList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  onRemoveItem: PropTypes.func.isRequired
};

export default CartItemList;
