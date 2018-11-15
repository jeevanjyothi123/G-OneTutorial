import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar';
import Home from './component/Home';
import It from './component/It';
import Blogs from './component/Blogs'
import About from './component/About'
import BussinessBlog from './component/blog-catagory/Bussiness'
import TechnologyBlog from './component/blog-catagory/Technology'
import MarketingBlog from './component/blog-catagory/Marketing'
import {BrowserRouter,Route,Switch} from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div className="App">
      
        <BrowserRouter>
        <div>
        <Navbar />
        <Switch>
       
          <Route path="/" exact component={Home}/>
          <Route path="/information-technology" component={It}/>
          <Route path="/blogs" component={Blogs}/>
          <Route path="/about" component={About}/>
          <Route path="/bussiness-blog" component={BussinessBlog}/>
          <Route path="/technology-blog" component={TechnologyBlog}/>
          <Route path="/marketing-blog" component={MarketingBlog}/>
          </Switch>
        </div>
       
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
