import Headroom from "react-headroom";
import { useState } from "react";
import "./App.css";
import Header from "./Header";
import Products from "./Products";
import Herosection from "./Herosection";
import Trendingproducts from "./Trendingproducts";
import Organicproduct from "./Organicproduct";
import Benefititems from "./Benefititems";
import Footer from "./Footer";
import RestoreIcon from '@mui/icons-material/Restore';
import ShareIcon from '@mui/icons-material/Share';
import NorthIcon from '@mui/icons-material/North'; 
import Alert from 'react-bootstrap/Alert'; 
function App() {
  const scrollToTop=()=>{
    window.scroll({
      top: 0, 
      left: 0, 
      behavior: 'smooth'
      
    });
  }

  const [value,setValue]=useState(0)

    const addToCart=()=>{
        setValue(value+1)

    }


  return (
    <>
    <Alert key='primary' variant='primary' id="msg">
    Cash On Delivery & Free Shipping For orders Rs.500+ Shop Now
        </Alert>
      <div className="side-menu">
        <ul>
          <li><RestoreIcon/></li>
          <li><ShareIcon/> </li>
          <li onClick={scrollToTop}><NorthIcon/></li>
        </ul>
      </div>

      <Headroom >
        <Header value={value} />
      </Headroom>
      <Herosection />

      <Products />
      <Trendingproducts fun={addToCart} />
      <Organicproduct />

      <Benefititems />

      <Footer />
    </>
  );
}

export default App;
