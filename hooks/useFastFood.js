import { useContext } from "react";
import FastFoodContext from "../context/FastFoodProvider";

const useFastFood = () => {
  return useContext(FastFoodContext);
};

export default useFastFood;
