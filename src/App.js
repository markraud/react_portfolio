// import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Content from './components/Content';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return (
    // <Router>
    <div className="container">
      <Nav />
      <Content />
      {/* <Route path="/" component={About} />
        <Route path="/About" component={About} />
        <Route path="/Portfolio" component={Portfolio} />
        <Route path="/Contact" component={Contact} />
        <Route path="/Resume" component={Resume} /> */}
      <Footer />
    </div>
    // </Router>
  );
}

export default App;
