import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./ImageSwiper.css";

class ImageSwiper extends Component {
  render() {
      return (
        <div className="image-slider">
          <Carousel>
              <div>
              <img src="assets/wedding-image1.jpg" alt="" />
                  <p className="legend">Legend 1</p>
              </div>
              <div>
              <img src="assets/wedding-image2.jpg" alt="" />
                  <p className="legend">Legend 2</p>
              </div>
              <div>
              <img src="assets/wedding-image3.jpg" alt="" />
                  <p className="legend">Legend 3</p>
              </div>
          </Carousel>
          </div>
      );
  }
};

export default ImageSwiper;
