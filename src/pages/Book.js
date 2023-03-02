import React from "react";
import { useParams } from "react-router-dom";

export default function Product() {
  const params = useParams();
  console.log(params.bookID);
  return <div>You are about to access book: {params.bookID}</div>;
}
