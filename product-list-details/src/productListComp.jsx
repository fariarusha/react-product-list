import React, { useState } from "react";

const ProductListComp = ({ showProducts, showProductList }) => {
  // const myLists = showProducts.myLists;

  return (
    <div className="container mx-auto mt-5">
      <h1 className="text-center">Product List</h1>
      <div >
      <table className="mt-5 table table-striped table-hover table-bordered ">
        <thead>
          <tr>
            <th scope="col">Product Name</th>
            <th scope="col">Product description</th>
            <th scope="col">Product Price</th>
            <th scope="col">Product category</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {showProducts.map((showProduct) => (
            <tr>
              <td>{showProduct.name}</td>
              <td>{showProduct.description}</td>
              <td>{showProduct.price}</td>
              <td>{showProduct.category}</td>
              <td>
                <button onClick={() => showProductList(showProduct)}>
                  view
                </button>
                {/* <button onClick={() => showProductList(showProduct)}>
                  delete
                </button> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      
    </div>
  );
};

export default ProductListComp;
