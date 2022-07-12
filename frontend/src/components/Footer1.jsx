import './Footer.css';

const Footer = ({show, click}) => {
  return (
    <footer>
	<div className="content">
		<div className="top">
		</div>
		<div className="link-boxes">
			<ul className="box">
				<li className="link_name">Links</li>
				<li><a href="/">Home</a></li>
				<li><a href="/">Get Frulu</a></li>
				<li><a href="/">About Us</a></li>
			</ul>
			<ul className="box">
				<li className="link_name">FAQ's</li>
				<li><a href="/">Why Frulu?</a></li>
				<li><a href="/">Where to puchase?</a></li>
				<li><a href="/">Who made the site?</a></li>
			
			</ul>
	<ul className="box">
				<li className="link_name">Other Services</li>
				<li><a href="/">Content Marketing</a></li>
				<li><a href="/">Prints</a></li>
				<li><a href="/">Social Media</a></li>
			
			</ul>
			<ul className="box">
				<li className="link_name">Contact</li>
				<li><a href="/">+64 225 600 278</a></li>
				<li><a href="/">+64 354 989 666</a></li>
				<li><a href="/">contact@frulu.com</a></li>
				
			
			</ul>
			
	
	
	
		</div>
	</div>
	    <div className="bottom-details">
      <div className="bottom_text">
        <span className="copyright_text">© 2022 <a href="/">Frulu Aotearoa</a></span>
        <span>
          <div className="media-icons">
				<a href="/"><i class="fa-brands fa-facebook"></i></a>
				<a href="/"><i class="fa-brands fa-twitter"></i></a>
				<a href="/"><i class="fa-brands fa-instagram"></i></a>
				<a href="/"><i class="fa-brands fa-linkedin"></i></a>
				<a href="/"><i class="fa-brands fa-youtube"></i></a>
        </div>
        </span>
        <span className="policy_terms">
          <a href="/">Privacy policy</a>
          
        </span>
      </div>
    </div>
</footer>
)}

export default Footer;