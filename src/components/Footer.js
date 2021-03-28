import React from 'react';
import { Link } from 'react-router-dom';


class Footer extends React.Component{


    render() {
        return (
 
            <footer class="footer-distributed">
			<div class="footer-left">
		     	<h3>Company<span>logo</span></h3>
				<p class="footer-links">
                <ul class="nobull">
                       <li><Link to="/" class="link-1">Home</Link></li>
                        <li><Link to="/about" class="link-1">About</Link></li>
                        <li><Link to="/listing" class="link-1">Products</Link></li>			
                        <li><Link to="/faq" class="link-1">FAQ</Link></li>
                        <li><Link to="/#" class="link-1">Contact us</Link></li>
                    </ul>		
				</p>
				<p class="footer-company-name">Company Name © 2021</p>
			    </div>
			   <div class="footer-center">
				<div>
					<i class="fa fa-map-marker"></i>
					<p><span>444 S. Cedros Ave</span> Solana Beach, California</p>
				</div>
				<div>
					<i class="fa fa-phone"></i>
					<p>+1.555.555.5555</p>
				</div>
				<div>
					<i class="fa fa-envelope"></i>
					<p><Link to="mailto:support@company.com">support@company.com</Link></p>
				</div>
			</div>
			<div class="footer-right">
				<p class="footer-company-about">
					<span>About the company</span>
					Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
				</p>
			</div>
		</footer>
    
        )
    }

}

export default Footer;
