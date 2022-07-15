import { useEffect, useState } from "react";
import axios from "axios";
import { URLSingleProduct } from "../../constants/theme";

const UseProduct = (id) => {
  const [product, setProduct] = useState(null);

  const fetchProducts = async () => {
    const res = await axios.get(`${URLSingleProduct}${id}`);
    const data = await res.data;
    setProduct(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  if (product) return product;
};

export default UseProduct;
