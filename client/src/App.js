import React , {Component} from "react";
import {BrowserRouter as Router , Route , Switch} from "react-router-dom";
import CreatePost from "./components/CreatePost";
import EditPost from "./components/EditPost";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import PostDetails from "./components/PostDetails";



export default class App extends Component{
  render(){
    return(
      <Router>
       <div className="container">
       <NavBar/>
      <Switch>
           
         <Route exact path="/">  <Home/></Route>
         <Route exact path="/add" ><CreatePost/></Route>
         <Route exact path="/edit/:id" component={EditPost} />
         <Route exact path="/post/:id" component={PostDetails} />
      </Switch>
      </div>

      </Router>
      
      // <div className="container">
      //   <Home/>
      // </div>
    )
  }
}