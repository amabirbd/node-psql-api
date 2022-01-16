import React, { useEffect, useState } from "react";
const axios = require("axios");

function Products() {
  const [data, setData] = useState([]);
  const [errors, setErrors] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/products")
      .then(function (response) {
        // handle success
        setData(response.data);
      })
      .catch(function (error) {
        // handle error
        setErrors(error);
      });
  }, []);
  return (
    <div>
      <h1>Products</h1>
      {data.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </div>
  );
}

export default Products;
