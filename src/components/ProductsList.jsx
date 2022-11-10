import React from "react";

const ProductsList = ({ productsList, deleteProduct, selectProduct }) => {
  return (
    <ul className="products-list">
      {productsList.map((product) => (
        <li key={product.id}>
          {/* <div>{product.id}</div> */}
          <h3>{product.name}</h3>
          <div>
            <b>Category:</b>
            {product.category}
          </div>
          <div>
            <b>Price:</b> ${product.price}
          </div>
          <div>
            <b>Is Available:</b> {product.isAvailable.toString()}
          </div>
          <button onClick={() => deleteProduct(product.id)}>Delete</button>
          <button onClick={() => selectProduct(product)}>Select</button>
        </li>
      ))}
    </ul>
  );
};

export default ProductsList;
