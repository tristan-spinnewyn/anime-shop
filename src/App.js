import './App.css';
import Header from './component/header/header'
import Footer from './component/footer/footer'
import About from './pages/about'
import Produit from './pages/produit'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Contact from './pages/contact';
import Produits from './pages/produits';
import React, { useState } from 'react';
import { nbArticles } from './services/panier';
import Panier from './pages/panier';
import Infos from './pages/infos';
import Paiement from './pages/paiement'
import Merci from './pages/merci'
import Home from './pages/home';

export const CardContext = React.createContext({
  nbArticle: 0,
})

function App() {

  const [card, setcards] = useState(nbArticles())
  const contextValue = {
    nbArticle: card,
    setNbArticle: setcards,
  }
  return (
    <>
    <CardContext.Provider value={contextValue}>
      <Router>
        <Header />
        <div className="container-fluid min-vh-75">
          <Switch>
            <Route path="/contact" component={Contact}/>
            <Route path="/about" component={About}/>
            <Route path="/film/:style" component={(props)=> <Produits category="Film" style={props.match.params.style} />}/>
            <Route path="/film" component={()=> <Produits category="Film" />} />
            <Route path="/serie/:style" component={(props)=> <Produits category="Série TV" style={props.match.params.style} />}/>
            <Route path="/serie" component={()=><Produits category="Série TV"/>} />
            <Route path="/manga/:style" component={(props)=> <Produits category="Manga" style={props.match.params.style} />}/>
            <Route path="/manga" component={()=><Produits category="Manga"/>} />
            <Route path="/produit/:id" component={(props)=> <Produit id={props.match.params.id} />}/>
            <Route path="/panier" component={Panier}/>
            <Route path="/infos" component={Infos}/>
            <Route path="/paiement" component={Paiement}/>
            <Route path="/confirmation" component={Merci}/>
            <Route path="/" component={Home}/>
          </Switch>
        </div>
        <Footer/>
      </Router>
      </CardContext.Provider>
    </>
  );
}

export default App;
