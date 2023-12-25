import React, { useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { addCart } from '../Store/cartSlice';
import { fetchProducts } from '../Store/Action/getProduct';

export default function Shop() {

  const dispatch = useDispatch();
  const { data: product,status } = useSelector((state) => state.product)
  // const [product, setProduct] = useState([]);

useEffect(() => {
  const fetchProduct = async () => {
    dispatch(fetchProducts());
  };

  fetchProduct();
}, [dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }
    if (status === 'failed') {
    return <div>Something went Wrong</div>;
  }

  const addToCart = (product) => {
    dispatch(addCart(product))
  }

    const cards = product.map(data => (
    <div className="col-md-3" key={data.id}>
            <Card style={{ width: '18rem',marginBottom:"20px" }}  className='h-100'>
                <div className="text-center">
                    <Card.Img variant="top" src={data.image} style={{ width: "100px", height: "120px" }} />
                    </div>
      <Card.Body>
              <Card.Title>{data.title}</Card.Title>
        <Card.Text>
          INR : {data.price}
        </Card.Text>
                </Card.Body>
                <Card.Footer style={{backgroundColor:"white"}}>
                    <Button variant="primary" onClick={() => addToCart(data)}>Add to Cart</Button>
        </Card.Footer>
    </Card>
 </div>
  ));

  return (
    <div>
      <h1>Shopping Dashboard</h1>
      <div className="row">
        {cards}
      </div>
    </div>
  );
}
