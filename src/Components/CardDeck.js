import React from 'react';
import './CardDeck.css';
import { Animated } from "react-animated-css";

class CardDeck extends React.Component {

   render() {
      return (
         <div className="pt-4">
            <div className="card-deck">
               <div className="card border-0" id="card1">
                  <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDuration={800} animationOutDuration={800} isVisible={true}>
                     <img src="img/indoor/kitchen.jpeg" className="card-img-top" alt="Custom kitchen" />
                  </Animated>
                  <div className="card-body">
                     <h5 className="card-title">Indoor</h5>
                     <p className="card-text">Fugiat nostrud veniam id nulla commodo ipsum laboris dolor ullamco. Fugiat laborum nostrud aliquip cupidatat amet quis veniam in esse excepteur.</p>
                     <a
                        className="btn btn-sm btn-outline-primary"
                        data-toggle="modal"
                        data-target=".bd-indoor-modal-lg"
                     >
                        View More
                     </a>
                  </div>
               </div>
               <div className="card border-0">
                  <img src="img/outdoor/IMG_2782.jpg" className="card-img-top" alt="Custom landscaping with putting green" />
                  <div className="card-body">
                     <h5 className="card-title">Outdoor</h5>
                     <p className="card-text">Velit in cupidatat consectetur labore voluptate in duis nostrud Lorem fugiat commodo dolor. Aute minim et irure ipsum.</p>
                     <a
                        className="btn btn-sm btn-outline-primary"
                        data-toggle="modal"
                        data-target=".bd-outdoor-modal-lg"
                     >
                        View More
                     </a>
                  </div>
               </div>
               <div className="card border-0">
                  <img src="img/blended/blend.jpeg" className="card-img-top" alt="Outdoor living room amongst the trees" />
                  <div className="card-body">
                     <h5 className="card-title">Blended</h5>
                     <p className="card-text">Eiusmod mollit duis aute aliqua elit sint irure nulla esse aute occaecat aute incididunt ex. Cillum esse ullamco velit sint sint aliqua culpa magna in velit sit laboris.</p>
                     <a
                        className="btn btn-sm btn-outline-primary"
                        data-toggle="modal"
                        data-target=".bd-blended-modal-lg"
                     >
                        View More
                     </a>
                  </div>
               </div>
            </div>

            {/* Indoor Modal */}
            <div className="modal fade bd-indoor-modal-lg vh-100" tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
               <div className="modal-dialog modal-lg" role="document">
                  <div className="modal-header">
                     <h5 className="modal-title text-white">Indoor</h5>
                     <button type="button" className="close text-white" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                     </button>
                  </div>

                  <div class="modal-content">

                     <div id="indoorCarousel" className="carousel slide" data-interval="false" data-ride="carousel">
                        <ol className="carousel-indicators">
                           <li data-target="#indoorCarousel" data-slide-to="0" className="active"></li>
                           <li data-target="#indoorCarousel" data-slide-to="1"></li>
                           <li data-target="#indoorCarousel" data-slide-to="2"></li>
                           <li data-target="#indoorCarousel" data-slide-to="3"></li>
                        </ol>
                        <div className="carousel-inner">
                           <div className="carousel-item active">
                              <img src="img/indoor/IMG_6885.JPG" className="d-block w-100 img-thumbnail" alt="Custom kitchen" />
                           </div>
                           <div className="carousel-item">
                              <img src="img/indoor/IMG_6886.JPG" className="d-block w-100 img-thumbnail" alt="Custom stairway " />
                           </div>
                           <div className="carousel-item">
                              <img src="img/indoor/IMG_1023.JPG" className="d-block w-100 img-thumbnail" alt="ceiling accent" />
                           </div>
                           <div className="carousel-item">
                              <img src="img/indoor/IMG_7458.JPG" className="d-block w-100 img-thumbnail" alt="ceiling accent" />
                           </div>
                        </div>
                        <a className="carousel-control-prev" href="#indoorCarousel" role="button" data-slide="prev">
                           <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                           <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#indoorCarousel" role="button" data-slide="next">
                           <span className="carousel-control-next-icon" aria-hidden="true"></span>
                           <span className="sr-only">Next</span>
                        </a>
                     </div>
                  </div>
               </div>
            </div>

            {/* Outdoor Modal */}
            <div className="modal fade bd-outdoor-modal-lg vh-100" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
               <div className="modal-dialog modal-lg" role="document">
                  <div className="modal-header">
                     <h5 className="modal-title text-white">Outdoor</h5>
                     <button type="button" className="close text-white" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                     </button>
                  </div>

                  <div class="modal-content">

                     <div id="outdoorCarousel" className="carousel slide" data-interval="false" data-ride="carousel">
                        <ol className="carousel-indicators">
                           <li data-target="#outdoorCarousel" data-slide-to="0" className="active"></li>
                        </ol>
                        <div className="carousel-inner">
                           <div className="carousel-item active">
                              <img src="img/outdoor/IMG_2782.JPG" className="d-block w-100 img-thumbnail" alt="Rock wall with putting green" />
                           </div>
                        </div>
                        <a className="carousel-control-prev" href="#outdoorCarousel" role="button" data-slide="prev">
                           <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                           <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#outdoorCarousel" role="button" data-slide="next">
                           <span className="carousel-control-next-icon" aria-hidden="true"></span>
                           <span className="sr-only">Next</span>
                        </a>
                     </div>
                  </div>
               </div>
            </div>

            {/* Blended Modal */}
            <div className="modal fade bd-blended-modal-lg vh-100" tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
               <div className="modal-dialog modal-lg" role="document">
                  <div className="modal-header">
                     <h5 className="modal-title text-white">Blended</h5>
                     <button type="button" className="close text-white" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                     </button>
                  </div>

                  <div class="modal-content">

                     <div id="blendedCarousel" className="carousel slide" data-interval="false" data-ride="carousel">
                        <ol className="carousel-indicators">
                           <li data-target="#blendedCarousel" data-slide-to="0" className="active"></li>
                           <li data-target="#blendedCarousel" data-slide-to="1"></li>
                           <li data-target="#blendedCarousel" data-slide-to="2"></li>
                           <li data-target="#blendedCarousel" data-slide-to="3"></li>
                           <li data-target="#blendedCarousel" data-slide-to="4"></li>
                           <li data-target="#blendedCarousel" data-slide-to="5"></li>
                        </ol>
                        <div className="carousel-inner">
                           <div className="carousel-item active">
                              <img src="img/blended/IMG_2791.JPG" className="d-block w-100 img-thumbnail" alt="Custom kitchen" />
                           </div>
                           <div className="carousel-item">
                              <img src="img/blended/IMG_3856.JPG" className="d-block w-100 img-thumbnail" alt="Custom kitchen" />
                           </div>
                           <div className="carousel-item">
                              <img src="img/blended/IMG_3857.JPG" className="d-block w-100 img-thumbnail" alt="Custom kitchen" />
                           </div>
                           <div className="carousel-item">
                              <img src="img/blended/IMG_6072.JPG" className="d-block w-100 img-thumbnail" alt="Custom kitchen" />
                           </div>
                           <div className="carousel-item">
                              <img src="img/blended/IMG_7408.JPG" className="d-block w-100 img-thumbnail" alt="Custom kitchen" />
                           </div>
                           <div className="carousel-item">
                              <img src="img/blended/IMG_7409.JPG" className="d-block w-100 img-thumbnail" alt="Custom kitchen" />
                           </div>
                        </div>
                        <a className="carousel-control-prev" href="#blendedCarousel" role="button" data-slide="prev">
                           <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                           <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#blendedCarousel" role="button" data-slide="next">
                           <span className="carousel-control-next-icon" aria-hidden="true"></span>
                           <span className="sr-only">Next</span>
                        </a>
                     </div>
                  </div>
               </div>
            </div>

         </div>
      )
   }
}

export default CardDeck;
