import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';

import * as productActions from '../../../actions/productActions';
import DashBoardStyle from '../../../../public/dashboard.scss';

class ProductAddContainer extends Component {
  constructor (props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit (event) {
    event.preventDefault();
    const product = {
      name: this.nameInput.value,
      description: this.descriptionInput.value,
      image: this.imageInput.value,
      price: this.priceInput.value,
      deliveryStimate: this.deliveryInput.value,
      category: this.categoryInput.value
    };

    await this.props.actions.saveProduct(product);
    browserHistory.push('/');
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <section className={DashBoardStyle.module_form}>
      
          <div className={DashBoardStyle.title}>
              <h3>Ingreso de Producto</h3>
          </div>
        
          <div className={DashBoardStyle.item_form}>
            <label htmlFor="name">Nombre: </label>
            <input name="name" type="text" ref={node => this.nameInput = node} />
          </div>

  
          <div className={DashBoardStyle.item_form}>
            <label htmlFor="description">Descripción: </label>
            <input name="description" type="text" ref={node => this.descriptionInput = node}/>
          </div>
          <br/>
          <div className={DashBoardStyle.item_form}>
            <label htmlFor="image">Imagen: </label>
            <input name="image" type="text" ref={node => this.imageInput = node}/>
          </div>
          <br/>
          <div className={DashBoardStyle.item_form}>
            <label htmlFor="price">Precio: </label>
            <input name="price" type="number" ref={node => this.priceInput = node}/>
          </div>
          <br/>
          <div className={DashBoardStyle.item_form}>
            <label htmlFor="deliveryStimate">TIempo de entrega: </label>
            <input name="deliveryStimate" type="text" ref={node => this.deliveryInput = node}/>
          </div>
          <br/>
          <div className={DashBoardStyle.item_form}>
            <label htmlFor="category">Categoría: </label>
            <input name="category" type="text" ref={node => this.categoryInput = node}/>
          </div>
        </section>
        <div className={`${DashBoardStyle.module_form} ${DashBoardStyle.button}`}>
            <div className={`${DashBoardStyle.item_form} ${DashBoardStyle.button}`}>
              <input  type="submit" value="Guardar"/>
            </div>
        </div>
      </form>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(productActions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(ProductAddContainer);
