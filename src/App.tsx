import React from 'react';
import { Loader } from './components/Loader';
import { ErrorMessage } from './components/ErrorMessage';
import { Product } from './components/product';
import { useProducts } from './hooks/products';
import { Modal } from './components/Modal';
import { CreateProduct } from './components/CreateProduct';

function App() {
  const {products, error, loading} = useProducts();
  return (
    <div className='container mx-auto max-w-2xl pt-5'>
      {error && <ErrorMessage error={error} />}
      {loading && <Loader  /> }
      {products.map(product => <Product product={product} key={product.id} />)}
      <Modal>
        <CreateProduct/>
      </Modal>
    </div>

  )
}

export default App;
