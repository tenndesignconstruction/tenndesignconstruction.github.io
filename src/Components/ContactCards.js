import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ContactCards extends React.Component {

   render() {
      return (
         <div className="card-group">
            <div className="card">
               <div className="card-body" id="contactCard">
                  <h4>TN Design & Construction</h4>
                  <p className="lead text-muted"><FontAwesomeIcon icon="map-marker-alt" /> 11550 Independent Hill Road<br />Arrington TN 37014</p>
                  <p className="text-muted"><FontAwesomeIcon icon="phone" />
                  <a href="tel:+1-615-487-6869" className="lead text-muted"> 615-487-6869</a>
                  </p>
                  <p className="lead text-muted"><FontAwesomeIcon icon="envelope" />
                     <a href="mailto:shawn@tndesignconstruction.com" target="_top" className="text-muted"> Send us an email</a>
                  </p>
               </div>
            </div>
            <div className="card">
            <div className="text-center">
               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253518.73874045405!2d-86.81377110188282!3d35.97900431539936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886388286738c943%3A0x9fe0c4bf24c0515c!2sArrington%2C%20TN%2037014!5e0!3m2!1sen!2sus!4v1578520613094!5m2!1sen!2sus" width="100%" height="450px" frameBorder="0"></iframe>
            </div>
            </div>
         </div>
      )
   }
}

export default ContactCards;
