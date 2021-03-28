import React from 'react';
import { productList } from '../assets/productsList';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';







class CartPage extends React.Component{

  state = {
    data: [],
  }
  componentDidMount() {
    this.setState({
      data: productList.data,
    })
  }

  




  
  render() {
    
    return (
      <table className="table">
        <thead>
          <tr>
            <th>id</th>
            <th>Product Name</th>
            <th>Product Image</th>
            <th>Quantity</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            
            this.state.data
              .map(product => (
                <tr key={product.id} >
                <td>{product.id}</td>
                <td>{product.name}</td>  
                <td><div class ="zoom"><img src={product.image}  alt="products"/></div></td>
                <td><input type="text" value ={product.quantity}></input></td>  
                <td>{product.price ? product.price : product.variants?.[0].price}</td>
                <td><button>Remove</button></td>
              </tr>
              
              ))
          }
        
              
        </tbody>
        </table>
    )
  }
}

const mapStateToProps = (state)=>{
  return {
    items: state.items
  }
}


export default CartPage;




