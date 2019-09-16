import React, { Component } from "react";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Contacts from "./components/pages/Contacts";
import Details from "./components/pages/Details";
import News from "./components/pages/News";
import NotFoundPage from "./components/pages/NotFoundPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/news" component={News} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/details" component={Details} />
          <Route component={NotFoundPage} />
        </Switch>

        <Footer />
      </div>
    );
  }
}

export default App;
