import React, { Component } from "react";
import Catalog from "../Catalog/Catalog.js";
import firebase from "../../firebase.js";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
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

  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <div className="auth">{this.renderAuth()}</div>
        <Catalog products={products} />
      </div>
    );
  }
}

export default App;
