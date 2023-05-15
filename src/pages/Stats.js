import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Personal from '../components/Stats/Personal';
import Site from '../components/Stats/Site';
import Gradient from '../components/Template/Gradient';

const Stats = () => (
  <Main
    title="Stats"
    description="Some statistics about Caelan van Eijnsbergen and caelancodes.com"
  >
    <Gradient colors={['#43c6ac', '#191654']}/>
    <article className="post" id="stats">
      <header>
        <div className="title">
          <h2><Link to="/stats">Stats</Link></h2>
        </div>
      </header>
      <Personal />
      <Site />
    </article>
  </Main>
);

export default Stats;
