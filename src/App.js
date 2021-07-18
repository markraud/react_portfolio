import './App.css';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        {/* <Portfolio projects={projects} /> */}
        <Route exact path="/" component={About} />
        <Route exact path="/react_portfolio" component={About} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Portfolio" component={Portfolio} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/Resume" component={Resume} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
