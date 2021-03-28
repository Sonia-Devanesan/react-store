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
         <div>
           { items.map(item => (
            <img src={item.img}  alt="homebanner"/>
       ))}
        </div>  
        );
      }

}

export default Banner;
