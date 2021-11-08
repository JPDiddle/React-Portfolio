import React from 'react';

export default function Nav() {
  const linkStyle = { border: '1px black', padding: '5px' };

  return (
<nav class="navbar navbar-expand-lg navbar-light bg-light-500 .fs-2 text">
        <div class="container-fluid">
          <div class="fs-3">John Price Portfolio</div>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse d-flex justify-content-end fs-3" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="#section-1">About Me</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#section-2">Work</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#section-3">Contact Me</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#section-4">Resume</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>)}