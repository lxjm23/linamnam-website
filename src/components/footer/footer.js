import "./footer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faEnvelope} from "@fortawesome/free-regular-svg-icons"
import { faFacebook, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons"

const Footer = () =>{
  return(
    <div className="footer">
    
      <div className="footer-contacts">
      <a href="mailto:linamnamlutongbahaydelights@gmail.com">
      <FontAwesomeIcon className="icon" icon={faEnvelope} size="2xl" />
      <p> linamnamlutongbahaydelights@gmail.com </p>
      </a>
      </div>

      <div className="footer-contacts">
      <a href="https://www.facebook.com/profile.php?id=61557410424415" target="_blank">
      <FontAwesomeIcon className="icon" icon={faFacebook}  size="2xl"/>
      <p>Linamnam - Lutong Bahay Delights</p>
      </a>
      </div>

      <div className="footer-contacts">
      <a href="https://www.instagram.com/linamnam_lutongbahay/" target="_blank">
      <FontAwesomeIcon className="icon" icon={faInstagram} size="2xl" />
      <p> @Linamnam_LutongBahay</p>
      </a>
      </div>


      <div className="footer-contacts">
      
      <a href="https://wa.me/12899903971" target="_blank">
      <FontAwesomeIcon className="icon" icon={faWhatsapp} size="2xl"/>
      <p> Message on Whatsapp</p>
      </a>
      </div>
    </div>
    
  )
}

export default Footer