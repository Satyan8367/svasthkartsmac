import React from 'react';
import './Benefititems.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import Benefititem from './Benefititem';
import benefitimg1 from './images/benefits-img1.webp';
import benefitimg2 from './images/benefits-img2.webp';
import benefitimg3 from './images/benefits-img3.webp';
import benefitimg4 from './images/benefits-img4.webp';
import benefitimg5 from './images/benefits-img5.webp';

function Benefititems() {
  return (
    <>
        <div className="benefit-head">
      <h2><InstagramIcon/>SavasthKart On Instagram</h2>
        <p>Explore Benefits of Exclusive Range of Handpicked Herbal Products</p>
      </div>
    <div className="benefits-container">
      
     

        
        <div className="benefits-items">
            <Benefititem benefitimg={benefitimg1}/>
            <Benefititem benefitimg={benefitimg2}/>
            <Benefititem benefitimg={benefitimg3}/>
            <Benefititem benefitimg={benefitimg4}/>
            <Benefititem benefitimg={benefitimg5}/>

        </div>

    </div>
    
    </>
  )
}

export default Benefititems
