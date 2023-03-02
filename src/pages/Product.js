import React from "react";
import { useParams } from "react-router-dom";

export default function Product() {
  const params = useParams();
  console.log(params.productID);
  return <div>This will show product number: {params.productID}</div>;
}

// rfc
