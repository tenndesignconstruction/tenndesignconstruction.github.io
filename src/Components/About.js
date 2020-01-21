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
                     Founded by Shawn Thweatt-Neal, TN Design and Construction is a full-service general contractor, dedicated to bringing beautiful and unique construction ideas into reality.<br/>
                     Shawn is the lead designer and brings years of experience to her work. Her husband Matt handles the construction side of things.<br/><br/>
                     For bidding or proposal requests, contact Matt Neal at <a href="mailto:mwnealtenn@gmail.com" target="_top" className="text-muted">mwnealtenn@gmail.com</a><br/><br/>
                     Irure eiusmod nulla adipisicing minim amet nisi non ut. Velit occaecat tempor dolor esse eiusmod consequat ea. Pariatur cillum proident id fugiat mollit dolor occaecat cillum ullamco exercitation aute. Culpa eu reprehenderit exercitation adipisicing irure occaecat pariatur ut est ea ut.
               </p>
               </div>
            </div>
         </div>
      )
   }
}

export default About;
