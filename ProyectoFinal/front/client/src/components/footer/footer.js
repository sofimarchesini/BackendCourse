import React from 'react';
import './footer.css';


function Footer(){
    return (
        <footer>
    <div class="container-fluid">
      <div class="row py-2">
        <div class="col-lg-4 brand-description">
          <a class="footer-title-link" href="#"><h1 className='title-footer'>ZAIN</h1></a>
          <p class="text-description">The best Page to learn about finance</p>
           
        </div>
      </div> 
      <div class="subfooter row">
        <div class="col-9">
          <p class="footer-text">
            © ZAIN
          </p>
        </div>
        <div class="country-text col-3">
          <p class="footer-text">UNITED STATES</p>
        </div>
      </div>
    </div>
  </footer>

    )
}
    
export default Footer;