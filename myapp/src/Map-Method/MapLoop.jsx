import React from 'react';

function MapLoop() {
  var products = [
    { name: 'apple', price: 200 },
    { name: 'mango', price: 50 },
    { name: 'banana', price: 60 },
  ];

  return (
    <div>
      {/* <h4>Product Name: {products[0].name}</h4>
      <h4>Product Price: {products[0].price}</h4>
      <h4>Product Name: {products[1].name}</h4>
      <h4>Product Price: {products[1].price}</h4>
      <h4>Product Name: {products[2].name}</h4>
      <h4>Product Price: {products[2].price}</h4> */}

      {products.map((product) => {
        return (
          <div
            style={{
              border: '2px solid',
              padding: '10px',
              margin: '10px',
            }}
          >
            <h4>Product Name: {product.name} </h4>
            <h4>Product Price:{product.price} </h4>
          </div>
        );
      })}
    </div>
  );
}

export default MapLoop;
