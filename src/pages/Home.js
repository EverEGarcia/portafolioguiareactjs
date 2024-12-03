import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function Home() {
  return (
    <section className="home">
      <h1>Soy Ever Esli</h1>
      <p>Soy un desarrollador apasionado por construir soluciones modernas, eficientes y escalables. Mi experiencia se centra en el desarrollo backend, utilizando tecnologías como PHP, Java y Python, con un sólido manejo de bases de datos MySQL, PostgreSQL y MariaDB.</p>
      <div className="social-links">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="https://github.com/EverEGarcia" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </div>
    </section>
  );
}

export default Home;