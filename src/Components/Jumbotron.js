import React from 'react';
import './Jumbotron.css';

class Jumbotron extends React.Component {

   constructor(props) {
      super(props);
      this.sectionStyle = {
         backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.jumboImg})`,
         height: "75vh",
         backgroundPosition: "center",
         backgroundRepeat: "no-repeat",
         backgroundSize: "cover",
      }
   }

   render() {
      return (
         <div 
            id="jumbotron" 
            className="jumbotron jumbotron-fluid" 
            style={this.sectionStyle}
         >
            <div className="hero-text p-3">
               <h1 className="display-4">
                  <strong>Building Your Dream Space</strong>
               </h1>
               <p><strong>FROM CONCEPT TO COMPLETION</strong></p>
            </div>
         </div>
      )
   }
}

export default Jumbotron;
