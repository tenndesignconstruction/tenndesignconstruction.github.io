import React from 'react';

class About extends React.Component {

   render() {
      return (
         <div className="container">
            <div className="row no-gutters position-relative" id="about">
               <div className="col-md-6 mb-md-0 p-md-4">
                  <figure>
                     <img src="matt_and_shawn.jpg" className="w-100 rounded" alt="Matt and Shawn" />
                     {/* <figcaption className="text-center">Matt, with daughters Morgan and Mallory.</figcaption> */}
                  </figure>
               </div>
               <div className="col-md-6 position-static p-4 pl-md-0">
                  <p className="card-text lead">
                     TN Design and Construction is a full-service general contractor, dedicated to bringing beautiful and unique construction ideas into reality.<br/>
                     Shawn Thweatt-Neal and Matthew Neal colloborate to create each project, with Shawn serving as lead designer and Matt managing the construction process.<br/><br/>
                     Together they bring years of experience to their work, and are dedicated to providing their clients with the highest-quality experience from concept to completion.<br/><br/>
                     For inquiries, bidding, or proposal requests, contact Shawn Thweatt-Neal at <a href="mailto:shawn@tndesignconstruction.com" target="_top" className="text-muted"><small>shawn@tndesignconstruction.com</small></a>
               </p>
               </div>
            </div>
         </div>
      )
   }
}

export default About;
