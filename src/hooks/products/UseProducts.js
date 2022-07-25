import { useEffect, useState } from "react";
import axios from "axios";
import { URLProducts } from "../../constants/theme";

const UseProducts = () => {
  const [products, setProducts] = useState(null);

  const fetchProducts = async () => {
    try {
      const res = await axios.get(URLProducts);
      const data = await res.data;
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return products;
};

export default UseProducts;
