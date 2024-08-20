import { useState, useEffect } from 'react';
// Bringing in the required component from 'react-router-dom' for linking between pages and getting the current param variable's value from URL
import {  } from 'react-router-dom';

import API from '../utils/API';

export default function ResumePage() {
    return (
        <section className="features-icons bg-light text-center m-4">
          <div className='container'>
            <div className='row p-2'>
              <p>Download my Resume <a href='https://www.linkedin.com/in/karen-gutierrez-749792150/'>from linkedIn</a></p>
              <h3>Software Proficiencies</h3>
              <ul>
                <li>Autodesk Maya</li>
                <li>Zbrush</li>
                <li>Substance Painter</li>
                <li>Adobe Photoshop</li>
              </ul>
              <h3>General 3D skills</h3>
              <ul>
                <li>3D Animation</li>
                <li>3D Polymodeling</li>
                <li>3D Sculpting</li>
              </ul>
            </div>
          </div>
        </section>
      );
}
