import React, { useState } from 'react';
import { Product } from './components/product';
import { products } from './data/products';


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='container mx-auto max-w-2xl pt-5'>
      {products.map(product => <Product product={product} key={product.id} />)}

      {/* <Product product={products[0]} />
      <Product product={products[1]}/> */}

    </div>
    
  )
}

export default App;
