import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { decrementCart, deleteCart, incrementCart } from '../Store/cartSlice';

export default function Cart() {
    const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  
    const deleteFromCart = (product) => {
        dispatch(deleteCart(product))
    }
  
  const addItem = (product) => {
    dispatch(incrementCart(product))
  }

  const removeItem = (product) => {
    dispatch(decrementCart(product))
  }
    return (
      <div className="row">
     {cart.map(data => (
    <div className="col-md-3" key={data.id}>
            <Card style={{ width: '18rem',marginBottom:"20px" }}  className='h-100'>
                <div className="text-center">
                    <Card.Img variant="top" src={data.image} style={{ width: "100px", height: "120px" }} />
                    </div>
      <Card.Body>
              <Card.Title>{data.title}</Card.Title>
        <Card.Text>
               INR : {data.totalPrice}
        </Card.Text>
             <Card.Text style={{
               display: 'flex', gap:"50px"}}>
               <Button variant='warning' onClick={() => removeItem(data)}>-</Button>
               Quantity : {Math.floor(data.quantity)}
               <Button variant='success' onClick={() => addItem(data)}>+</Button>

             </Card.Text>    
           </Card.Body>
      
                <Card.Footer style={{backgroundColor:"white"}}>
                    <Button variant="danger" onClick={() => deleteFromCart(data.id)}>Remove</Button>
        </Card.Footer>
    </Card>
         </div>
 ))}
      </div>
  )
}
