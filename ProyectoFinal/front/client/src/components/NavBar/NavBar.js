
import React from 'react';
import './NavBar.css';
import CartWidget from '../Cart/CartWidget';
import {Link} from 'react-router-dom';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return(
        <header>
          <div className="container-fluid">
            <div className="row">
              <div className="col-1 header-title ">
                <Link to= '/'  style={{ textDecoration: 'none' ,color: 'black'}}>
                    <h1 className='header-title-link'>ZAIN</h1>
                </Link>
                </div>
              <div  className="col-9">
                <nav>
                  <ul>
                    <li><Link to= '/'>HOME</Link></li>
                    <li><Link to='/About' >ABOUT</Link></li>
                    <li><Link to='/About' >CATEGORY</Link></li>
                    <li><Link to='/About' >CONTACT</Link></li>
                  </ul>
                </nav>
              </div>
              <div  className="col-1">
                <NavLink to="/IniciarSesion" exact>
                    <div ><i className="icon-header fas fa-shopping-bag"><FontAwesomeIcon icon={faUserAlt} /></i></div>
                </NavLink>    
              </div>
              <div  className="col-1">
                <CartWidget/>
              </div>
            </div>
          </div>
        </header>
    )
  }


export default NavBar;