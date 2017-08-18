/**
*
* Slider
*
*/

import React from 'react';

import './style.css';
import './styleM.css';

import leftIcon from 'react-icons/lib/fa/chevron-left';
import rightIcon from 'react-icons/lib/fa/chevron-right';

export default class Slider extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      images: ['Asheville-1.jpg','Asheville-2.jpg','Asheville-3.jpg','Asheville-4.jpg','Asheville-5.jpg','Asheville-6.jpg'],
      activeIndex:1
    }
  }
  renderImage = () => {
    var images = this.state.images;
    var activeIndex = this.state.activeIndex;

    for(var i = 0; i < images.length; i++)
    {
      if(i === activeIndex)
      {
        return images[i];
      }
    }
  }
nextImage = () => {
  var images = this.state.images;
  var activeIndex = this.state.activeIndex;

  if(activeIndex + 1 < images.length)
  {
    this.setState({
      activeIndex: activeIndex + 1,
    })
  }
  else
  {
    this.setState({
      activeIndex: 0,
    })
  }
}
previousImage = () => {
  var images = this.state.images;
  var activeIndex = this.state.activeIndex;

  if(activeIndex - 1 >= 0)
  {
    this.setState({
      activeIndex: activeIndex -1,
    })
  }
  else
  {
    this.setState({
      activeIndex: images.length - 1,
    })
  }
}
componentDidMount() {
  this.autoSlide();
}
autoSlide = () => {
  var _this = this;
  setInterval(function(){
    _this.nextImage();
  }, 5000);
}
stopAutoSlide = () => {
    clearInterval(autoSlide);
}
  render() {
    return (
      <div>
        <div className="slider">
          <img className="slideImage" src={require('../../images/' + this.renderImage())} />
          <leftIcon className="sliderIconLeft" onClick={this.previousImage} />
          <rightIcon className="sliderIconRight" onClick={this.nextImage}/>
        </div>
      </div>
    );
  }
}


Slider.contextTypes = {
  router: React.PropTypes.object
};
