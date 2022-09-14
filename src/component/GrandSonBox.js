import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
const GrandSonBox = () => {
  let count = useSelector((state) => state.count);
  return <div>this is GrnadSonBox {count}</div>;
};

export default GrandSonBox;
