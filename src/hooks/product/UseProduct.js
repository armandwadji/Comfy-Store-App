import { useEffect, useState } from "react";
import axios from "axios";
import { URLSingleProduct } from "../../constants/theme";

const UseProduct = (id) => {
  const [product, setProduct] = useState(null);

  const fetchProducts = async () => {
    try {
      const res = await axios.get(`${URLSingleProduct}${id}`);
      const data = await res.data;
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return product;
};

export default UseProduct;
