import './App.scss';
import { useDispatch, useSelector } from "react-redux";
import { ADD_PRODUCT_action, DECREASE_COUNT_action, INCREASE_COUNT_action } from './store/productListReducer';
import { useEffect } from 'react';

function App() {
  const productList = useSelector(store => store.productList)
  const dispatch = useDispatch()

  useEffect(() => {
    localStorage.setItem('productList', JSON.stringify(productList))
  }, [productList]);

  return (
    <>
      <h1>Продуктовая корзина</h1>
      <button onClick={() => dispatch(ADD_PRODUCT_action(prompt('добавить новый продукт')))}>добавить новый товар</button>
      {
        productList.map(productItem => (
          <div className='productItem' key={productItem.id}>
            <h2>{productItem.title}</h2>
            <button className='minus' onClick={() => dispatch(DECREASE_COUNT_action(productItem.id))}> - </button>
            <p>{productItem.count}</p>
            <button className='plus' onClick={() => dispatch(INCREASE_COUNT_action(productItem.id))} disabled={productItem.count >= 25}> + </button>
          </div>
        ))
      }
    </>
  );
}

export default App;
