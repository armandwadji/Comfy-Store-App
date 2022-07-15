import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { URLProducts } from "../../constants/theme";

const UseProducts = () => {
  const [products, setProducts] = useState(null);

  const fetchProducts = async () => {
    const res = await axios.get(URLProducts);
    const data = await res.data;
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return products;
};

export default UseProducts;
