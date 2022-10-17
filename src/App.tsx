import React, { useState } from 'react';
import { Loader } from './components/Loader';
import { ErrorMessage } from './components/ErrorMessage';
import { Product } from './components/product';
import { useProducts } from './hooks/products';
import { Modal } from './components/Modal'
import { CreateProduct } from './components/CreateProduct';
import { IProduct } from './models';

function App() {
  const { products, error, loading, addProduct } = useProducts();
  const [modal, setModal] = useState(false);
  const createHandler = (product: IProduct) => {
    setModal(false);
    addProduct(product)
  }

  return (
    <div className='container mx-auto max-w-2xl pt-5'>
      {error && <ErrorMessage error={error} />}
      {loading && <Loader  /> }
      {products.map(product => <Product product={product} key={product.id} />)}
      {modal && <Modal onClose={() => setModal(false)} title='Create new product'>
        <CreateProduct onCreate={createHandler} />
      </Modal>}
      <button type="button" className="rounded-full fixed top-5 right-5 py-2 px-4 bg-red-700 text-white text-2xl" onClick={() => setModal(true)}>+</button>
    </div>

  )
}

export default App;
