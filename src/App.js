import logo from './logo.svg';
import './App.css';
import Header from './component/header/header'
import Footer from './component/footer/footer'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Contact from './pages/contact';

function App() {
  return (
    <>
      <Router>
        <Header />
        <div className="container-fluid min-vh-75">
          <Switch>
            <Route path="/contact" component={Contact}/>
          </Switch>
        </div>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
