import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const SingleProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <div>
      <h2>SingleProduct - {id}</h2>
      <button onClick={() => navigate(-1)}> go back </button>
    </div>
  );
};

export default SingleProduct;
