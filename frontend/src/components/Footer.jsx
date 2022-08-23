import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Form from './Form'
import './Footer.css';


const Footer = ({show, click}) => {
  return (
    <footer className="footer-distributed">
      <div className="footer-left">

				<h3>Frulu<span>Store</span><span className="symbol">®</span></h3>

				<p className="footer-links">

				</p>

				<p className="footer-company-name">Frulu Aotearoa © 2022</p>

				<div className="footer-icons">
					<a href="https://medium.com/@halmaimcrae"><FontAwesomeIcon icon="fa-brands fa-medium" /></a>
					<a href="/"><FontAwesomeIcon icon="fa-brands fa-twitter" /></a>
					<a href="https://www.linkedin.com/in/halmai-mcrae/"><FontAwesomeIcon icon="fa-brands fa-linkedin" /></a>
					<a href="https://github.com/halmai-mcrae"><FontAwesomeIcon icon="fa-brands fa-github" /></a>
          </div>
	</div>

			<div className="footer-right">
				<p>Go on. Get in touch.</p>
        <Form />
			</div>

		</footer>

)}

export default Footer;