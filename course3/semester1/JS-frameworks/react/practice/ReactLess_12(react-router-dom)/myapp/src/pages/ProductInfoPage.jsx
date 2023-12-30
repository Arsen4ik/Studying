import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom"

export function ProductInfoPage() {
  const { id } = useParams();
  const location = useLocation();
  console.log(location);
  const [product, setProduct] = useState({ images: [] });

  useEffect(() => {
    if (location.state) {
      setProduct(location.state)
      console.log('optimaze')
    } else {
      fetch('https://dummyjson.com/products/' + id)
        .then(res => res.json())
        .then(data => setProduct(data));
    }
  }, [id]);

  return (
    <div className="content">
      <div>
        <h2>{product.title}</h2>
        <img src={product.images[0]} />
        <p>Цена: {product.price}$</p>
        <p>{product.description}</p>
      </div>
    </div>
  )
}