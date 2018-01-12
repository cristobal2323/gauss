import React, { PropTypes } from 'react';
import Product from './Product';
import uuid from 'uuid';
import HomeStyle from '../../../../public/home.scss';

const ProductList = ({
	loading,
	products,
	onAddItem
}) => (
	<section className={HomeStyle.projects}>
		<div className={HomeStyle.projects_item}>
			{loading && <span>Cargando Datos ...</span>}
			<div className={HomeStyle.projects_box}>
			{
				products.map(product => (
					<Product
						key={uuid.v4()}
						onAddItem={onAddItem}
						{...product}
					/>
				))
			}
			</div>
		</div>
	</section>
);

ProductList.PropTypes = {
	products: PropTypes.arrayOf(PropTypes.object).isRequired,
	loading: PropTypes.bool.isRequired,
	onAddItem: PropTypes.func.isRequired
}

export default ProductList;