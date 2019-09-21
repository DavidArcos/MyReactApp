import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
// import Person from './Person';
// import Users from './ui/Users/Users';
import Users from "./ui/Users/UsersFunctional";
import Home from "./ui/Home/Home";
import Nav from "./ui/Nav/Nav";
import About from "./ui/About/About";
import NotFound from "./ui/NotFound/NotFound";
import Gallery from "./ui/Gallery/Gallery";
import GalleryDetail from "./ui/Gallery/GalleryDetail";
// import Button from "./components/Button/Button";

const App = () => {
  // const [ showImg, setShowImg ] = useState(false);
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/gallery" exact component={Gallery} />
          <Route path="/gallery/:id/:autor" component={GalleryDetail} />
          <Route path="/users" component={Users} />
          <Route path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
