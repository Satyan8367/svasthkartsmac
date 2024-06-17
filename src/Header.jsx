import React from 'react';
import svasth_logo from './images/svasthkart_logo.png';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';




const Header=(props)=>{


    return(
        <>
        
      
        <header >
            <div className='menu-logo'>
            <MenuTwoToneIcon className='icon menu responsive'/>
        <img src={svasth_logo} alt='logo'/>
            </div>

            
        
        <ul className='nav-items'>
            <li className='home-care drop'><a href='./'>HOME CARE </a>

            <ul className='in-homecare drop-item'>
            <li className='kitchen-care' ><a href="./">Kitchen Care <KeyboardArrowRightIcon className='arrow-icon'/></a>
            <ul className='in-kitchencare drop-item'><li><a href="./">Organic spices</a></li>
            <li><a href="./">Organic Whole spices</a></li>
            <li><a href="./">Organic Tea</a></li>
            <li><a href="./">Organic Honey</a></li>
            </ul>
            
            </li>
            <li><a href="./">Cleaning Care</a></li>
            <li><a href="./">Garden Care</a></li>
            </ul>
            </li>

            <li className='daily-care'><a href='./'>DAILY CARE</a>
            <ul className='in-dailycare drop-item'>
            <li><a href="./">Family Care</a></li>
            <li><a href="./">Athlete Care</a></li>
            </ul>
            </li>
            <li className='personal-care'><a href='./'>PERSONAL CARE</a>
            <ul className='in-personalcare drop-item'>
            <li><a href="./">Bath & Body</a></li>
            <li><a href="./">Women's Care</a></li>
            <li><a href="./">Men's Care</a></li>
            <li><a href="./">Hair Care</a></li>
            <li><a href="./">Face Creams</a></li>
            <li><a href="./">Dental Care</a></li>
            <li><a href="./">pain Relief</a></li>
            </ul>
            </li>
            <li className='health-care'><a href='./'>HEALTH CARE</a>
            <ul className='in-healthcare drop-item'>
            <li><a href="./">Herbal Tablets</a></li>
            <li><a href="./">Herbal Drops</a></li>
            <li><a href="./">Herbal Syrup</a></li>
            <li><a href="./">Herbal Ointment</a></li>
            <li><a href="./">Herbal Chawanprash</a></li>
            
            </ul>
            </li>
        </ul>
        <div className='header-icons'>
        
        <SearchIcon className='icon'/>
        
        <FavoriteBorderIcon className='icon favorate'/>
        <div className="cart">
        <ShoppingCartOutlinedIcon className='icon'/>
        <span className='cart-no'>{props.value}</span>
        </div>
        
        <MenuTwoToneIcon className='icon menu'/>


        </div>
        </header>
        
        
        </>

    );

}
export default Header;