import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function Contact() {
  // Consider adding a state variable to manage error handling for icons (optional)
  // const [iconErrors, setIconErrors] = useState([]);

  return (
    <section className="contact">
      <h2>Contáctame</h2> {/* Corrected typo: Contáctame (Spanish for "Contact Me") */}
      <p>Puedes contactarme a través de mi correo electrónico:</p>
      <p>evere@gmail.com</p>
      <p>Sigueme en mis redes sociales:</p>
      <div className="social-links">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="https://github.com/EverEGarcia" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        {/* Optional error handling (improve user experience if icons fail to load) */}
        {/* {iconErrors.length > 0 && (
          <p>Ha ocurrido un error al cargar algunos íconos de redes sociales.</p>
        )} */}
      </div>
    </section>
  );
}

export default Contact;