import React, { Component } from "react";
import Catalog from "../Catalog/Catalog.js";
import Cart from "../Cart/Cart.js";
import firebase from "../../firebase.js";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      cartItems: [],
      signedIn: false
    };

    this.uiConfig = {
      signInFlow: "popup",
      signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
      callbacks: {
        signInSuccessWithAuthResult: () => false
      }
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
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ signedIn: !!user });
    });
  }

  renderAuth() {
    if (this.state.signedIn) {
      return <p>Logged in as {firebase.auth().currentUser.displayName}</p>;
    } else {
      return (
        <StyledFirebaseAuth
          uiConfig={this.uiConfig}
          firebaseAuth={firebase.auth()}
        />
      );
    }
  }

  addItem = item => {
    console.log("adding item");
    const currentItems = this.state.cartItems;
    currentItems.push(item);
    this.setState({
      cartItems: currentItems
    });
  };

  removeItem = item => {
    console.log("removing item");
    const currentItems = this.state.cartItems;
    for (var i = 0; i < currentItems.length; i++) {
      if (currentItems[i] === item) {
        currentItems.splice(i, 1);
      }
    }
    this.setState({ cartItems: currentItems });
  };

  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <div className="auth">{this.renderAuth()}</div>
        <Catalog products={products} addItem={this.addItem} />
        <Cart items={this.state.cartItems} removeItem={this.removeItem} />
      </div>
    );
  }
}

export default App;
