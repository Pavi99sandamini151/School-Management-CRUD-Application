import React , {Component} from "react";

export default class NavBar extends Component{
    render(){
        return(
            
                <nav class="navbar navbar-expand-lg navbar-dark" style={{backgroundColor:'Black'}}>
                    <div class="container-fluid">
  {/* <a class="navbar-brand" href="#">Navbar</a> */}
  <button class="navbar-toggler" 
  type="button" 
  data-toggle="collapse" data-target="#navbarSupportedContent" 
  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item ">
        <a class="nav-link" aria-current="page" href="/">School Management System</a>
      </li>
    </ul>
    
  </div>
  </div>
</nav>
            
        )
    }
}