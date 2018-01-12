import React, { PropTypes } from 'react';
import HomeStyle from '../../../../public/home.scss';

const ProductDetail = ({ loading, product, onAddItem }) => {
  if (!loading && product) {
    const { _id, image, name, description, price, deliveryStimate, category } = product;

    return (
      <section className={HomeStyle.projects}>
        <div className={HomeStyle.projects_item}>

        <div className={HomeStyle.projects_box}>
          <div>
            <img src={image} alt={description} />

              <h4>{ name }</h4>
              <p>{ description }</p>
              <ul >
                <li >
                  Precio:{ price } $
                </li>
                <li >
                  Entrega: { deliveryStimate }
                </li>
                <li >
                  Categoría: { category }
                </li>
              </ul>
              <button
                onClick={() => onAddItem(product)}
              >
                <span className="fa fa-cart-plus" /> Añadir al carrito
              </button>
              </div>
        </div>

        </div>
      </section>
    );
  }

  return (<span>Cargando Datos...</span>);
};

ProductDetail.propTypes = {
  product: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  onAddItem: PropTypes.func
};

export default ProductDetail;
