import React from "react";
import { useState } from "react";
import { useEffect } from "react";

// name, category, price, isAvailable

const ProductsForm = ({
  addProduct,
  productSelected,
  updateProduct,
  selectProduct
}) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [isAvailable, setIsAvailable] = useState(false);

  useEffect(() => {
    if (productSelected !== null) {
      setName(productSelected.name);
      setCategory(productSelected.category);
      setPrice(productSelected.price);
      setIsAvailable(productSelected.isAvailable);
    } else {
      reset();
    }
  }, [productSelected]);

  const submit = (e) => {
    e.preventDefault();
    const product = {
      // id: Date.now(),
      name: name,
      category: category,
      price: price,
      isAvailable: isAvailable
    };
    if (productSelected) {
      updateProduct(product);
    } else {
      addProduct(product);
    }
    reset();
  };

  const reset = () => {
    setName("");
    setCategory("");
    setPrice("");
    setIsAvailable(false);
  };

  return (
    <form className="products-form" onSubmit={submit}>
      <div className="input-container">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </div>
      <div className="input-container">
        <label htmlFor="category">Category</label>
        <input
          type="text"
          id="category"
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        />
      </div>
      <div className="input-container">
        <label htmlFor="price">Price</label>
        <input
          type="text"
          id="price"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />
      </div>
      <div>
        <label htmlFor="isAvailable">Is available</label>
        <input
          type="checkbox"
          id="isAvailable"
          checked={isAvailable}
          onChange={(e) => setIsAvailable(e.target.checked)}
        />
      </div>
      <button>Submit</button>
      {productSelected && (
        <button type="button" onClick={() => selectProduct(null)}>
          Cancel
        </button>
      )}
    </form>
  );
};

export default ProductsForm;
