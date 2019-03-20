import React, { Component } from "react";
import { Menu, Sidebar, Image, Icon } from "semantic-ui-react";

class Cart extends Component {
  state = {
    totalPrice: 0,
    items: []
  };

  render() {
    return (
      <Sidebar
        as={Menu}
        animation="overlay"
        icon="labeled"
        direction="right"
        vertical
        visible
        width="thin"
      >
        <Icon name="shopping cart" size="large" />
        <div>Shopping Cart</div>
        {this.props.items.map(product => (
          <div>
            <Image
              src={require(`../../static/data/products/${product.sku}_1.jpg`)}
              size="tiny"
              centered
            />
            {product.title}
            <br />
            Price: {`$ ${product.price}`}
            <br />
          </div>
        ))}
      </Sidebar>
    );
  }
}

export default Cart;
