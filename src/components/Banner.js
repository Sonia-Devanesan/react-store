import React from 'react';
import { Link } from 'react-router-dom';


const items = [

    {
        img: "./banner.jpg",
    }

]

class Banner extends React.Component{


    render() {
        return (
            <>
        <div class="hero-image">
           { items.map(item => (
            <img src={item.img}  alt="homebanner"/>
       ))}
        </div>  
        <div class="hero-text">
          <button><Link to ="/listing">View Products</Link></button>
        </div>
      </>
        );
        
      }

}

export default Banner;
