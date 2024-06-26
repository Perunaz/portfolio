import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import EmailLink from '../components/Contact/EmailLink';
import ContactIcons from '../components/Contact/ContactIcons';
import Gradient from '../components/Template/Gradient';

const Contact = () => (
  <Main
    title="Contact"
    description="Contact Caelan van Eijnsbergen via email @ caelan.van.eijnsbergen@gmail.com"
  >
    <Gradient colors={['#43c6ac', '#191654']}/>
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2><Link to="/contact">Contact</Link></h2>
        </div>
      </header>
      <div className="email-at">
        <p>Feel free to get in touch. You can email me at: </p>
        <EmailLink />
      </div>
      <ContactIcons />
    </article>
  </Main>
);

export default Contact;
