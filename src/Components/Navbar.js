import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Navbar extends React.Component {

   render() {
      return (
         <header>
            <nav className="navbar navbar-expand-md navbar-light pt-1 pb-1">
                  <a className="navbar-brand" href="#">
                     <img src="TNLogo_small25.png" alt="TN Design and Construction Logo" />
                  </a>

               {/* Toggler/collapsibe Button */}
               <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar" aria-controls="collapsibleNavbar" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
               </button>

               <div className="collapse navbar-collapse" id="collapsibleNavbar">
                  <a
                     href="#what-we-do"
                     className="btn text-nowrap text-muted pr-1 nav-link ml-auto"
                     alt="What We Do"
                     title="What We Do"
                  >
                     What We Do
                        </a>
                  <a
                     href="#about"
                     className="btn text-muted pr-1 nav-link"
                     alt="About"
                     title="About"
                  >
                     About
                        </a>
                  <a
                     href="#contact"
                     className="btn text-muted pr-1 nav-link"
                     alt="Contact"
                     title="Contact"
                  >
                     Contact
                        </a>
                  <a
                     href="https://www.instagram.com/tndesignandconstruction/"
                     target="_blank"
                     className="btn text-muted nav-link"
                     alt="Instagram"
                     title="Instagram"
                  >
                     <FontAwesomeIcon icon={['fab', 'instagram']} size="3x" />
                  </a>
               </div>
            </nav>
         </header>
      )
   }
}

export default Navbar;
