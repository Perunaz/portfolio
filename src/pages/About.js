import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';

import Main from '../layouts/Main';
import Gradient from '../components/Template/Gradient';
import Badge from '../components/Template/Badge';

const About = () => {

  return (
    <Main
      title="About"
      description="Learn about Caelan van Eijnsbergen"
    >
      <Gradient colors={['#43c6ac', '#191654']}/>
      <article className="post markdown" id="about">
        <header>
          <div className="title">
            <h2><Link to="/about">About Me</Link></h2>
          </div>
        </header>
        <div>
          <h1>Intro</h1>
            <p>Hi, I am Caelan. I am 21 years old and a 3rd year student at Avans University and a Junior Software Developer at Inbisco.
              I am a driven and creative person that likes programming a lot.</p>
          <h1>I like</h1>
            <p className='bulletPoint'>Working out</p>
            <p className='bulletPoint'>Waterpolo</p>
            <p className='bulletPoint'>Swimming</p>
            <p className='bulletPoint'>Space</p>
            <p className='bulletPoint'>Music</p>
            <p className='bulletPoint'>Gaming</p>
            <p className='bulletPoint'>Traveling</p>
            <p className='bulletPoint'>Coding (of course)</p>
          <h1>Travel / Geography</h1>
            <p className='bulletPoint'>I am from The Netherlands.</p>
            <p className='bulletPoint'>Top 3 best trips I've made were to Thailand, Greece and Norway</p>
            <p className='bulletPoint'>I really want to travel to North America or Japan in the future.</p>
          <h1>Music genres I like</h1>
            <Badge color={'#FA3C4C'}>Hardcore</Badge>
            <Badge color={'#485861'}>Techno</Badge>
            <Badge color={'#FF8479'}>Phonk</Badge>
            <Badge color={'#43C6AC'}>Vaporwave</Badge>
            <Badge color={'#3CB9FA'}>Pop</Badge>
          <h1>Top 3 Games everyone should play</h1>
            <p className='bulletPoint'>Portal 2</p>
            <p className='bulletPoint'>Red Dead Redemption 2</p>
            <p className='bulletPoint'>God of War 4</p>
        </div>
      </article>
    </Main>
  );
};

export default About;
