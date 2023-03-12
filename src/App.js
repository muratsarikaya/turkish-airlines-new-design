import React, {Suspense} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import SearchTabs from "./components/Search";
import Footer from './components/Footer';
import Brand from './components/Brand/index';

const Booker = React.lazy(()=> import("./components/Booker/index"));
const AdvantagesCarousel = React.lazy(()=> import("./components/AdvantagesCarousel"));

function App() {
  return (
    <div className="App">
        <Header/>
        <SearchTabs/>
        <Suspense fallback={<div>Loading...</div>}>
          <Booker/>
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <AdvantagesCarousel/>
        </Suspense>
        <Brand/>
        <Footer/>
        
    </div>
  );
}

export default App;
