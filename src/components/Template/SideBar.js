import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/profilePicture.jpg`} alt="" />
      </Link>
      <header>
        <h2>Caelan van Eijnsbergen</h2>
        <p><a href="mailto:caelan.van.eijnsbergen@gmail.com">caelan.van.eijnsbergen@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Caelan. I am 21 years old and a 3rd year student at <a href="https://www.avans.nl/international">Avans University </a>
        and a Junior Software Developer at <a href="https://www.inbisco.nl/">Inbisco</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Caelan van Eijnsbergen <Link to="/">perunaz.github.io/portfolio/</Link>.</p>
    </section>
  </section>
);

export default SideBar;
