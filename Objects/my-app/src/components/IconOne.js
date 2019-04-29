import React, { Component } from 'react';



class IconOne extends Component {
    render() {
        return (
         <div>
          <img src={require('./smile.svg')} className="smile-logo" />
          <img src={require('./music.svg')} className="music-logo" />
          <img src={require('./bell.svg')} className="bell-logo" />
          <img src={require('./star.svg')} className="star-logo" />
          </div>   
          
         
        );
      }
    }



export default IconOne;