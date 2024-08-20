import { useState, useEffect } from 'react';
// Bringing in the required component from 'react-router-dom' for linking between pages
import { Link } from 'react-router-dom';
import Profile from '../components/UI/ProfileSections/ProfileTeaser';
import ListItem from '../components/UI/ListItem';

import API from '../utils/API';

export default function HomePage() {
  return (
    <section className="features-icons bg-light text-center m-4">
      <div className='container'>
        <div className='row p-2'>
          <div class="embed-responsive embed-responsive-16by9">
            <iframe class="embed-responsive-item" src="https://pbs.twimg.com/media/FOzquG2X0AQuSG0?format=jpg&name=medium"></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
