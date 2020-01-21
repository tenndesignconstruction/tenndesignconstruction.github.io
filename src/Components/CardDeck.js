import React from 'react';
import './CardDeck.css';
import {Animated} from "react-animated-css";

class CardDeck extends React.Component {

   render() {
      return (
         <div className="pt-4">
            <div className="card-deck">
               <div className="card border-0" id="card1">
               <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDuration={800} animationOutDuration={800} isVisible={true}>
                  <img src="IMG_6885.JPG" className="card-img-top" alt="Custom staircase" />
               </Animated>
                  <div className="card-body">
                     <h5 className="card-title">Indoor</h5>
                     <p className="card-text">Fugiat nostrud veniam id nulla commodo ipsum laboris dolor ullamco. Fugiat laborum nostrud aliquip cupidatat amet quis veniam in esse excepteur.</p>
                     <p className="card-text"><small className="text-muted">View More</small></p>
                  </div>
               </div>
               <div className="card border-0">
                  <img src="IMG_2782.jpg" className="card-img-top" alt="Custom landscaping with putting green" />
                  <div className="card-body">
                     <h5 className="card-title">Outdoor</h5>
                     <p className="card-text">Velit in cupidatat consectetur labore voluptate in duis nostrud Lorem fugiat commodo dolor. Aute minim et irure ipsum.</p>
                     <p className="card-text"><small className="text-muted">View More</small></p>
                  </div>
               </div>
               <div className="card border-0">
                  <img src="IMG_6743.JPG" className="card-img-top" alt="Outdoor living room amongst the trees" />
                  <div className="card-body">
                     <h5 className="card-title">Blended</h5>
                     <p className="card-text">Eiusmod mollit duis aute aliqua elit sint irure nulla esse aute occaecat aute incididunt ex. Cillum esse ullamco velit sint sint aliqua culpa magna in velit sit laboris.</p>
                     <p className="card-text"><small className="text-muted">View More</small></p>
                  </div>
               </div>
            </div>
         </div>
      )
   }
}

export default CardDeck;
