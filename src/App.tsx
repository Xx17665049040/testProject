import React from 'react';
//路由导航栏
import Navbar from "./views/NavBar";
//路由页面组件
import routes from "./routes";
import About from "./views/About";
import Home from "./views/Home";
import Contact from "./views/Contact"
//包管理
import { renderRoutes, RouteConfig } from "react-router-config";
import { Link, BrowserRouter, Route, RouteComponentProps } from 'react-router-dom'

import './App.css';
import { StaticContext } from 'react-router';

function App() {
  return (
    <div className="App">

      <Navbar />
      <Route path="/Home" exact component={Home} />
      <Route path="/About" exact component={About} />
      <Route path="/Contact" exact component={Contact} />
      {/* {renderRoutes(routes as RouteConfig [])} */}

    
    
    </div>
  );
}
export default App;
