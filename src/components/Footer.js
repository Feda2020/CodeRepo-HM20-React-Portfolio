import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Contact List</h2>
            <ul class='footer-link-items'>
              <li>Email</li>
              <h3>fido311@gmail.com</h3>
              <li>Phone</li>
              <h4>210-837-7450</h4>
            </ul>
          </div>
        </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Feda
              <i class='fas fa-pencil-ruler' />
            </Link>
          </div>
          <small class='website-rights'>Feda © 2020</small>
          <div class='social-icons'>
            <a
              class='social-icon-link facebook'
              href="https://www.facebook.com/fedoo311"
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </a>
            <a
              class='social-icon-link instagram'
              href="https://www.instagram.com/fedoo311"
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </a>
            <a
              class='social-icon-link github'
              href="https://github.com/Feda2020"
              aria-label='github'
            >
              <i class='fab fa-github' />
            </a>
            <a
              class='social-icon-link twitter'
              href="https://twitter.com/fedoo2311"
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </a>
            <a
              class='social-icon-link twitter'
              href="https://www.linkedin.com/in/feda-zidan-72923a2b"
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </a>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}

export default Footer;
