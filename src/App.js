import React, { createContext, lazy, Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/navigation/Header";
import Footer from "./components/navigation/Footer";
import Spinner from "react-bootstrap/Spinner";
import WhatWeDo from "./components/what-we-do/what-we-do";
const Home = lazy(() => import("./components/Index"));


export const shareContext = createContext();

function App() {
  return (
    <shareContext.Provider>
      <Router>
        <Header />
        <WhatWeDo />
        <Suspense
          fallback={
            <div className="d-flex justify-content-center">
              <Spinner
                style={{ height: "200px", width: "200px" }}
                animation="border"
                variant="success"
              />
            </div>
          }
        >
          <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/sitemap" component={Sitemap} />
            <Route component={Error404} /> */}
          </Switch>
        </Suspense>
        <Footer />
      </Router>
    </shareContext.Provider>
  );
}

export default App;