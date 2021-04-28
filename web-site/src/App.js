import React from 'react';
import './App.css';
import NavBar from "./components/Navbar/navbar"
import {
  //need to get thing from the react router. 
  BrowserRouter as Router,
  Switch,
  Route, 
  // Link, 
  // useRouteMatch
} from 'react-router-dom'; 
import Container from 'react-bootstrap/Container'
import homePage from './components/Home/Mainhome'

function App() {
  return (
    <div>
    <Container className="mid-background">
      <br/>
      <div className="mainbody">
    <NavBar/>
    <div>
      <br/>
    <Router>
      <Switch>
      <Route path="/" component={homePage}/>  
        {/* <Route path="/about" component={About}/>
        <Route path="/" component={Home}/>  */}
      </Switch>
    </Router>
    
    </div>
    </div>
    </Container>
    </div>
  );
}

export default App;
