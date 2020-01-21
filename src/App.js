import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import './App.css';
import Navbar from './Components/Navbar.js';
import Jumbotron from './Components/Jumbotron.js';
import CardDeck from './Components/CardDeck.js';
import ContactCards from './Components/ContactCards.js';
import About from './Components/About.js';

library.add(fab, faPhone, faEnvelope, faMapMarkerAlt);

class App extends React.Component {

  render() {
    return (
      <>
        <div className="container p-2">
          <Navbar />
        </div>
        {/* <Jumbotron jumboImg="IMG_6885.jpg" /> */}
        <Jumbotron jumboImg="IMG_2791.jpg" />
        <div className="container p-2">
          <hr id="what-we-do" />
          <h2 className="text-center text-muted p-3">
            <strong>TN Design & Construction</strong>, conveniently located south of Nashville, creates tailored residential and commercial construction projects, from renovations to new buildings.
          </h2>
          <hr />
          <CardDeck />
          <hr id="about" />
          <h1 className="text-center text-muted p-3">
            About Us
          </h1>
          <hr />
          <About />
          <hr id="contact" />
          <h1 className="text-center text-muted p-3">
            Let's Work Together
          </h1>
          <hr />
          <ContactCards />
          <hr />
        </div>
      </>
    )
  }
}

export default App;
