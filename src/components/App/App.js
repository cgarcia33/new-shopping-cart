import React, { Component } from "react";
import Catalog from "../Catalog/Catalog.js";
import firebase from "../../firebase.js";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    };
  }

  componentDidMount() {
    import("../../static/data/products.json")
      .then(json => {
        this.setState({ products: json.products });
      })
      .catch(error => {
        alert(error);
      });
  }

  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <Catalog products={products} />
      </div>
    );
  }
}

export default App;
