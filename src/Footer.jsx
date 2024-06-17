import React from 'react'
import svasthkart from './images/svasthkart_logo.png'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import './Footer.css';
function Footer() {
  return (
    <>
    <footer>
        <div className="contact">
            <div className="contact-info footercontact">
                <div className='img-address'>
                <img src={svasthkart} alt=''/>
                <div className="address">
                <p>Own By DR SUMITS REHAB CENTRE First Floor, Krishna Avenue</p>
                <p>Above Dominos, Opposite D MART
                Near Sadanand, Hotel Baner Road, Baner, Pin Code 411045, Pune, Maharashtra</p>
                </div>
                </div>
                
                <div className="phone-mail">
                    <p>Call us: 095827-92638</p>
                    <p>Email: support@svasthkart.com</p>
                </div>
                <ul className='footer-icons'>
                    <li><FacebookOutlinedIcon className='footrt-icon'/></li>
                    <li><InstagramIcon className='footrt-icon'/></li>
                    <li><PinterestIcon className='footrt-icon'/></li>
                </ul>
               

            </div>
            <div className="categories footercontact footerlist">
                <span className='foot-head-cat'><h3>CATEGORIES</h3><span className='plus'>+</span></span> 
                <ul>
                    <li><a href="./">Home</a></li>
                    <li><a href="./">Home Care</a></li>
                    <li><a href="./">Daily Care</a></li>
                    <li><a href="./">Personal Care</a></li>
                    <li><a href="./">Health Care</a></li>
                </ul>
            </div>
            <div className="customer-policy footercontact footerlist">
               <span className='foot-head-cus'><h3>CUSTOMER POLICY</h3><span className='plus'>+</span></span> 
                <ul>
                    <li><a href="./">About Us</a></li>
                    <li><a href="./">Privacy Policy</a></li>
                    <li><a href="./">Return & Cancellation Policy</a></li>
                    <li><a href="./">Shipping And Delivery</a></li>
                    <li><a href="./">Terms & Conditions</a></li>
                    <li><a href="./">Contact Us</a></li>
                </ul>
            </div>

        </div>
        <div className="sign-up">
            <h3>NEWSLETTER SIGN UP</h3>
            <p>Receive our latest updates about our products and promotions.</p>
            <div className="form-submit">
            <input type="text" placeholder='enter your email address '/>
            <button className='footer-btn'>SUBMIT</button>
            </div>
            

        </div>
    </footer>
    <div className="footer-end">
        <p>@2022 Copyright Svasthkart By SMAC Digital Pvt. Ltd.</p>
    </div>
    </>
  )
}

export default Footer
