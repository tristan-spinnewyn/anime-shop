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

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/contact"/>
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
