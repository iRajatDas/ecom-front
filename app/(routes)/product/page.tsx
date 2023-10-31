import { redirect } from "next/navigation";
import React from "react";

const ProductPage = async () => {
  await redirect("/");
  return <div>ProductPage</div>;
};

export default ProductPage;
