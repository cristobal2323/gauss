import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const Product = ({
	_id,
	name,
	description,
	image,
	price,
	deliveryStimate,
	category,
	onAddItem
}) => (
	<div>
		<Link to={`/detail/${_id}`}>
			<img width="100%" src={image} alt={description} />
		</Link>

		<Link to={`/detail/${_id}`}>
			<h4>{name}</h4>
		</Link>
		<p>{description}</p>
		<ul>
			<li>Precio: {price} $</li>
			<li>Entrega: {price}</li>
			<li>Categoria: {category}</li>
		</ul>
	
		<button 
		onClick={()=> onAddItem({_id,name,description,image,price,deliveryStimate,category})}>
			<span className="fa fa-cart-plus">
				Añadir al carrito
			</span>
		</button>
	</div>
);

Product.PropTypes = {
	_id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	deliveryStimate: PropTypes.string.isRequired,
	category: PropTypes.string.isRequired,
	onAddItem : PropTypes.func.isRequired
}

export default Product;