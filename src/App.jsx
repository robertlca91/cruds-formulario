import { useState, useEffect } from 'react';
import './App.css';
import ProductsList from './components/ProductsList';
import ProductsForm from './components/ProductsFrom';
import axios from 'axios';


function App() {
  const [productsList, setProductsList] = useState([]);
  const [productSelected, setProductSelected] = useState(null);
  // posibles valores:
  // null ->                si NO hay productos seleccionados
  // { id: ..., name...} -> si hay un producto seleccionado

  useEffect(() => {
    axios
      .get("http://products-crud.academlo.tech/products/")
      .then((res) => setProductsList(res.data));
  }, []);

  const getProducts = () => {
    axios
      .get("http://products-crud.academlo.tech/products/")
      .then((res) => setProductsList(res.data));
  };

  const addProduct = (newProduct) => {
    axios
      .post("http://products-crud.academlo.tech/products/", newProduct)
      .then(() => getProducts())
      .catch((error) => console.log(error.response?.data));
  };

  const deleteProduct = (id) => {
    axios
      .delete(`http://products-crud.academlo.tech/products/${id}/`)
      .then(() => getProducts());
  };

  const selectProduct = (product) => {
    setProductSelected(product);
  };

  const updateProduct = (editedProduct) => {
    axios
      .put(
        `http://products-crud.academlo.tech/products/${productSelected.id}/`,
        editedProduct
      )
      .then(() => getProducts())
      .catch((error) => console.log(error.response?.data));
    setProductSelected(null);
  };

  return (
    <div className="App">
      <ProductsForm
        addProduct={addProduct}
        productSelected={productSelected}
        updateProduct={updateProduct}
        selectProduct={selectProduct}
      />
      <ProductsList
        productsList={productsList}
        deleteProduct={deleteProduct}
        selectProduct={selectProduct}
      />
    </div>
  );
}

export default App;
