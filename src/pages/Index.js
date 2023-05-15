import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import Gradient from '../components/Template/Gradient';

const Index = () => (
  <Main
    description={"Caelan van Eijnsbergens personal website. From Sliedrecht studying in Breda at Avans University, "
    + 'Junior Software Developer at Inbisco'}
  >
    <Gradient colors={['#43c6ac', '#191654']}/>
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">About this site</Link></h2>
          <p>
            This is a portfolio showing my skills, projects,
            education and experience in te field of IT
          </p>
        </div>
      </header>
      <p> Welcome to my website. Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        view <Link to="/stats">site statistics</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
    </article>
  </Main>
);

export default Index;
