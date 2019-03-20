import React, { Component } from "react";
import { Menu, Sidebar } from "semantic-ui-react";

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
        <div>Shopping Cart</div>
      </Sidebar>
    );
  }
}

export default Cart;
