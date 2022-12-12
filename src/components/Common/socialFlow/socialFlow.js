import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./socialFlow.css";
import {
  faFacebook,
  faTwitter,
  faWhatsapp,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

export default function SocialFlow({facebook,twitter,instagram,mobile}) {
  return (
    <nav>
      <ul>
        <li>
          <a
            href={facebook}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i>
              <FontAwesomeIcon icon={faFacebook} className="icon" />
            </i>
          
          </a>
        </li>
        <li>
          <a
            href={twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i>
              <FontAwesomeIcon icon={faTwitter} className="icon" />
            </i>
            
          </a>
        </li>
        <li>
          <a
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i>
              <FontAwesomeIcon icon={faInstagram} className="icon" />
            </i>
            
          </a>
        </li>
        <li>
          <a
            href={`http://wa.me/${mobile}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i>
              <FontAwesomeIcon icon={faWhatsapp} className="icon" />
            </i>
            
          </a>
        </li>
      </ul>
    </nav>
  );
}
